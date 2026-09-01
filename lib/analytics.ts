/**
 * Camada única de instrumentação da landing page.
 *
 * Nada aqui depende de um provedor específico: o mesmo evento é enviado para
 * o dataLayer (GTM), para o gtag (GA4 direto) e para o Meta Pixel, se e
 * somente se o respectivo ID estiver configurado via variável de ambiente.
 * Sem ID configurado, nenhum script é carregado e as chamadas viram no-op.
 */

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? ""
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ""
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ""

export const hasGTM = GTM_ID.length > 0
export const hasGA = GA_ID.length > 0
export const hasMetaPixel = META_PIXEL_ID.length > 0
export const hasAnalytics = hasGTM || hasGA || hasMetaPixel

/** Eventos do funil. Nomes fixos para não divergirem entre componentes. */
export type AnalyticsEvent =
  | "abriu_modal"
  | "enviou_lead"
  | "clicou_plano"
  | "scroll_planos"

type EventParams = Record<string, string | number | boolean | undefined>

/** Evento do Meta Pixel equivalente, quando existe um padrão do catálogo. */
const META_EVENT_MAP: Partial<Record<AnalyticsEvent, string>> = {
  abriu_modal: "InitiateCheckout",
  enviou_lead: "Lead",
  clicou_plano: "ViewContent",
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

export function trackEvent(event: AnalyticsEvent, params: EventParams = {}) {
  if (typeof window === "undefined") return

  const payload = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  )

  try {
    // GTM — sempre empurra, mesmo que o container ainda esteja carregando.
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event, ...payload })

    // GA4 direto (quando não há GTM no meio do caminho).
    if (hasGA && typeof window.gtag === "function") {
      window.gtag("event", event, payload)
    }

    // Meta Pixel — evento padrão quando há equivalente, custom caso contrário.
    if (hasMetaPixel && typeof window.fbq === "function") {
      const standard = META_EVENT_MAP[event]
      if (standard) {
        window.fbq("track", standard, payload)
      } else {
        window.fbq("trackCustom", event, payload)
      }
    }
  } catch {
    // Instrumentação nunca pode derrubar a página.
  }
}
