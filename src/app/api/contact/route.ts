import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  checkRateLimit,
  detectCrlfInjection,
  detectSqlInjection,
  escapeHtml,
  getClientIp,
  isAllowedOrigin,
  isValidEmail,
  SECURITY_LIMITS,
} from "@/lib/security";

export async function POST(request: Request) {
  try {
    // 1. Origin & CSRF Validation Guard
    if (!isAllowedOrigin(request)) {
      return NextResponse.json(
        {
          error:
            "Security Protocol Alert: Cross-origin transmission forbidden.",
        },
        { status: 403 }
      );
    }

    // 2. Payload Volume Guard (Anti-DoS)
    const contentLength = request.headers.get("content-length");
    if (
      contentLength &&
      parseInt(contentLength, 10) > SECURITY_LIMITS.MAX_PAYLOAD_BYTES
    ) {
      return NextResponse.json(
        {
          error:
            "Security Protocol Alert: Transmission payload exceeds volume threshold (64KB).",
        },
        { status: 413 }
      );
    }

    // 3. Sliding-Window IP Rate Limiter (Anti-Spam / Anti-Bruteforce)
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      const waitMinutes = Math.ceil(rateLimit.retryAfterSeconds / 60);
      return NextResponse.json(
        {
          error: `Security Protocol Alert: Rate limit exceeded. Too many transmissions dispatched from node (${clientIp}). Please wait ${waitMinutes} minute(s) before transmitting again.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": rateLimit.retryAfterSeconds.toString(),
          },
        }
      );
    }

    // 4. Safe JSON Body Deserialization
    let body: any;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Malformed payload: Expected valid JSON structure." },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      scope,
      message,
      honeypot,
      formMountedAt,
    } = body;

    // 5. Honeypot Anti-Spam Trap Detection
    // Bots automatically populate invisible form inputs; real humans never do.
    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      console.warn(
        `[Security Shield] Automated bot trapped by honeypot from IP: ${clientIp}`
      );
      // Return 200 OK without transmitting email so bots believe the submission succeeded
      return NextResponse.json({
        success: true,
        message: "Transmission received and logged into telemetry archive.",
      });
    }

    // 6. Speed-Bot Timing Analysis
    // Submissions within < 1.8 seconds indicate automated script generation.
    if (typeof formMountedAt === "number" && formMountedAt > 0) {
      const elapsedMs = Date.now() - formMountedAt;
      if (elapsedMs < SECURITY_LIMITS.MIN_SUBMISSION_TIME_MS) {
        console.warn(
          `[Security Shield] Sub-second speed bot detected (${elapsedMs}ms) from IP: ${clientIp}`
        );
        return NextResponse.json({
          success: true,
          message: "Transmission received and logged into telemetry archive.",
        });
      }
    }

    // 7. Strict Type & Existence Verification
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedScope =
      typeof scope === "string" && scope.trim()
        ? scope.trim()
        : "General Architecture Inquiry";
    const trimmedMessage = message.trim();

    // 8. Parameter Length Boundaries
    if (
      trimmedName.length < SECURITY_LIMITS.MIN_NAME_LENGTH ||
      trimmedName.length > SECURITY_LIMITS.MAX_NAME_LENGTH
    ) {
      return NextResponse.json(
        {
          error: `Name parameter must be between ${SECURITY_LIMITS.MIN_NAME_LENGTH} and ${SECURITY_LIMITS.MAX_NAME_LENGTH} characters.`,
        },
        { status: 400 }
      );
    }

    if (
      trimmedEmail.length < SECURITY_LIMITS.MIN_EMAIL_LENGTH ||
      trimmedEmail.length > SECURITY_LIMITS.MAX_EMAIL_LENGTH
    ) {
      return NextResponse.json(
        {
          error: `Email address parameter must be between ${SECURITY_LIMITS.MIN_EMAIL_LENGTH} and ${SECURITY_LIMITS.MAX_EMAIL_LENGTH} characters.`,
        },
        { status: 400 }
      );
    }

    if (trimmedScope.length > SECURITY_LIMITS.MAX_SCOPE_LENGTH) {
      return NextResponse.json(
        { error: "Project scope exceeds permitted string boundaries." },
        { status: 400 }
      );
    }

    if (
      trimmedMessage.length < SECURITY_LIMITS.MIN_MESSAGE_LENGTH ||
      trimmedMessage.length > SECURITY_LIMITS.MAX_MESSAGE_LENGTH
    ) {
      return NextResponse.json(
        {
          error: `Message brief must contain between ${SECURITY_LIMITS.MIN_MESSAGE_LENGTH} and ${SECURITY_LIMITS.MAX_MESSAGE_LENGTH} characters.`,
        },
        { status: 400 }
      );
    }

    // 9. CRLF / SMTP Header Injection Guard
    if (
      detectCrlfInjection(trimmedName) ||
      detectCrlfInjection(trimmedEmail) ||
      detectCrlfInjection(trimmedScope)
    ) {
      console.warn(
        `[Security Shield] CRLF Header Injection attempt blocked from IP: ${clientIp}`
      );
      return NextResponse.json(
        {
          error:
            "Security Protocol Alert: Illegal carriage return or line break detected in header parameters.",
        },
        { status: 400 }
      );
    }

    // 10. Strict RFC-Compliant Email Syntax Verification
    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json(
        {
          error:
            "Invalid email format: Please supply a valid RFC-5322 compliant address.",
        },
        { status: 400 }
      );
    }

    // 11. SQL Injection Pattern Detection (Defense-in-depth)
    if (detectSqlInjection(trimmedName) || detectSqlInjection(trimmedEmail)) {
      console.warn(
        `[Security Shield] SQL Injection attack vector detected in identity parameters from IP: ${clientIp}`
      );
      return NextResponse.json(
        {
          error:
            "Security Protocol Alert: Prohibited SQL syntax signature detected in transmission parameters.",
        },
        { status: 400 }
      );
    }

    // 12. Server Environment Configuration Check
    const gmailUser = process.env.GMAIL_USER || "yohanesdimas888@gmail.com";
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || gmailUser;

    if (!gmailPass) {
      console.error(
        "[Nodemailer] GMAIL_APP_PASSWORD is not set in environment variables."
      );
      return NextResponse.json(
        {
          error:
            "Mail server gateway is unconfigured. Please configure GMAIL_APP_PASSWORD in .env.local with a 16-character Google App Password.",
        },
        { status: 500 }
      );
    }

    // 13. HTML Entity Escaping (Anti-XSS & Anti-HTML Injection)
    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeScope = escapeHtml(trimmedScope);
    const safeMessage = escapeHtml(trimmedMessage);
    const safeIp = escapeHtml(clientIp);
    const timestampUtc = new Date().toISOString();

    // 14. Initialize Nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // 15. Encrypted Futuristic Cyber HTML Email Template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Secured Transmission Brief</title>
</head>
<body style="margin: 0; padding: 0; background-color: #05070D; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #E2E8F0;">
  <div style="max-width: 620px; margin: 30px auto; background-color: #0A0E1A; border: 1px solid #1E293B; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.85);">
    
    <!-- Header Banner -->
    <div style="background: linear-gradient(135deg, #0F172A 0%, #0369A1 100%); padding: 24px 30px; border-bottom: 2px solid #38BDF8;">
      <div style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #38BDF8; font-weight: bold;">
        [ INCOMING TRANSMISSION // SECURED & VERIFIED ]
      </div>
      <h1 style="margin: 8px 0 0; font-size: 20px; color: #FFFFFF; font-weight: 700;">
        Project Brief from ${safeName}
      </h1>
    </div>

    <!-- Telemetry & Security Clearance Grid -->
    <div style="padding: 24px 30px; background-color: #080C16; border-bottom: 1px solid #1E293B;">
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        <tr>
          <td style="padding: 6px 0; color: #94A3B8; font-family: monospace; width: 150px;">SENDER IDENTITY:</td>
          <td style="padding: 6px 0; color: #FFFFFF; font-weight: 600;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #94A3B8; font-family: monospace;">RETURN CHANNEL:</td>
          <td style="padding: 6px 0; color: #38BDF8;">
            <a href="mailto:${safeEmail}" style="color: #38BDF8; text-decoration: none;">${safeEmail}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #94A3B8; font-family: monospace;">PROJECT DOMAIN:</td>
          <td style="padding: 6px 0; color: #34D399; font-weight: 600;">${safeScope}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #94A3B8; font-family: monospace;">ORIGIN IP NODE:</td>
          <td style="padding: 6px 0; color: #93C5FD; font-family: monospace; font-size: 12px;">${safeIp}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #94A3B8; font-family: monospace;">TIMESTAMP (UTC):</td>
          <td style="padding: 6px 0; color: #CBD5E1; font-family: monospace; font-size: 12px;">${timestampUtc}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #94A3B8; font-family: monospace;">SHIELD STATUS:</td>
          <td style="padding: 6px 0; color: #10B981; font-family: monospace; font-size: 11px; font-weight: bold;">
            PASSED (HONEYPOT · CRLF · SQLi · XSS SANITIZED)
          </td>
        </tr>
      </table>
    </div>

    <!-- Message Brief -->
    <div style="padding: 30px;">
      <div style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #94A3B8; margin-bottom: 12px;">
        SYSTEM REQUIREMENTS & PROJECT OBJECTIVES:
      </div>
      <div style="background-color: #0F172A; border: 1px solid #334155; border-radius: 12px; padding: 20px; font-size: 14px; line-height: 1.7; color: #F1F5F9; white-space: pre-wrap; word-break: break-word;">
${safeMessage}
      </div>
    </div>

    <!-- Quick Reply Footer -->
    <div style="padding: 20px 30px; background-color: #05070D; border-top: 1px solid #1E293B; font-size: 12px; color: #64748B; text-align: center;">
      <p style="margin: 0 0 10px;">
        You can directly reply to this email to correspond with <strong>${safeName}</strong> at <strong>${safeEmail}</strong>.
      </p>
      <div style="font-family: monospace; font-size: 10px; color: #475569;">
        ZERO-KNOWLEDGE ENCRYPTED // SMTP DISPATCH GATEWAY // YDP CYBERSHIELD 2026
      </div>
    </div>
  </div>
</body>
</html>
    `;

    // 16. Sanitized Plain-Text Fallback
    const textContent = `
[ INCOMING TRANSMISSION // SECURED & VERIFIED ]
==================================================
From: ${trimmedName} (${trimmedEmail})
Domain / Scope: ${trimmedScope}
Origin IP: ${clientIp}
Timestamp (UTC): ${timestampUtc}
Security: PASSED (HONEYPOT, CRLF, SQLi, XSS VERIFIED)

PROJECT REQUIREMENTS & OBJECTIVES:
--------------------------------------------------
${trimmedMessage}
==================================================
Reply directly to this email to contact ${trimmedName} (${trimmedEmail}).
    `.trim();

    // 17. Send Email via Gmail SMTP
    const info = await transporter.sendMail({
      from: `"Portfolio Cyber Gateway" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: trimmedEmail,
      subject: `[Portfolio Inquiry] ${trimmedScope} - from ${trimmedName}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      message: "Transmission dispatched and logged successfully.",
      remainingTransmissions: rateLimit.remaining,
    });
  } catch (error: any) {
    console.error("[Nodemailer Transmission Error]:", error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to dispatch transmission through gateway. Please verify mail credentials.",
      },
      { status: 500 }
    );
  }
}
