"use client"

import { useState } from "react"
import { TrendingUp, AlertTriangle, ShieldCheck, Sparkles, Activity, Clock } from "lucide-react"

export function PredictiveIntelligenceSection() {
  const [activeTab, setActiveTab] = useState<"trend" | "anomalies" | "runway">("trend")

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Section Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-12 sm:py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center">
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Inteligência Preditiva em 3 Camadas
          </span>

          <h2 className="text--indigo-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight font-sans tracking-tight">
            Preveja o futuro do seu caixa antes que o mês feche
          </h2>

          <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
            Modelos inteligentes compilados nativamente que antecipam suas receitas futuras, identificam despesas fora do padrão e calculam seu fôlego financeiro real, sem alucinações.
          </p>
        </div>
      </div>

      {/* Interactive 3-Layer Visualizer */}
      <div className="self-stretch flex justify-center items-start">
        {/* Left vertical pattern */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 150 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        <div className="flex-1 max-w-[1060px] border-l border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Layer Selector Tabs (Non-technical ICP language) */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8">
            <button
              onClick={() => setActiveTab("trend")}
              className={`px-4 py-2.5 rounded text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${activeTab === "trend"
                ? "bg-indigo-500 text-white shadow-md"
                : "bg-white text-[#49423D] border border-[rgba(55,50,47,0.12)] hover:bg-[#F1F5F9]"
                }`}
            >
              <TrendingUp className="w-4 h-4" />
              1. Projeção de Faturamento & Sazonalidade
            </button>

            <button
              onClick={() => setActiveTab("anomalies")}
              className={`px-4 py-2.5 rounded text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${activeTab === "anomalies"
                ? "bg-indigo-500 text-white shadow-md"
                : "bg-white text-[#49423D] border border-[rgba(55,50,47,0.12)] hover:bg-[#F1F5F9]"
                }`}
            >
              <AlertTriangle className="w-4 h-4" />
              2. Sentinela de Gastos & Anomalias
            </button>

            <button
              onClick={() => setActiveTab("runway")}
              className={`px-4 py-2.5 rounded text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${activeTab === "runway"
                ? "bg-indigo-500 text-white shadow-md"
                : "bg-white text-[#49423D] border border-[rgba(55,50,47,0.12)] hover:bg-[#F1F5F9]"
                }`}
            >
              <Activity className="w-4 h-4" />
              3. Fôlego Financeiro (Meses de Caixa)
            </button>
          </div>

          {/* Layer Display Card */}
          <div className="bg-white rounded-2xl border border-[rgba(55,50,47,0.12)] shadow-[0px_4px_16px_rgba(55,50,47,0.06)] overflow-hidden">
            {activeTab === "trend" && (
              <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono font-semibold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    ANÁLISE DE TENDÊNCIA & SAZONALIDADE
                  </div>
                  <h3 className="text--indigo-500 text-xl sm:text-2xl font-semibold leading-tight font-sans">
                    Projeção de Faturamento dos Próximos Meses
                  </h3>
                  <p className="text-[#605A57] text-sm leading-relaxed">
                    O sistema analisa o padrão histórico dos seus recebimentos e identifica a <strong>Tendência de Crescimento + Picos de Entrada no Mês</strong>. Você descobre com antecedência quando o caixa vai oscilar e ajusta seu pró-labore sem apertos.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[rgba(55,50,47,0.08)]">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#605A57]">Tendência Projetada:</span>
                      <span className="font-semibold text-emerald-700">+18,4% no próximo trimestre</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#605A57]">Padrão de Recebimento:</span>
                      <span className="font-medium text--indigo-500">Picos concentrados nos dias 05 e 20</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Chart Container */}
                <div className="lg:col-span-6 bg-[#F1F5F9] p-5 rounded-xl border border-[rgba(55,50,47,0.08)] flex flex-col gap-3">
                  <div className="flex justify-between items-center text-xs text-[#605A57]">
                    <span className="font-mono">PROJEÇÃO DE FATURAMENTO (R$)</span>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono text-[10px]">CONFIANÇA 94%</span>
                  </div>

                  {/* Visual Chart Wave */}
                  <div className="h-44 w-full flex items-end justify-between gap-1.5 pt-6 pb-2 px-2 relative">
                    {[
                      { m: "Jan", val: 32, proj: false },
                      { m: "Fev", val: 38, proj: false },
                      { m: "Mar", val: 41, proj: false },
                      { m: "Abr", val: 49, proj: false },
                      { m: "Mai", val: 56, proj: true },
                      { m: "Jun", val: 64, proj: true },
                      { m: "Jul", val: 72, proj: true },
                    ].map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <div
                          className={`w-full rounded-t-md transition-all duration-500 ${item.proj
                            ? "bg-emerald-500/80 border-t-2 border-emerald-400 border-dashed"
                            : "bg-indigo-500"
                            }`}
                          style={{ height: `${item.val * 1.8}px` }}
                        />
                        <span className={`text-[10px] font-mono ${item.proj ? "text-emerald-700 font-bold" : "text-[#605A57]"}`}>
                          {item.m}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-[rgba(55,50,47,0.06)] flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-[#49423D] leading-snug">
                      <strong>Orientação de Caixa:</strong> Seu faturamento deve atingir R$ 64k em junho. Mantenha seu pró-labore em R$ 8.500 para continuar pagando a menor alíquota no Simples Nacional.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "anomalies" && (
              <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-amber-700 text-xs font-mono font-semibold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    MONITORAMENTO DE GASTOS FORA DO PADRÃO
                  </div>
                  <h3 className="text--indigo-500 text-xl sm:text-2xl font-semibold leading-tight font-sans">
                    Detecção Instantânea de Despesas Incomuns
                  </h3>
                  <p className="text-[#605A57] text-sm leading-relaxed">
                    Escaneia cada saída do extrato bancário considerando o valor médio, categoria, dia e histórico. Qualquer cobrança duplicada, aumento inesperado em assinatura ou gasto fora do comum é identificado imediatamente.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[rgba(55,50,47,0.08)]">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#605A57]">Alerta de Inconsistência:</span>
                      <span className="font-semibold text-amber-700">1 cobrança incomum detectada</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#605A57]">Proteção de Extrato:</span>
                      <span className="font-medium text--indigo-500">100% dos lançamentos monitorados</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-[#F1F5F9] p-5 rounded-xl border border-[rgba(55,50,47,0.08)] flex flex-col gap-3">
                  <div className="flex justify-between items-center text-xs text-[#605A57]">
                    <span className="font-mono">RASTREAMENTO DE LANÇAMENTOS</span>
                    <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-mono text-[10px]">SENTINELA ATIVO</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="bg-white p-3.5 rounded-lg border border-red-200/80 flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                          <AlertTriangle className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text--indigo-500">Assinatura Cloud Duplicada</div>
                          <div className="text-[11px] text-[#605A57]">Servidor PJ · R$ 3.840,00</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-red-50 text-red-700 text-[10px] font-mono rounded">
                        Cobrança Dupla
                      </span>
                    </div>

                    <div className="bg-white p-3.5 rounded-lg border border-[rgba(55,50,47,0.08)] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text--indigo-500">Nota Fiscal de Consultoria</div>
                          <div className="text-[11px] text-[#605A57]">Padrão de recebimento normalizado</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-mono rounded">
                        Normal
                      </span>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-[rgba(55,50,47,0.06)] flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-[#49423D] leading-snug">
                      <strong>Ação Sugerida:</strong> Identificamos duas cobranças de infraestrutura de mesmo valor no mesmo dia. Revise a fatura do cartão PJ.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "runway" && (
              <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-blue-700 text-xs font-mono font-semibold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    CÁLCULO DE FÔLEGO E LIQUIDEZ
                  </div>
                  <h3 className="text--indigo-500 text-xl sm:text-2xl font-semibold leading-tight font-sans">
                    Cálculo do Tempo de Sobrevivência do Caixa (Runway)
                  </h3>
                  <p className="text-[#605A57] text-sm leading-relaxed">
                    Mede a velocidade média dos seus gastos fixos e custos operacionais para informar quantos <strong>meses a sua empresa consegue operar com segurança</strong> caso pare de faturar hoje, evitando riscos de liquidez.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[rgba(55,50,47,0.08)]">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#605A57]">Fôlego Financeiro Atual:</span>
                      <span className="font-semibold text-emerald-700">8.4 Meses (Zona Segura)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#605A57]">Risco de Caixa:</span>
                      <span className="font-medium text-emerald-600">Baixo Risco</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-[#F1F5F9] p-5 rounded-xl border border-[rgba(55,50,47,0.08)] flex flex-col gap-3">
                  <div className="flex justify-between items-center text-xs text-[#605A57]">
                    <span className="font-mono">FÔLEGO FINANCEIRO (RUNWAY)</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono text-[10px]">RESERVA SEGURA</span>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-[rgba(55,50,47,0.08)] flex flex-col gap-3">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-2xl sm:text-3xl font-semibold text--indigo-500">8.4</span>
                        <span className="text-xs text-[#605A57] ml-1">meses de reserva</span>
                      </div>
                      <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                        Liquidez Saudável
                      </span>
                    </div>

                    {/* Progress Runway Bar */}
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden flex">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: "70%" }} />
                    </div>

                    <div className="flex justify-between text-[11px] text-[#605A57]">
                      <span>Mínimo recomendado: 3 meses</span>
                      <span>Meta ideal: 12 meses</span>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-[rgba(55,50,47,0.06)] flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-[#49423D] leading-snug">
                      <strong>Simulação:</strong> Mesmo com novas contratações ou ferramentas previstas, seu fôlego financeiro permanece acima de 6 meses.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right vertical pattern */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 150 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
