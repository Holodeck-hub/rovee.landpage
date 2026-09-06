"use client"

export function LiveMetricsSection() {
  return (
    <section aria-label="Métricas de Precisão" className="w-full px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28 bg-[#E9EDF2]">
      <div className="w-full max-w-[1040px] mx-auto">
        {/* Cabeçalho */}
        <div className="text-center max-w-[620px] mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#717885]">
            Métricas de Precisão
          </span>
          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium font-sans h-section text-balance mt-2">
            Pague menos imposto sem inventar nada.
          </h2>
          <p className="text-[#555C67] text-sm sm:text-base leading-relaxed mt-3">
            Sem manobras arriscadas e sem achismo. A inteligência fiscal da Rovee calibra a relação entre folha e faturamento todo mês.
          </p>
        </div>

        {/* ── BENTO GRID RIGOROSAMENTE FIEL A EXEMPLO.JPG (2 COLUNAS ALINHADAS POR LINHA) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-stretch">
          {/* ═══════════════ COLUNA ESQUERDA ═══════════════ */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* LINHA 1 ESQUERDA: 2 Cards lado a lado (Altura combinando com Card da direita) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 h-[170px]">
              {/* Card 1A: Large Language Model -> Simples Nacional */}
              <div className="rounded-[28px] bg-white p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                <div className="text-xs sm:text-sm font-semibold text-secondary leading-snug">
                  Simples Nacional
                  <div className="text-[11px] font-normal text-[#717680] mt-0.5">Anexo III</div>
                </div>
                <div className="text-4xl sm:text-[2.6rem] font-bold tracking-tight text-secondary leading-none">
                  6,0%
                </div>
              </div>

              {/* Card 1B: Miriam Bell / Nurse -> Pró-labore Ótimo com foto P&B */}
              <div className="rounded-[28px] bg-white p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-secondary leading-snug">
                    Pró-labore Ótimo
                  </div>
                  <div className="text-[11px] font-normal text-[#717680] mt-0.5">Meta Fator R</div>
                </div>
                <div className="pt-2">
                  <img
                    src="/imagens/alexandra-fuller-wkgv7I2VTzM-unsplash.jpg"
                    alt="Sócio PJ"
                    loading="lazy"
                    className="w-10 h-10 rounded-full object-cover grayscale contrast-125 border border-black/10 shadow-xs"
                  />
                </div>
              </div>
            </div>

            {/* LINHA 2 ESQUERDA: Card Slate Cinza (Evaluation and alignment models) */}
            <div className="rounded-[28px] bg-[#D4D9E2] p-6 sm:p-7 flex flex-col justify-between h-[155px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow text-secondary">
              <div className="text-xs sm:text-[13px] font-medium text-[#555C67] leading-tight">
                Art. 50 do Código Civil
                <br />
                Blindagem Patrimonial
              </div>
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-secondary leading-tight">
                Separação total,
                <br />
                extrato 100% limpo.
              </div>
            </div>

            {/* LINHA 3 ESQUERDA: Card Phone / 83% / Strong -> Fator R / 28% / Forte */}
            <div className="rounded-[28px] bg-white p-6 sm:p-7 flex flex-col justify-between h-[185px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-sm font-semibold text-secondary leading-snug">Fator R</div>
                  <div className="text-xs text-[#717680] mt-0.5">Folha / Receita: 28%</div>
                </div>
                {/* Badge pastel verde idêntico ao Strong da imagem */}
                <span className="px-3.5 py-1 rounded-full bg-[#E4EDDB] text-[#3D5428] text-xs font-semibold">
                  Forte
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-4">
                <div className="text-4xl sm:text-[2.6rem] font-bold tracking-tight text-secondary leading-none">
                  28%
                </div>
                {/* 5 Dots idênticos ao exemplo: 3 pretos preenchidos, 2 contornos */}
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-black" />
                  <span className="w-4 h-4 rounded-full bg-black" />
                  <span className="w-4 h-4 rounded-full bg-black" />
                  <span className="w-4 h-4 rounded-full border-2 border-black" />
                  <span className="w-4 h-4 rounded-full border-2 border-black" />
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════ COLUNA DIREITA ═══════════════ */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* LINHA 1 DIREITA: Card Organisation performance / 97% / Excellent */}
            <div className="rounded-[28px] bg-white p-6 sm:p-7 flex flex-col justify-between h-[170px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-sm font-semibold text-secondary leading-snug">
                    Redução de Imposto
                  </div>
                  <div className="text-xs text-[#717680] mt-0.5">Meta atingida: 100%</div>
                </div>
                {/* Badge pastel pêssego/laranja idêntico ao Excellent */}
                <span className="px-3.5 py-1 rounded-full bg-[#FCE5D2] text-[#9E4915] text-xs font-semibold">
                  Excelente
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-4">
                <div className="text-4xl sm:text-[2.6rem] font-bold tracking-tight text-secondary leading-none">
                  97%
                </div>
                {/* 5 Dots idênticos ao exemplo: todos os 5 preenchidos de preto */}
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-black" />
                  <span className="w-4 h-4 rounded-full bg-black" />
                  <span className="w-4 h-4 rounded-full bg-black" />
                  <span className="w-4 h-4 rounded-full bg-black" />
                  <span className="w-4 h-4 rounded-full bg-black" />
                </div>
              </div>
            </div>

            {/* LINHA 2 DIREITA: Card Provisão (Substituto do widget de volume de áudio, com mesma altura) */}
            <div className="rounded-[28px] bg-white p-6 sm:p-7 flex flex-col justify-between h-[155px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#717680]">Provisão contínua · Vencimento dia 20</div>
                  <div className="text-sm font-semibold text-secondary mt-0.5">DAS Simples Nacional</div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E4EDDB] text-[#3D5428] text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3D5428]" />
                  100% Coberto
                </span>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-baseline justify-between text-xs font-mono">
                  <span className="text-secondary font-bold text-base sm:text-lg">R$ 3.840,00</span>
                  <span className="text-[#717680]">Reservado em conta</span>
                </div>
                <div className="w-full h-2 bg-[#F0F2F5] rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full w-full" />
                </div>
              </div>
            </div>

            {/* LINHA 3 DIREITA: Card Anna Tanner / Checklist Slate com itens e overflow idêntico */}
            <div className="rounded-[28px] bg-[#D4D9E2] p-6 sm:p-7 flex flex-col justify-between h-[185px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow overflow-hidden relative text-secondary">
              <div className="flex items-center gap-3">
                <img
                  src="/imagens/alexandra-fuller-wkgv7I2VTzM-unsplash.jpg"
                  alt="Mariana Silva"
                  loading="lazy"
                  className="w-10 h-10 rounded-full object-cover grayscale contrast-125 border border-white/60 shadow-2xs"
                />
                <div>
                  <div className="text-sm font-semibold text-secondary leading-tight">Mariana Silva</div>
                  <div className="text-xs text-[#555C67] mt-0.5">Sócia PJ · Tech Lead</div>
                </div>
              </div>

              {/* Lista de pílulas idênticas ao checklist da imagem */}
              <div className="flex flex-col gap-1.5 pt-1">
                {/* Item 1: Círculo preto preenchido com check branco */}
                <div className="bg-[#E9ECF1]/95 px-3 py-2 rounded-2xl flex items-center gap-2.5 text-xs text-secondary font-medium shadow-2xs">
                  <span className="w-3.5 h-3.5 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[9px] font-bold">
                    ✓
                  </span>
                  <span className="truncate">Pró-labore ajustado nos 28% do Fator R</span>
                </div>

                {/* Item 2: Círculo preto preenchido com check branco */}
                <div className="bg-[#E9ECF1]/95 px-3 py-2 rounded-2xl flex items-center gap-2.5 text-xs text-secondary font-medium shadow-2xs">
                  <span className="w-3.5 h-3.5 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[9px] font-bold">
                    ✓
                  </span>
                  <span className="truncate">0 despesa pessoal misturada na PJ</span>
                </div>

                {/* Item 3: Círculo vazado branco/cinza */}
                <div className="bg-[#E9ECF1]/95 px-3 py-2 rounded-2xl flex items-center gap-2.5 text-xs text-secondary font-medium shadow-2xs">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-white bg-white/70 shrink-0" />
                  <span className="truncate">Provisão do DAS coberta para o dia 20</span>
                </div>

                {/* Item 4: Parcialmente cortado na borda inferior para reproduzir o overflow do exemplo */}
                <div className="bg-[#E9ECF1]/50 px-3 py-1 rounded-2xl flex items-center gap-2.5 text-xs text-secondary/40 font-medium -mb-4 opacity-40 pointer-events-none">
                  <span className="w-3.5 h-3.5 rounded-full border border-white/60 shrink-0" />
                  <span className="truncate">Extrato conciliado com o contador</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé legal discreto */}
        <p className="text-[#717885] text-xs leading-relaxed text-center mt-12 sm:mt-14 max-w-[52rem] mx-auto">
          Alíquotas e o limite de 28% seguem a Lei Complementar 123/2006 e seus anexos. A economia real depende do seu faturamento, folha e enquadramento. A apuração final é sempre validada com seu contador.
        </p>
      </div>
    </section>
  )
}
export default LiveMetricsSection
