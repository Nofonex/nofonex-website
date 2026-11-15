import { ImageResponse } from "next/og"

// Temporary share image for /sofowo in the brand colour (#321938, white letters).
// Replace with the official logo once the owner supplies it.

export const alt = "SoFoWo: songbook and setlists for worship teams. Free during the beta."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#321938",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: 8, opacity: 0.85 }}>SFW</div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 24 }}>SoFoWo</div>
        <div style={{ display: "flex", fontSize: 44, marginTop: 16, maxWidth: 1000 }}>
          Songbook and setlists for worship teams
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 30,
            padding: "10px 24px",
            borderRadius: 999,
            border: "2px solid #ffffff",
            alignSelf: "flex-start",
          }}
        >
          Free during the beta
        </div>
      </div>
    ),
    size,
  )
}
