import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const alt =
  "Rovee Finance: Diagnóstico Fiscal e Financeiro. Mais economia, menos impostos."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * Imagem de compartilhamento (WhatsApp, LinkedIn, X). Gerada no build, sem
 * dependência de asset externo: a headline é a mesma da página.
 */
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo/rovee-mark.png"))
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={56} height={56} alt="" style={{ borderRadius: 14 }} />
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
            Diagnóstico Fiscal e Financeiro. Mais economia, menos impostos.
          </div>
          <div style={{ display: "flex", color: "#C7D2FE", fontSize: 28, maxWidth: 880, lineHeight: 1.4 }}>
            Inteligência fiscal para o empreendedor PJ: transformamos dado financeiro real
            em decisões tributárias corretas, antecipadas e acionáveis.
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
