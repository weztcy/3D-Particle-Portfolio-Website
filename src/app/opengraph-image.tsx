import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Yohanes Dimas Pratama | Web Developer, Data Analyst, AI & Machine Learning Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#05070D",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          border: "2px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Top Header Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(14, 165, 233, 0.1)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              color: "#38BDF8",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "2px",
            }}
          >
            <span>●</span>
            <span>PORTFOLIO TELEMETRY // PRODUCTION DECK</span>
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#94A3B8",
              fontFamily: "monospace",
            }}
          >
            yohanesdimas.com
          </div>
        </div>

        {/* Middle Main Brand & Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
            }}
          >
            Yohanes Dimas Pratama
          </div>
          <div
            style={{
              fontSize: "26px",
              fontWeight: 500,
              color: "#38BDF8",
              lineHeight: 1.3,
            }}
          >
            Web Developer · Data Analyst · AI Engineer · Machine Learning Engineer
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#94A3B8",
              lineHeight: 1.4,
              maxWidth: "900px",
            }}
          >
            Architecting modern full-stack web platforms, deep data analytics, autonomous AI systems, and production machine learning pipelines.
          </div>
        </div>

        {/* Bottom Metric Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              color: "#F1F5F9",
              fontSize: "16px",
            }}
          >
            <span style={{ color: "#38BDF8", fontWeight: 700 }}>4+</span>
            <span>Years Experience</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              color: "#F1F5F9",
              fontSize: "16px",
            }}
          >
            <span style={{ color: "#818CF8", fontWeight: 700 }}>18+</span>
            <span>Projects Completed</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              color: "#F1F5F9",
              fontSize: "16px",
            }}
          >
            <span style={{ color: "#34D399", fontWeight: 700 }}>18+</span>
            <span>Certifications</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              color: "#F1F5F9",
              fontSize: "16px",
            }}
          >
            <span style={{ color: "#F472B6", fontWeight: 700 }}>Published</span>
            <span>Sinta 3 Journal</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

