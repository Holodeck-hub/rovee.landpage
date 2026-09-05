"use client"

import { useState } from "react"
import {
  SlidersHorizontal,
  Building2,
  Landmark,
  ShieldCheck,
  FileSpreadsheet,
  Zap,
} from "lucide-react"

const MINUTOS_POR_CLIENTE = 20

export function AccountantsMetricsSection() {
  const [clientes, setClientes] = useState(40)
  const [conciliacaoAtiva, setConciliacaoAtiva] = useState(true)

  const horas = (clientes * MINUTOS_POR_CLIENTE) / 60

  return (
    <section aria-label="Métricas do Escritório" className="w-full band-tint border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-28">
        {/* Cabeçalho */}
        <div className="text-center max-w-[680px] mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8B8D9B]">
            Produtividade Contábil
          </span>
          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium h-section text-balance mt-2">
            O trabalho que sai da conta do escritório.
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed mt-3">
            Menos tempo cobrando extratos e recalculando pró-labore. Mais tempo para consultoria estratégica de alto valor.
          </p>
        </div>

        {/* Moldura Mestre Bento Grid (layout exemplo-2.jpg ampliado) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            {/* ── CARD ESQUERDO (COLUNA 1 - FULL HEIGHT) ── */}
            <div className="lg:col-span-4 rounded-2xl sm:rounded-3xl border border-[rgba(55,50,47,0.08)] bg-white p-7 sm:p-9 md:p-10 flex flex-col justify-between gap-8 relative overflow-hidden shadow-xs min-h-[440px] sm:min-h-[500px]">
              {/* Textura sutil de grade no fundo superior direito */}
              <div
                className="absolute -top-12 -right-12 w-56 h-56 opacity-25 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(55,50,47,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(55,50,47,0.15) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Ícone de destaque estilo App Icon ampliado */}
                <div className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-md mb-7">
                  <Zap className="w-7 h-7" />
                </div>

                <h3 className="text-2xl sm:text-[1.65rem] font-semibold text-secondary tracking-tight">
                  Fechamento sem Vai e Vém
                </h3>

                <p className="text-sm sm:text-base text-[#605A57] leading-relaxed mt-4">
                  Pedir extrato, cobrar comprovantes e separar despesas pessoais deixam de ser tarefas do escritório. O cliente chega ao fechamento com tudo categorizado e memória pronta.
                </p>
              </div>

              {/* Barra inferior: Botão Configurar + Switch Toggle ampliado */}
              <div className="pt-6 border-t border-[rgba(55,50,47,0.08)] flex items-center justify-between relative z-10">
                <button
                  type="button"
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-secondary bg-[#F5F6F8] hover:bg-[#ECEEF2] border border-[rgba(55,50,47,0.08)] transition-colors cursor-pointer"
                >
                  <SlidersHorizontal className="w-4 h-4 text-[#605A57]" />
                  <span>Automação Ativa</span>
                </button>

                {/* Toggle switch funcional e estilizado */}
                <button
                  type="button"
                  role="switch"
                  aria-checked={conciliacaoAtiva}
                  onClick={() => setConciliacaoAtiva((v) => !v)}
                  className={`w-12 h-7 rounded-full transition-colors relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    conciliacaoAtiva ? "bg-indigo-500" : "bg-[#D1D5DB]"
                  }`}
                >
                  <span
                    className={`block w-5 h-5 rounded-full bg-white shadow-sm transition-transform absolute top-1 left-1 ${
                      conciliacaoAtiva ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* ── COLUNA DIREITA (COLUNAS 2 E 3) ── */}
            <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-6">
              {/* Bloco Superior da Direita: Centro + Card de Métricas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 flex-1">
                {/* Coluna Central com 2 Cards verticais */}
                <div className="flex flex-col gap-4 sm:gap-6 justify-between">
                  {/* Card 1: Bancos e Integrações Conectadas */}
                  <div className="rounded-2xl sm:rounded-3xl border border-[rgba(55,50,47,0.08)] bg-white p-6 sm:p-7 flex items-center justify-between gap-4 shadow-xs">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-secondary">
                        Contas Conectadas
                      </h4>
                      <p className="text-xs sm:text-sm text-[#8B8D9B] font-mono mt-0.5">
                        Open Finance Oficial
                      </p>
                    </div>

                    {/* Avatares / Logos empilhados ampliados */}
                    <div className="flex items-center -space-x-3">
                      <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-purple-700 shadow-xs">
                        <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </span>
                      <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-indigo-600 shadow-xs">
                        <Landmark className="w-4 h-4 sm:w-5 sm:h-5" />
                      </span>
                      <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-emerald-700 shadow-xs">
                        <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                      </span>
                    </div>
                  </div>

                  {/* Card 2: Calculadora Dinâmica */}
                  <div className="rounded-2xl sm:rounded-3xl border border-[rgba(55,50,47,0.08)] bg-white p-6 sm:p-7 flex flex-col justify-between gap-5 shadow-xs flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-secondary">
                          Tempo Economizado
                        </h4>
                        <p className="text-xs sm:text-sm text-[#8B8D9B] font-mono mt-0.5">
                          Rotina do Fechamento
                        </p>
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#8B8D9B] bg-[#F5F6F8] px-2.5 py-1 rounded-md">
                        20 min/cliente
                      </span>
                    </div>

                    {/* Métrica Grande */}
                    <div className="py-1">
                      <p className="text-5xl sm:text-6xl font-bold tracking-tight text-secondary tabular-nums leading-none">
                        {horas.toLocaleString("pt-BR", {
                          minimumFractionDigits: 1,
                          maximumFractionDigits: 1,
                        })}
                        <span className="text-2xl sm:text-3xl font-medium text-[#8B8D9B] ml-2">
                          h/mês
                        </span>
                      </p>
                    </div>

                    {/* Rodapé com controle para o número de clientes */}
                    <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] flex items-center justify-between text-xs sm:text-sm text-[#605A57] font-mono">
                      <span>Simulação:</span>
                      <label
                        htmlFor="qtd-clientes-bento"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          id="qtd-clientes-bento"
                          type="number"
                          min={1}
                          max={999}
                          value={clientes}
                          onChange={(e) => {
                            const n = Number(e.target.value)
                            setClientes(Number.isFinite(n) ? Math.min(999, Math.max(1, n)) : 1)
                          }}
                          className="w-14 text-center font-bold text-secondary bg-[#F5F6F8] rounded-lg border border-[rgba(55,50,47,0.14)] py-1 px-1.5 focus:border-indigo-500 focus:outline-none"
                        />
                        <span className="font-sans font-medium text-secondary">clientes PJ</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Card 3: Big Number "Zero" ampliado */}
                <div className="rounded-2xl sm:rounded-3xl border border-[rgba(55,50,47,0.08)] bg-white p-7 sm:p-8 md:p-9 flex flex-col justify-between gap-6 relative overflow-hidden shadow-xs">
                  {/* Textura de pontinhos no canto superior direito */}
                  <div
                    className="absolute top-3 right-3 grid grid-cols-6 gap-2 opacity-20 pointer-events-none"
                    aria-hidden="true"
                  >
                    {Array.from({ length: 36 }).map((_, i) => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    ))}
                  </div>

                  {/* Número Gigante */}
                  <div className="relative z-10 pt-2">
                    <span className="text-6xl sm:text-7xl font-extrabold tracking-tight text-secondary leading-none">
                      Zero
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-lg sm:text-xl font-semibold text-secondary leading-snug">
                      Poder de Movimentação
                    </h4>
                    <p className="text-sm sm:text-base text-[#605A57] leading-relaxed mt-2.5">
                      Acesso 100% somente-leitura. Não transferimos, não pagamos boletos e não emitimos nada sem a aprovação do titular.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── CARD INFERIOR (ESTILO SHORTCUT KEYS AMPLIADO) ── */}
              <div className="rounded-2xl sm:rounded-3xl border border-[rgba(55,50,47,0.08)] bg-white p-5 sm:p-6 md:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-xs">
                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-xl bg-[#F5F6F8] border border-[rgba(55,50,47,0.08)] flex items-center justify-center text-indigo-500 shrink-0">
                    <FileSpreadsheet className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-secondary leading-snug">
                      Memória de Cálculo Pronta
                    </h4>
                    <p className="text-xs sm:text-sm text-[#8B8D9B] mt-0.5">
                      Exportação direta para Domínio, Omie, Alterdata e Fortes.
                    </p>
                  </div>
                </div>

                {/* Keycaps / Teclas estilizadas ampliadas */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <kbd className="min-w-10 px-3 py-1.5 rounded-lg bg-[#F5F6F8] border border-[rgba(55,50,47,0.14)] text-xs sm:text-sm font-mono font-semibold text-secondary shadow-xs text-center">
                    OFX
                  </kbd>
                  <span className="text-sm font-mono text-[#8B8D9B]">+</span>
                  <kbd className="min-w-10 px-3 py-1.5 rounded-lg bg-[#F5F6F8] border border-[rgba(55,50,47,0.14)] text-xs sm:text-sm font-mono font-semibold text-secondary shadow-xs text-center">
                    CSV
                  </kbd>
                  <span className="text-sm font-mono text-[#8B8D9B]">+</span>
                  <kbd className="min-w-10 px-3 py-1.5 rounded-lg bg-[#F5F6F8] border border-[rgba(55,50,47,0.14)] text-xs sm:text-sm font-mono font-semibold text-secondary shadow-xs text-center">
                    Fator R
                  </kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
export default AccountantsMetricsSection
