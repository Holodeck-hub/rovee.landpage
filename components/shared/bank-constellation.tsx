"use client"

/**
 * Constelação de bancos com a marca da Rovee no centro.
 *
 * ⚠️ PROVENIÊNCIA DA IMAGEM
 * O anel de logos veio de um print do site da Nibo, enviado como referência.
 * A marca da Rovee foi composta no miolo. Antes de isso ir ao ar num site
 * comercial, alguém precisa decidir se pode: o arranjo é peça de marketing de
 * uma concorrente direta, e os logos são marcas registradas de terceiros.
 *
 * Existe uma versão equivalente feita em CSS, com os ícones de banco do
 * próprio projeto (BankIcon) — está no histórico do git, no commit anterior
 * deste arquivo. Ela é responsiva, pesa ~0 KB e não tem essa dependência.
 */
export function BankConstellation() {
  return (
    <img
      src="/openfinance/constelacao-bancos.png"
      alt="Bancos brasileiros conectados em torno da Rovee: Banco do Brasil, Inter, Bradesco, XP, Cora, Santander, Nubank, Sicoob, Itaú, Sicredi, PagBank e C6."
      width={918}
      height={886}
      className="w-full max-w-[440px] h-auto mx-auto"
      loading="lazy"
      decoding="async"
    />
  )
}
