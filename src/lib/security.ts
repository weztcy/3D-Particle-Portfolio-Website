/**
 * Cyber Security Suite for Transmission Endpoints
 * 
 * Provides defense-in-depth protections:
 * - Sliding-Window IP Rate Limiting (Anti-DoS / Anti-Bruteforce)
 * - Honeypot Bot Trap (Anti-Spam)
 * - Anti-Speed Bot Verification (Timing analysis)
 * - CRLF / Email Header Injection Prevention
 * - SQL Injection & Script Injection Pattern Heuristics
 * - Strict HTML & XSS Sanitization for Email Templates
 * - Cross-Site Request Forgery (CSRF) & Origin Verification
 */

export const SECURITY_LIMITS = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 100,
  MIN_EMAIL_LENGTH: 5,
  MAX_EMAIL_LENGTH: 120,
  MAX_SCOPE_LENGTH: 100,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 4000,
  MIN_SUBMISSION_TIME_MS: 1800, // Humans need at least 1.8s to submit
  RATE_LIMIT_WINDOW_MS: 10 * 60 * 1000, // 10 minutes
  MAX_REQUESTS_PER_WINDOW: 5, // 5 requests per 10 minutes per IP
  MAX_PAYLOAD_BYTES: 64 * 1024, // 64 KB
};

interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitStore = new Map<string, RateLimitRecord>();

/**
 * IP-based Sliding Window Rate Limiter
 */
export function checkRateLimit(ip: string): {
  allowed: boolean;
  retryAfterSeconds: number;
  remaining: number;
} {
  const now = Date.now();
  const record = rateLimitStore.get(ip) || { timestamps: [] };

  // Retain only active timestamps within the sliding window
  const activeTimestamps = record.timestamps.filter(
    (time) => now - time < SECURITY_LIMITS.RATE_LIMIT_WINDOW_MS
  );

  if (activeTimestamps.length >= SECURITY_LIMITS.MAX_REQUESTS_PER_WINDOW) {
    const oldest = activeTimestamps[0];
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((oldest + SECURITY_LIMITS.RATE_LIMIT_WINDOW_MS - now) / 1000)
    );
    return {
      allowed: false,
      retryAfterSeconds,
      remaining: 0,
    };
  }

  activeTimestamps.push(now);
  rateLimitStore.set(ip, { timestamps: activeTimestamps });

  // Housekeeping cleanup to prevent memory growth
  if (rateLimitStore.size > 1000) {
    for (const [key, rec] of rateLimitStore.entries()) {
      const valid = rec.timestamps.filter(
        (time) => now - time < SECURITY_LIMITS.RATE_LIMIT_WINDOW_MS
      );
      if (valid.length === 0) {
        rateLimitStore.delete(key);
      } else {
        rateLimitStore.set(key, { timestamps: valid });
      }
    }
  }

  return {
    allowed: true,
    retryAfterSeconds: 0,
    remaining: SECURITY_LIMITS.MAX_REQUESTS_PER_WINDOW - activeTimestamps.length,
  };
}

const IP_FORMAT_REGEX = /^[a-fA-F0-9:.]+$/;

function sanitizeIp(rawIp: string | null | undefined): string | null {
  if (!rawIp) return null;
  const trimmed = rawIp.trim();
  if (trimmed.length < 3 || trimmed.length > 45) return null;
  if (!IP_FORMAT_REGEX.test(trimmed)) return null;
  return trimmed;
}

/**
 * Extracts and validates Client IP address prioritizing trusted reverse-proxy headers
 */
export function getClientIp(request: Request): string {
  // 1. Cloudflare connecting IP (upstream-verified proxy header)
  const cfConnectingIp = sanitizeIp(request.headers.get("cf-connecting-ip"));
  if (cfConnectingIp) return cfConnectingIp;

  // 2. Standard reverse proxy real IP (Nginx, Vercel edge proxy)
  const realIp = sanitizeIp(request.headers.get("x-real-ip"));
  if (realIp) return realIp;

  // 3. Fallback to X-Forwarded-For header (first upstream hop)
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const firstRaw = forwardedFor.split(",")[0]?.trim();
    const validatedFirst = sanitizeIp(firstRaw);
    if (validatedFirst) return validatedFirst;
  }

  return "127.0.0.1";
}

/**
 * CSRF and Origin Guard with Reverse-Proxy Host Alignment
 */
export function isAllowedOrigin(request: Request): boolean {
  const secFetchSite = request.headers.get("sec-fetch-site");
  if (secFetchSite === "cross-site") {
    return false;
  }

  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  const forwardedHost = request.headers.get("x-forwarded-host");
  const targetHost = forwardedHost || host;

  if (origin) {
    try {
      const originUrl = new URL(origin);
      // Allow localhost & loopback in dev
      if (
        originUrl.hostname === "localhost" ||
        originUrl.hostname === "127.0.0.1"
      ) {
        return true;
      }
      // Match origin host with request Host or Forwarded Host
      if (
        targetHost &&
        (originUrl.host === targetHost || (host && originUrl.host === host))
      ) {
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }

  // If origin header is absent, inspect Referer header when provided
  const referer = request.headers.get("referer");
  if (referer) {
    try {
      const refererUrl = new URL(referer);
      if (
        refererUrl.hostname === "localhost" ||
        refererUrl.hostname === "127.0.0.1"
      ) {
        return true;
      }
      if (
        targetHost &&
        (refererUrl.host === targetHost || (host && refererUrl.host === host))
      ) {
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }

  // Direct same-origin navigation or test clients
  return true;
}

/**
 * CRLF & Null Byte / Email Header Injection Detector
 * Ensures single-line header fields cannot inject SMTP carriage returns, newlines, or null bytes
 */
export function detectCrlfInjection(input: string): boolean {
  if (/[\r\n\0]/.test(input)) return true;
  if (/%0[ad0]/i.test(input)) return true;
  return false;
}

/**
 * SQL Injection Detection Heuristic
 * Identifies standard SQL injection attack vectors in parameters
 */
const SQL_INJECTION_PATTERNS = [
  /(\b(select\s+.*?\s+from|insert\s+into|drop\s+table|update\s+.*?\s+set|delete\s+from|alter\s+table|create\s+table|truncate\s+table|exec(\s+|\()|execute(\s+|\()|union(\s+all)?\s+select)\b)/i,
  /(\b(or|and)\s+['"]?\w+['"]?\s*=\s*['"]?\w+['"]?)/i,
  /(--|\/\*|\*\/|;\s*waitfor\s+delay|;\s*shutdown)/i,
  /\b(sleep|benchmark)\s*\(\s*\d+\s*\)/i,
  /'\s*or\s*'[^']*'='[^']*/i,
  /"\s*or\s*"[^"]*"="[^"]*/i,
];

export function detectSqlInjection(input: string): boolean {
  return SQL_INJECTION_PATTERNS.some((pattern) => pattern.test(input));
}

/**
 * HTML Entity Encoder (Anti-XSS / Anti-HTML Injection)
 * Ensures user content displayed inside HTML emails cannot execute scripts or load malicious tags
 */
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Strict RFC 5322 Compliant Email Format Validator
 */
export function isValidEmail(email: string): boolean {
  if (email.length > SECURITY_LIMITS.MAX_EMAIL_LENGTH) return false;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

