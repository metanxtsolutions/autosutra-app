import { ImageResponse } from "next/og";
import type { CoverCluster } from "@/data/resources";

export const resourceCoverSize = { width: 1200, height: 675 };
export const resourceCoverContentType = "image/png";

type CoverShape = "circle" | "grid" | "ring" | "bubble" | "triangle" | "diamond" | "dot";

const clusterMeta: Record<
  CoverCluster,
  { label: string; shape: CoverShape; gradient: string }
> = {
  leads: {
    label: "Lead Generation",
    shape: "circle",
    gradient:
      "radial-gradient(circle at 10% -10%, rgba(242,98,34,0.45), transparent 55%), radial-gradient(circle at 100% 110%, rgba(255,176,32,0.25), transparent 55%)",
  },
  crm: {
    label: "CRM & Automation",
    shape: "grid",
    gradient:
      "radial-gradient(circle at 100% -10%, rgba(255,176,32,0.4), transparent 55%), radial-gradient(circle at 0% 110%, rgba(242,98,34,0.3), transparent 55%)",
  },
  local: {
    label: "Local & Reputation",
    shape: "ring",
    gradient:
      "radial-gradient(circle at 15% 110%, rgba(242,98,34,0.4), transparent 55%), radial-gradient(circle at 95% -10%, rgba(255,176,32,0.3), transparent 55%)",
  },
  whatsapp: {
    label: "WhatsApp Marketing",
    shape: "bubble",
    gradient:
      "radial-gradient(circle at 90% 10%, rgba(255,176,32,0.4), transparent 55%), radial-gradient(circle at 10% 100%, rgba(242,98,34,0.3), transparent 55%)",
  },
  ads: {
    label: "Paid Advertising",
    shape: "triangle",
    gradient:
      "radial-gradient(circle at 0% 0%, rgba(242,98,34,0.45), transparent 55%), radial-gradient(circle at 100% 100%, rgba(255,176,32,0.28), transparent 55%)",
  },
  ai: {
    label: "AI & Analytics",
    shape: "diamond",
    gradient:
      "radial-gradient(circle at 100% 0%, rgba(242,98,34,0.35), transparent 55%), radial-gradient(circle at 0% 100%, rgba(255,176,32,0.35), transparent 55%)",
  },
  retention: {
    label: "Customer Retention",
    shape: "dot",
    gradient:
      "radial-gradient(circle at 20% 0%, rgba(255,176,32,0.4), transparent 55%), radial-gradient(circle at 80% 100%, rgba(242,98,34,0.3), transparent 55%)",
  },
};

function CoverGlyph({ shape }: { shape: CoverShape }) {
  const accent = "#ffb020";

  switch (shape) {
    case "circle":
      return (
        <div
          style={{
            display: "flex",
            width: 26,
            height: 26,
            borderRadius: 13,
            backgroundColor: accent,
          }}
        />
      );
    case "ring":
      return (
        <div
          style={{
            display: "flex",
            width: 26,
            height: 26,
            borderRadius: 13,
            border: `5px solid ${accent}`,
          }}
        />
      );
    case "dot":
      return (
        <div
          style={{
            display: "flex",
            width: 14,
            height: 14,
            borderRadius: 7,
            backgroundColor: accent,
          }}
        />
      );
    case "diamond":
      return (
        <div
          style={{
            display: "flex",
            width: 22,
            height: 22,
            backgroundColor: accent,
            transform: "rotate(45deg)",
          }}
        />
      );
    case "triangle":
      return (
        <div
          style={{
            display: "flex",
            width: 0,
            height: 0,
            borderLeft: "13px solid transparent",
            borderRight: "13px solid transparent",
            borderBottom: `24px solid ${accent}`,
          }}
        />
      );
    case "bubble":
      return (
        <div
          style={{
            display: "flex",
            width: 28,
            height: 22,
            borderRadius: 8,
            backgroundColor: accent,
          }}
        />
      );
    case "grid":
      return (
        <div style={{ display: "flex", flexWrap: "wrap", width: 26, height: 26, gap: 4 }}>
          {[0, 1, 2, 3].map((cell) => (
            <div
              key={cell}
              style={{
                display: "flex",
                width: 11,
                height: 11,
                borderRadius: 3,
                backgroundColor: accent,
              }}
            />
          ))}
        </div>
      );
  }
}

export function renderResourceCover({
  title,
  category,
  cluster,
}: {
  title: string;
  category: string;
  cluster: CoverCluster;
}) {
  const meta = clusterMeta[cluster];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#0a0f1f",
          backgroundImage: meta.gradient,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: "#f26222",
                marginRight: 14,
              }}
            />
            <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
              <span style={{ color: "#ffffff" }}>Auto</span>
              <span style={{ color: "#f26222" }}>Sutra</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 20,
              backgroundColor: "rgba(255,255,255,0.08)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CoverGlyph shape={meta.shape} />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 600,
              color: "#ffb020",
              textTransform: "uppercase",
              letterSpacing: 3,
              marginBottom: 18,
            }}
          >
            {`${category} · ${meta.label}`}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 52,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.18,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 20, color: "rgba(255,255,255,0.5)" }}>
          autosutra.in/resources
        </div>
      </div>
    ),
    { ...resourceCoverSize },
  );
}
