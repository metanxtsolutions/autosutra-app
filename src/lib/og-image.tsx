import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function renderOgImage({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0a0f1f",
          backgroundImage:
            "radial-gradient(circle at 12% -10%, rgba(242,98,34,0.35), transparent 55%), radial-gradient(circle at 92% 105%, rgba(255,176,32,0.28), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              width: 40,
              height: 40,
              borderRadius: 12,
              backgroundColor: "#f26222",
              marginRight: 16,
            }}
          />
          <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>
            <span style={{ color: "#ffffff" }}>Auto</span>
            <span style={{ color: "#f26222" }}>Sutra</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 600,
              color: "#ffb020",
              textTransform: "uppercase",
              letterSpacing: 4,
              marginBottom: 20,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.15,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          autosutra.in
        </div>
      </div>
    ),
    { ...ogImageSize },
  );
}
