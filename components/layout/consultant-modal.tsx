"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import { Send, User, Mail, Phone, Building2, HelpCircle, CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { trackEvent } from "../../lib/analytics"
import { SITE } from "../../lib/site-config"

export interface ConsultantModalProps {
  isOpen: boolean
  onClose: () => void
  /** E-mail já digitado no hero, para não pedir a mesma coisa duas vezes. */
  emailInicial?: string
}

const INTERESTS = [
  { value: "Otimização de Fator R e Simples Nacional", label: "Otimização de Fator R (redução de imposto)" },
  { value: "Clareza de Caixa e Cheque do Mês", label: "Clareza de caixa & Cheque do Mês (pró-labore × lucro)" },
  { value: "Sentinela PF x PJ (Blindagem Patrimonial)", label: "Sentinela PF × PJ (blindagem patrimonial)" },
  { value: "Parceria Contábil e Multi-CNPJs", label: "Parceria contábil & gestão de múltiplos CNPJs" },
  { value: "Demonstração Personalizada e Preços", label: "Demonstração personalizada dos planos" },
  { value: "Outro assunto", label: "Outro assunto" },
]

/** Formata o telefone no padrão (99) 99999-9999 conforme o usuário digita. */
function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

const leadSchema = z.object({
  nome: z.string().trim().min(1, "Informe seu nome completo"),
  email: z.string().trim().min(1, "Informe seu e-mail").email("E-mail inválido"),
  telefone: z.string().trim().min(14, "Informe um WhatsApp válido com DDD"),
  perfil: z.enum(["pj", "contabilidade"]),
  interesse: z.string().min(1, "Selecione um assunto"),
})
type LeadFormValues = z.infer<typeof leadSchema>

const inputWrapClass = "relative"
const inputClass = "pl-9"
const iconClass = "w-4 h-4 text-ink-faint absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"

export function ConsultantModal({ isOpen, onClose, emailInicial }: ConsultantModalProps) {
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { nome: "", email: "", telefone: "", perfil: "pj", interesse: "" },
  })

  // Reabrir com o modal limpo, mas com o e-mail já digitado no hero (se houver).
  useEffect(() => {
    if (isOpen) {
      form.reset({ nome: "", email: emailInicial ?? "", telefone: "", perfil: "pj", interesse: "" })
    }
  }, [isOpen, emailInicial, form])

  const profileLabel = (perfil: LeadFormValues["perfil"]) =>
    perfil === "pj" ? "Prestador de Serviços / Empresa PJ" : "Escritório de Contabilidade / Contador"

  /**
   * Registra o lead antes do redirect. Sem await: `keepalive` garante o envio
   * mesmo com a aba trocando, e o window.open precisa continuar síncrono para
   * não ser bloqueado como popup.
   */
  const captureLead = (values: LeadFormValues) => {
    const webhook = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL
    if (!webhook) return

    try {
      void fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          nome: values.nome,
          email: values.email,
          whatsapp: values.telefone,
          perfil: profileLabel(values.perfil),
          interesse: values.interesse,
          origem: "landing-page",
          url: window.location.href,
          enviado_em: new Date().toISOString(),
        }),
      }).catch(() => {})
    } catch {
      // Falha na captura nunca pode impedir o atendimento.
    }
  }

  const onSubmit = (values: LeadFormValues) => {
    trackEvent("enviou_lead", { perfil: values.perfil, interesse: values.interesse })
    captureLead(values)

    const message = `👋 *Olá! Gostaria de falar com um consultor da Rovee.*

📌 *Dados do Contato:*
• *Nome:* ${values.nome}
• *E-mail:* ${values.email}
• *WhatsApp:* ${values.telefone}
• *Perfil:* ${profileLabel(values.perfil)}
• *Interesse Principal:* ${values.interesse}

_Enviado através da landing page oficial da Rovee._`

    const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-w-[520px] max-h-[90vh] overflow-y-auto rounded-2xl border-[rgba(55,50,47,0.12)] shadow-[0px_16px_48px_rgba(15,23,42,0.18)] p-6 sm:p-8 text-left font-sans gap-0"
        showCloseButton
      >
        <DialogHeader className="pb-4 border-b border-[rgba(55,50,47,0.08)] gap-0">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 w-fit">
            Atendimento Exclusivo
          </span>
          <DialogTitle className="text-xl sm:text-2xl font-medium text-secondary mt-1.5 font-sans">
            Fale com um Consultor Rovee
          </DialogTitle>
          <DialogDescription className="text-xs text-ink-muted mt-0.5">
            Preencha os dados abaixo para ser direcionado ao WhatsApp do nosso especialista.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            {/* Nome */}
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem className="gap-1">
                  <FormLabel className="text-xs font-semibold text-secondary">Nome completo *</FormLabel>
                  <div className={inputWrapClass}>
                    <User className={iconClass} aria-hidden="true" />
                    <FormControl>
                      <Input
                        {...field}
                        autoComplete="name"
                        placeholder="Ex.: Carlos Eduardo"
                        className={inputClass}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Grid E-mail + WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="gap-1">
                    <FormLabel className="text-xs font-semibold text-secondary">E-mail corporativo *</FormLabel>
                    <div className={inputWrapClass}>
                      <Mail className={iconClass} aria-hidden="true" />
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          autoComplete="email"
                          inputMode="email"
                          placeholder="carlos@empresa.com.br"
                          className={inputClass}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem className="gap-1">
                    <FormLabel className="text-xs font-semibold text-secondary">WhatsApp com DDD *</FormLabel>
                    <div className={inputWrapClass}>
                      <Phone className={iconClass} aria-hidden="true" />
                      <FormControl>
                        <Input
                          {...field}
                          onChange={(e) => field.onChange(formatPhone(e.target.value))}
                          type="tel"
                          autoComplete="tel"
                          inputMode="tel"
                          placeholder="(92) 99999-9999"
                          className={inputClass}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Perfil (PJ x Contabilidade) */}
            <FormField
              control={form.control}
              name="perfil"
              render={({ field }) => (
                <FormItem className="gap-1.5">
                  <FormLabel className="text-xs font-semibold text-secondary">Qual é o seu perfil? *</FormLabel>
                  <FormControl>
                    <ToggleGroup
                      type="single"
                      value={field.value}
                      onValueChange={(value) => value && field.onChange(value)}
                      className="grid grid-cols-2 gap-2 w-full"
                    >
                      <ToggleGroupItem
                        value="pj"
                        className="p-3 min-h-[44px] rounded-lg border text-xs font-medium flex items-center justify-center gap-2 border-[rgba(55,50,47,0.18)] bg-ground-alt text-ink-muted hover:bg-gray-100 data-[state=on]:border-primary data-[state=on]:bg-primary/5 data-[state=on]:text-primary data-[state=on]:font-semibold data-[state=on]:shadow-xs"
                      >
                        <Building2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>Prestador PJ / Empresa</span>
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="contabilidade"
                        className="p-3 min-h-[44px] rounded-lg border text-xs font-medium flex items-center justify-center gap-2 border-[rgba(55,50,47,0.18)] bg-ground-alt text-ink-muted hover:bg-gray-100 data-[state=on]:border-primary data-[state=on]:bg-primary/5 data-[state=on]:text-primary data-[state=on]:font-semibold data-[state=on]:shadow-xs"
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>Escritório Contábil</span>
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Interesse */}
            <FormField
              control={form.control}
              name="interesse"
              render={({ field }) => (
                <FormItem className="gap-1">
                  <FormLabel className="text-xs font-semibold text-secondary">Principal interesse ou dúvida *</FormLabel>
                  <div className={inputWrapClass}>
                    <HelpCircle className={`${iconClass} left-3`} aria-hidden="true" />
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="w-full pl-9 text-xs">
                          <SelectValue placeholder="Selecione o assunto" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {INTERESTS.map((option) => (
                          <SelectItem key={option.value} value={option.value} className="text-xs">
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 min-h-[44px] bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Enviar e abrir conversa no WhatsApp</span>
              </button>

              <p className="text-[11px] leading-relaxed text-center text-ink-faint mt-3">
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
        </Form>
      </DialogContent>
    </Dialog>
  )
}
