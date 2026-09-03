"use client"

import { DollarSign, TrendingUp, ShieldAlert, Clock } from "lucide-react"

export function FiscalIntelligenceBentoSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header com fundo preto */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 w-full py-12 sm:py-16 md:py-20 bg-black text-white border-b border-white/10 flex flex-col justify-start items-center">
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
            Motor de Inteligência Fiscal
          </span>

          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-sans h-section text-balance">
            O fim das dúvidas sobre imposto e pró-labore
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
            Não é apenas um gerenciador financeiro. A Rovee analisa os dados fiscais da sua PJ e entrega decisões que colocam mais dinheiro limpo no seu bolso.
          </p>
        </div>
      </div>

      {/* Bento Grid: Cards com o fundo original preservado (sem mudar o background) */}
      <div className="self-stretch flex justify-center items-start bg-white">
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {/* Card 1: Clareza de Caixa */}
          <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-6 bg-white/70 hover:bg-white transition-colors">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <DollarSign className="w-5 h-5 text-secondary shrink-0" />
                <h3 className="text-xl font-semibold text-secondary">Clareza de Caixa (&quot;Cheque do Mês&quot;)</h3>
              </div>
              <p className="text-sm text-[#605A57] leading-relaxed">
                Divide o dinheiro da empresa em 3 partes claras: o que você pode transferir para sua física sem pagar imposto de novo, a reserva da empresa e o imposto do próximo dia 20.
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] flex items-center justify-between text-xs font-mono text-[#605A57]">
              <span className="text-[#6B6560] text-[11px] uppercase tracking-wider">Decisão</span>
              <span className="font-medium text-secondary">Responde todo dia: &quot;Quanto posso gastar hoje?&quot;</span>
            </div>
          </div>

          {/* Card 2: Fator R */}
          <div className="border-b border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-6 bg-white/70 hover:bg-white transition-colors">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <TrendingUp className="w-5 h-5 text-secondary shrink-0" />
                <h3 className="text-xl font-semibold text-secondary">Otimizador do Fator R</h3>
              </div>
              <p className="text-sm text-[#605A57] leading-relaxed">
                Calcula o pró-labore ideal para pagar 6% de Simples Nacional (Anexo III) em vez de 15,5% (Anexo V). Mostra exatamente quanto você economiza em reais por ano.
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] flex items-center justify-between text-xs font-mono text-[#605A57]">
              <span className="text-[#6B6560] text-[11px] uppercase tracking-wider">Impacto</span>
              <span className="font-medium text-emerald-700">Economia média de R$ 28k a R$ 60k/ano</span>
            </div>
          </div>

          {/* Card 3: Sentinela PF x PJ */}
          <div className="border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-6 bg-white/70 hover:bg-white transition-colors">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <ShieldAlert className="w-5 h-5 text-secondary shrink-0" />
                <h3 className="text-xl font-semibold text-secondary">Sentinela Anti-Mistura PF × PJ</h3>
              </div>
              <p className="text-sm text-[#605A57] leading-relaxed">
                Detecta despesas pessoais pagas na conta da empresa e avisa o custo tributário e os riscos do Art. 50 do Código Civil (desconsideração da personalidade jurídica).
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] flex items-center justify-between text-xs font-mono text-[#605A57]">
              <span className="text-[#6B6560] text-[11px] uppercase tracking-wider">Segurança</span>
              <span className="font-medium text-secondary">Blindagem patrimonial e extrato 100% limpo</span>
            </div>
          </div>

          {/* Card 4: Provisão DAS */}
          <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-6 bg-white/70 hover:bg-white transition-colors">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <h3 className="text-xl font-semibold text-secondary">Provisão em Tempo Real do DAS</h3>
              </div>
              <p className="text-sm text-[#605A57] leading-relaxed">
                Conforme suas notas e recebimentos entram, a Rovee calcula e provisiona o imposto do mês. Botão de 1 clique para separar o valor e nunca ser pego de surpresa.
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] flex items-center justify-between text-xs font-mono text-[#605A57]">
              <span className="text-[#6B6560] text-[11px] uppercase tracking-wider">Pontualidade</span>
              <span className="font-medium text-secondary">Dinheiro do imposto sempre reservado no dia 20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
