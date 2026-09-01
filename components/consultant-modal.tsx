"use client"

import { useState, useEffect } from "react"
import { X, Send, User, Mail, Phone, Building2, HelpCircle, CheckCircle2 } from "lucide-react"

interface ConsultantModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ConsultantModal({ isOpen, onClose }: ConsultantModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [profile, setProfile] = useState<"pj" | "contabilidade">("pj")
  const [interest, setInterest] = useState("Otimização de Fator R e Simples Nacional")

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const targetNumber = "5592993401874"
    const profileLabel = profile === "pj" ? "Prestador de Serviços / Empresa PJ" : "Escritório de Contabilidade / Contador"

    const message = `👋 *Olá! Gostaria de falar com um consultor da Rovee.*

📌 *Dados do Contato:*
• *Nome:* ${name.trim()}
• *E-mail:* ${email.trim()}
• *WhatsApp:* ${phone.trim()}
• *Perfil:* ${profileLabel}
• *Interesse Principal:* ${interest}

_Enviado através da landing page oficial da Rovee._`

    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0F172A]/50 backdrop-blur-xs transition-opacity cursor-pointer"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-[520px] bg-white rounded-2xl border border-[rgba(55,50,47,0.12)] shadow-[0px_16px_48px_rgba(15,23,42,0.18)] p-6 sm:p-8 z-10 overflow-hidden text-left font-sans animate-scaleUp">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[rgba(55,50,47,0.08)]">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Atendimento Exclusivo
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-secondary mt-1.5 font-sans">
              Fale com um Consultor Rovee
            </h3>
            <p className="text-xs text-[#605A57] mt-0.5">
              Preencha os dados abaixo para ser direcionado ao WhatsApp do nosso especialista.
            </p>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 text-[#82807C] hover:text-secondary hover:bg-[#F1F5F9] rounded-lg transition-colors cursor-pointer shrink-0 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          {/* Nome */}
          <div>
            <label className="block text-xs font-semibold text-secondary mb-1">
              Nome Completo *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#82807C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Carlos Eduardo"
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[rgba(55,50,47,0.15)] rounded-lg text-secondary placeholder-[#82807C] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Grid E-mail + WhatsApp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* E-mail */}
            <div>
              <label className="block text-xs font-semibold text-secondary mb-1">
                E-mail Corporativo *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#82807C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="carlos@empresa.com.br"
                  className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[rgba(55,50,47,0.15)] rounded-lg text-secondary placeholder-[#82807C] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Telefone / WhatsApp */}
            <div>
              <label className="block text-xs font-semibold text-secondary mb-1">
                WhatsApp com DDD *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#82807C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(92) 99999-9999"
                  className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[rgba(55,50,47,0.15)] rounded-lg text-secondary placeholder-[#82807C] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Perfil (PJ x Contabilidade) */}
          <div>
            <label className="block text-xs font-semibold text-secondary mb-1.5">
              Qual é o seu perfil? *
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setProfile("pj")}
                className={`p-2.5 rounded-lg border text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  profile === "pj"
                    ? "border-primary bg-primary/5 text-primary font-semibold shadow-xs"
                    : "border-[rgba(55,50,47,0.12)] bg-[#F8FAFC] text-[#605A57] hover:bg-gray-100"
                }`}
              >
                <Building2 className="w-4 h-4 shrink-0" />
                <span>Prestador PJ / Empresa</span>
              </button>

              <button
                type="button"
                onClick={() => setProfile("contabilidade")}
                className={`p-2.5 rounded-lg border text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  profile === "contabilidade"
                    ? "border-primary bg-primary/5 text-primary font-semibold shadow-xs"
                    : "border-[rgba(55,50,47,0.12)] bg-[#F8FAFC] text-[#605A57] hover:bg-gray-100"
                }`}
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Escritório Contábil</span>
              </button>
            </div>
          </div>

          {/* Interesse */}
          <div>
            <label className="block text-xs font-semibold text-secondary mb-1">
              Principal interesse ou dúvida *
            </label>
            <div className="relative">
              <HelpCircle className="w-4 h-4 text-[#82807C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[rgba(55,50,47,0.15)] rounded-lg text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
              >
                <option value="Otimização de Fator R e Simples Nacional">Otimização de Fator R (Redução de Imposto)</option>
                <option value="Clareza de Caixa e Cheque do Mês">Clareza de Caixa & Cheque do Mês (Pró-labore vs Lucro)</option>
                <option value="Sentinela PF x PJ (Blindagem Patrimonial)">Sentinela PF × PJ (Blindagem Patrimonial)</option>
                <option value="Parceria Contábil e Multi-CNPJs">Parceria Contábil & Gestão de Múltiplos CNPJs</option>
                <option value="Demonstração Personalizada e Preços">Demonstração Personalizada dos Planos</option>
                <option value="Outro assunto">Outro assunto</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Enviar e Abrir Conversa no WhatsApp</span>
            </button>
            <p className="text-[10px] text-center text-[#82807C] mt-2">
              Você será redirecionado para o WhatsApp: (92) 99340-1874
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
