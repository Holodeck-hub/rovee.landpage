"use client"

import { Check } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
            Comparativo Detalhado
          </span>
          <h3 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance mt-2">
            Compare cada funcionalidade lado a lado
          </h3>
        </div>

        <Table className="text-xs sm:text-sm">
          <TableHeader>
            <TableRow className="border-b-2 border-[rgba(55,50,47,0.12)] hover:bg-transparent">
              <TableHead className="sticky left-0 z-10 bg-white py-4 px-4 font-semibold text-secondary">
                Recurso
              </TableHead>
              <TableHead className="py-4 px-4 text-center font-semibold text-secondary">Starter PJ</TableHead>
              <TableHead className="py-4 px-4 text-center font-semibold text-primary">Rovee Pro</TableHead>
              <TableHead className="py-4 px-4 text-center font-semibold text-secondary">
                Escritório & Sócios
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {COMPARISON_FEATURES.map((feat, idx) => (
              <TableRow key={idx} className="border-[rgba(55,50,47,0.08)] hover:bg-slate-50/50">
                <TableCell className="sticky left-0 z-10 whitespace-normal bg-white py-3.5 px-4 font-medium text-secondary">
                  {feat.name}
                </TableCell>
                <TableCell className="py-3.5 px-4 text-center">
                  {feat.starter ? (
                    <Check className="w-4 h-4 text-emerald-700 mx-auto" />
                  ) : (
                    <span className="inline-block w-2.5 h-0.5 bg-zinc-200" aria-label="Não incluso" />
                  )}
                </TableCell>
                <TableCell className="py-3.5 px-4 text-center bg-indigo-50/30">
                  {feat.pro ? (
                    <Check className="w-4 h-4 text-emerald-700 mx-auto" />
                  ) : (
                    <span className="inline-block w-2.5 h-0.5 bg-zinc-200" aria-label="Não incluso" />
                  )}
                </TableCell>
                <TableCell className="py-3.5 px-4 text-center">
                  {feat.escritorio ? (
                    <Check className="w-4 h-4 text-emerald-700 mx-auto" />
                  ) : (
                    <span className="inline-block w-2.5 h-0.5 bg-zinc-200" aria-label="Não incluso" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
