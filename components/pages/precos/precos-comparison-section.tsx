"use client"

import { Check } from "lucide-react"

const COMPARISON_FEATURES = [
  { name: "Importação manual de OFX / PDF", starter: true, pro: true, escritorio: true },
  { name: "Gestão multi-contas bancárias", starter: true, pro: true, escritorio: true },
  { name: "Diagnóstico inicial de Fator R", starter: true, pro: true, escritorio: true },
  { name: "Cheque do Mês básico", starter: true, pro: true, escritorio: true },
  { name: "Conexão Open Finance automática", starter: false, pro: true, escritorio: true },
  { name: "Otimizador contínuo do Fator R (Anexo III)", starter: false, pro: true, escritorio: true },
  { name: "Sentinela Anti-Mistura PF × PJ", starter: false, pro: true, escritorio: true },
  { name: "Provisão de DAS em tempo real", starter: false, pro: true, escritorio: true },
  { name: "Inteligência Preditiva (runway de 6 meses)", starter: false, pro: true, escritorio: true },
  { name: "4 Agentes Fiscais Proativos", starter: false, pro: true, escritorio: true },
  { name: "Multi-tenancy (até 5 CNPJs)", starter: false, pro: false, escritorio: true },
  { name: "Controle de acessos com RBAC", starter: false, pro: false, escritorio: true },
  { name: "Exportação de relatórios executivos em PDF", starter: false, pro: false, escritorio: true },
]

export function PrecosComparisonSection() {
  return (
    <section aria-label="Comparativo de Planos" className="w-full py-20 px-5 border-b border-[rgba(55,50,47,0.12)] bg-white">
      <div className="w-full max-w-[1000px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Comparativo Detalhado
          </span>
          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance mt-2">
            Compare cada funcionalidade lado a lado
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b-2 border-[rgba(55,50,47,0.12)]">
                <th className="py-4 px-4 font-semibold text-secondary">Recurso</th>
                <th className="py-4 px-4 font-semibold text-secondary text-center">Starter PJ</th>
                <th className="py-4 px-4 font-semibold text-primary text-center">Rovee Pro</th>
                <th className="py-4 px-4 font-semibold text-secondary text-center">Escritório & Sócios</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(55,50,47,0.08)]">
              {COMPARISON_FEATURES.map((feat, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3.5 px-4 text-[#49423D] font-medium">{feat.name}</td>
                  <td className="py-3.5 px-4 text-center">
                    {feat.starter ? (
                      <Check className="w-4 h-4 text-emerald-700 mx-auto" />
                    ) : (
                      <span className="inline-block w-2.5 h-0.5 bg-zinc-200" aria-label="Não incluso" />
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center bg-indigo-50/30">
                    {feat.pro ? (
                      <Check className="w-4 h-4 text-emerald-700 mx-auto" />
                    ) : (
                      <span className="inline-block w-2.5 h-0.5 bg-zinc-200" aria-label="Não incluso" />
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {feat.escritorio ? (
                      <Check className="w-4 h-4 text-emerald-700 mx-auto" />
                    ) : (
                      <span className="inline-block w-2.5 h-0.5 bg-zinc-200" aria-label="Não incluso" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
