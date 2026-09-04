"use client"

import { Key, Server } from "lucide-react"

export function SegurancaPrivacySection() {
  return (
    <section aria-label="Privacidade e Dados" className="w-full band-tint py-20 px-5 border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1000px] mx-auto">
        <div className="max-w-[40rem] mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Compromisso de Privacidade
          </span>
          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance mt-2">
            Como tratamos cada byte da sua empresa
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-xl border border-[rgba(55,50,47,0.12)] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-primary flex items-center justify-center mb-4">
              <Key className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-secondary mb-2">Zero Acesso a Credenciais</h3>
            <p className="text-ink-muted text-sm leading-relaxed">
              A conexão via Open Finance utiliza tokens temporários e consentimento revogável do Banco Central. A Rovee jamais armazena suas senhas de banco.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[rgba(55,50,47,0.12)] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-primary flex items-center justify-center mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-secondary mb-2">Isolamento Multi-Tenant (RBAC)</h3>
            <p className="text-ink-muted text-sm leading-relaxed">
              Seus dados contábeis residem em ambientes isolados logicamente com controle de acesso baseado em funções (Owner, Admin, Viewer para o contador).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
