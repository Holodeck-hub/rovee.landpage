"use client"

/**
 * Números da Rovee, no layout que a Brex usa: título centralizado, três
 * colunas com rótulo, número em destaque e uma frase de contexto, e a nota
 * de método embaixo.
 *
 * A nota não é enfeite. A auditoria apontou que os números fortes do site
 * não declaravam base — e a própria Brex declara a dela ("métricas internas
 * de março de 2025"). Número forte sem base declarada custa credibilidade
 * em vez de gerar.
 *
 * Os três valores abaixo são verificáveis sem acesso a dado de cliente:
 * saem da Lei Complementar 123/2006 e do desenho do produto.
 */
const numeros = [
  {
    rotulo: "Diferença de alíquota",
    valor: "15,5% → 6%",
    texto:
      "O que separa o Anexo V do Anexo III no Simples Nacional para quem presta serviço",
  },
  {
    rotulo: "O limite que decide",
    valor: "28%",
    texto:
      "Razão entre folha e receita dos últimos 12 meses, recalculada a cada competência",
  },
  {
    rotulo: "Poder de movimentação",
    valor: "Zero",
    texto:
      "O acesso via Open Finance é somente‑leitura: a Rovee não transfere nem paga nada",
  },
]

export function LiveMetricsSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28">
      <div className="w-full max-w-[1000px] mx-auto">
        <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium font-sans h-section text-center text-balance max-w-[46rem] mx-auto">
          Pague menos imposto sem inventar nada.
        </h2>

        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 md:gap-12">
          {numeros.map((n) => (
            <div key={n.rotulo} className="flex flex-col items-start">
              <p className="text-secondary text-base font-medium tracking-[-0.015em]">
                {n.rotulo}
              </p>
              <p className="text-primary text-[2rem] sm:text-[2.25rem] md:text-[2.5rem] font-medium tracking-[-0.03em] leading-[1.1] mt-1.5">
                {n.valor}
              </p>
              <p className="text-ink-muted text-sm leading-[1.55] mt-3 max-w-[19rem]">
                {n.texto}
              </p>
            </div>
          ))}
        </div>

        <p className="text-ink-faint text-xs leading-relaxed text-center mt-14 sm:mt-16 max-w-[52rem] mx-auto">
          Alíquotas e o limite de 28% seguem a Lei Complementar 123/2006 e seus anexos, na
          redação vigente. A economia real depende do seu faturamento, da sua folha e do
          seu anexo — e a apuração final é sempre do seu contador.
        </p>
      </div>
    </div>
  )
}
