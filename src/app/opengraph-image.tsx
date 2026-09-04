import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { palette } from "@/lib/theme";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: palette.bg,
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontSize: 24,
          color: palette.success,
        }}
      >
        <span>GET</span>
        <span style={{ color: palette.muted }}>/sobre</span>
      </div>
      <div style={{ marginTop: 24, fontSize: 56, fontWeight: 700, color: palette.text }}>
        {siteConfig.name}
      </div>
      <div style={{ marginTop: 16, fontSize: 28, color: palette.accent }}>{siteConfig.role}</div>
    </div>,
    { ...size },
  );
}
