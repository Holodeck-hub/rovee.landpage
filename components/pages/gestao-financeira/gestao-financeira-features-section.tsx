"use client"

import { Card, CardContent } from "@/components/ui/card"

const CARDS = [
  {
    id: "bancos",
    titulo: "Conecte todas as suas contas PJ",
    imagem: "/imagens/mobile1.jpg",
    paragrafos: [
      "Bancos, contas e cartões da empresa em um só lugar via Open Finance, sem depender de planilha paralela ou exportar extrato à mão.",
      "Acompanhe o Cheque do Mês num relance ou abra a memória de cálculo completa do Fator R e do DAS provisionado.",
    ],
    rodape: "Contas conectadas automaticamente",
  },
  {
    id: "alertas",
    titulo: "Alertas antes do imposto vencer",
    imagem: "/imagens/bg-home-main.jpg",
    paragrafos: [
      "Seja avisado quando o DAS estiver perto do vencimento, quando o Fator R sair de faixa ou quando um gasto pessoal cair na conta errada.",
    ],
    rodape: "Alertas em tempo real",
  },
  {
    id: "runway",
    titulo: "Runway de caixa sempre visível",
    imagem: "/imagens/visi.jpg",
    paragrafos: [
      "Projeção de quanto caixa sua PJ tem para os próximos meses, considerando sazonalidade de faturamento e a reserva já provisionada.",
    ],
    rodape: "Runway projetado",
  },
]

export function GestaoFinanceiraFeaturesSection() {
  return (
    <section id="pilares-gestao" aria-label="Recursos de Gestão Financeira" className="w-full band-tint border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1100px] mx-auto px-5 py-20 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <Card key={card.id} className="gap-0 overflow-hidden border-[rgba(55,50,47,0.14)] p-0 shadow-xs">
              <div className="relative h-36 w-full overflow-hidden bg-[rgba(55,50,47,0.06)]">
                {card.imagem && (
                  <img src={card.imagem} alt="" aria-hidden="true" className="h-full w-full object-cover" />
                )}
              </div>
              <CardContent className="flex flex-1 flex-col justify-between gap-5 p-6 sm:p-8">
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-secondary leading-snug">{card.titulo}</h2>
                  {card.paragrafos.map((paragrafo, i) => (
                    <p key={i} className="text-ink-muted text-xs sm:text-sm leading-relaxed mt-3">
                      {paragrafo}
                    </p>
                  ))}
                </div>
                <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs font-mono text-[#605A57]">
                  {card.rodape}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
