import { ImageResponse } from "next/og"

export const alt =
  "Rovee Finance — A contabilidade entrega números. A Rovee entrega economia."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * Imagem de compartilhamento (WhatsApp, LinkedIn, X). Gerada no build, sem
 * dependência de asset externo — a headline é a mesma da página.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0F172A",
          backgroundImage:
            "radial-gradient(circle at 78% 12%, #4F46E5 0%, rgba(79,70,229,0) 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundColor: "#4F46E5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            R
          </div>
          <div style={{ color: "#FFFFFF", fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
            Rovee
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              color: "#FFFFFF",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -1.5,
              maxWidth: 940,
            }}
          >
            A contabilidade entrega números. A Rovee entrega economia.
          </div>
          <div style={{ display: "flex", color: "#C7D2FE", fontSize: 28, maxWidth: 880, lineHeight: 1.4 }}>
            Pró-labore ótimo no Simples Nacional, separação PF × PJ e projeção de caixa
            sem surpresa no DAS.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, color: "#94A3B8", fontSize: 22 }}>
          <span>Fator R</span>
          <span>·</span>
          <span>Open Finance</span>
          <span>·</span>
          <span>Conformidade LGPD</span>
        </div>
      </div>
    ),
    size,
  )
}
