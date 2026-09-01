"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { X, Send, User, Mail, Phone, Building2, HelpCircle, CheckCircle2 } from "lucide-react"
import { trackEvent } from "../../lib/analytics"
import { SITE } from "../../lib/site-config"

interface ConsultantModalProps {
  isOpen: boolean
  onClose: () => void
}

const INTERESTS = [
  { value: "Otimização de Fator R e Simples Nacional", label: "Otimização de Fator R (redução de imposto)" },
  { value: "Clareza de Caixa e Cheque do Mês", label: "Clareza de caixa & Cheque do Mês (pró-labore × lucro)" },
  { value: "Sentinela PF x PJ (Blindagem Patrimonial)", label: "Sentinela PF × PJ (blindagem patrimonial)" },
  { value: "Parceria Contábil e Multi-CNPJs", label: "Parceria contábil & gestão de múltiplos CNPJs" },
  { value: "Demonstração Personalizada e Preços", label: "Demonstração personalizada dos planos" },
  { value: "Outro assunto", label: "Outro assunto" },
]

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

/** Formata o telefone no padrão (99) 99999-9999 conforme o usuário digita. */
function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function ConsultantModal({ isOpen, onClose }: ConsultantModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [profile, setProfile] = useState<"pj" | "contabilidade">("pj")
  const [interest, setInterest] = useState("")

  const dialogRef = useRef<HTMLDivElement>(null)
  const firstFieldRef = useRef<HTMLInputElement>(null)
  /** Elemento que abriu o modal, para devolver o foco ao fechar. */
  const openerRef = useRef<HTMLElement | null>(null)

  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  // Esc, trava de scroll, foco inicial e trap de foco.
  useEffect(() => {
    if (!isOpen) return

    openerRef.current = document.activeElement as HTMLElement | null
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        handleClose()
        return
      }

      if (event.key !== "Tab") return

      const dialog = dialogRef.current
      if (!dialog) return

      const focusables = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null,
      )
      if (focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement

      if (event.shiftKey && (active === first || !dialog.contains(active))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    // Foca o primeiro campo depois da pintura, para não brigar com a animação.
    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 40)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.clearTimeout(focusTimer)
      document.body.style.overflow = ""
    }
  }, [isOpen, handleClose])

  // Devolve o foco ao botão de origem quando o modal fecha.
  useEffect(() => {
    if (isOpen) return
    const opener = openerRef.current
    if (opener && document.contains(opener)) {
      opener.focus()
      openerRef.current = null
    }
  }, [isOpen])

  if (!isOpen) return null

  const profileLabel =
    profile === "pj" ? "Prestador de Serviços / Empresa PJ" : "Escritório de Contabilidade / Contador"

  /**
   * Registra o lead antes do redirect. Sem await: `keepalive` garante o envio
   * mesmo com a aba trocando, e o window.open precisa continuar síncrono para
   * não ser bloqueado como popup.
   */
  const captureLead = () => {
    const webhook = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL
    if (!webhook) return

    try {
      void fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          nome: name.trim(),
          email: email.trim(),
          whatsapp: phone.trim(),
          perfil: profileLabel,
          interesse: interest,
          origem: "landing-page",
          url: window.location.href,
          enviado_em: new Date().toISOString(),
        }),
      }).catch(() => {})
    } catch {
      // Falha na captura nunca pode impedir o atendimento.
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    trackEvent("enviou_lead", { perfil: profile, interesse: interest })
    captureLead()

    const message = `👋 *Olá! Gostaria de falar com um consultor da Rovee.*

📌 *Dados do Contato:*
• *Nome:* ${name.trim()}
• *E-mail:* ${email.trim()}
• *WhatsApp:* ${phone.trim()}
• *Perfil:* ${profileLabel}
• *Interesse Principal:* ${interest}

_Enviado através da landing page oficial da Rovee._`

    const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    handleClose()
  }

  const inputClass =
    "w-full pl-9 pr-3 py-2.5 text-xs bg-white border border-[rgba(55,50,47,0.25)] rounded-lg text-secondary placeholder-[#6B6560] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        aria-hidden="true"
        className="fixed inset-0 bg-[#0F172A]/50 backdrop-blur-xs transition-opacity cursor-pointer"
      />

      {/* Modal Card */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultor-titulo"
        aria-describedby="consultor-descricao"
        className="relative w-full max-w-[520px] max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-[rgba(55,50,47,0.12)] shadow-[0px_16px_48px_rgba(15,23,42,0.18)] p-6 sm:p-8 z-10 text-left font-sans animate-scaleUp"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[rgba(55,50,47,0.08)]">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Atendimento Exclusivo
            </span>
            <h2
              id="consultor-titulo"
              className="text-xl sm:text-2xl font-semibold text-secondary mt-1.5 font-sans"
            >
              Fale com um Consultor Rovee
            </h2>
            <p id="consultor-descricao" className="text-xs text-[#605A57] mt-0.5">
              Preencha os dados abaixo para ser direcionado ao WhatsApp do nosso especialista.
            </p>
          </div>
          <button
            onClick={handleClose}
            type="button"
            aria-label="Fechar"
            className="w-11 h-11 -mt-2 -mr-2 flex items-center justify-center text-[#6B6560] hover:text-secondary hover:bg-[#F1F5F9] rounded-lg transition-colors cursor-pointer shrink-0 ml-2"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          {/* Nome */}
          <div>
            <label htmlFor="lead-nome" className="block text-xs font-semibold text-secondary mb-1">
              Nome completo *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#6B6560] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
              <input
                ref={firstFieldRef}
                id="lead-nome"
                name="nome"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex.: Carlos Eduardo"
                className={inputClass}
              />
            </div>
          </div>

          {/* Grid E-mail + WhatsApp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="lead-email" className="block text-xs font-semibold text-secondary mb-1">
                E-mail corporativo *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#6B6560] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                <input
                  id="lead-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="carlos@empresa.com.br"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="lead-telefone" className="block text-xs font-semibold text-secondary mb-1">
                WhatsApp com DDD *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#6B6560] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                <input
                  id="lead-telefone"
                  name="telefone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  placeholder="(92) 99999-9999"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Perfil (PJ x Contabilidade) */}
          <fieldset>
            <legend className="block text-xs font-semibold text-secondary mb-1.5">
              Qual é o seu perfil? *
            </legend>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setProfile("pj")}
                aria-pressed={profile === "pj"}
                className={`p-3 min-h-[44px] rounded-lg border text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  profile === "pj"
                    ? "border-primary bg-primary/5 text-primary font-semibold shadow-xs"
                    : "border-[rgba(55,50,47,0.18)] bg-[#F8FAFC] text-[#605A57] hover:bg-gray-100"
                }`}
              >
                <Building2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Prestador PJ / Empresa</span>
              </button>

              <button
                type="button"
                onClick={() => setProfile("contabilidade")}
                aria-pressed={profile === "contabilidade"}
                className={`p-3 min-h-[44px] rounded-lg border text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  profile === "contabilidade"
                    ? "border-primary bg-primary/5 text-primary font-semibold shadow-xs"
                    : "border-[rgba(55,50,47,0.18)] bg-[#F8FAFC] text-[#605A57] hover:bg-gray-100"
                }`}
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Escritório Contábil</span>
              </button>
            </div>
          </fieldset>

          {/* Interesse */}
          <div>
            <label htmlFor="lead-interesse" className="block text-xs font-semibold text-secondary mb-1">
              Principal interesse ou dúvida *
            </label>
            <div className="relative">
              <HelpCircle className="w-4 h-4 text-[#6B6560] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
              <select
                id="lead-interesse"
                name="interesse"
                required
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" disabled>
                  Selecione o assunto
                </option>
                {INTERESTS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 min-h-[44px] bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>Enviar e abrir conversa no WhatsApp</span>
            </button>

            <p className="text-[11px] leading-relaxed text-center text-[#6B6560] mt-3">
              Usamos seus dados apenas para retornar este contato comercial. Você será
              redirecionado para o WhatsApp {SITE.whatsappDisplay}. Detalhes na{" "}
              <Link
                href="/privacidade"
                target="_blank"
                className="text-primary hover:underline font-medium"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
