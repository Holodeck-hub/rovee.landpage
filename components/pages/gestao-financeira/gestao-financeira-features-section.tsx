"use client"

import { Badge } from "@/components/reui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRightIcon, BellIcon, SparklesIcon } from "lucide-react"
import { useConsultant } from "@/components/layout"

const CARDS = [
  {
    id: "bancos",
    titulo: "Conecte todas as suas contas PJ",
    imagem: "/imagens/amazon-open.jpg",
    badge: "Open Finance",
    tag: "Multi-contas",
    descricao:
      "Bancos, contas e cartões da empresa em um só lugar via Open Finance, sem depender de planilha paralela ou exportar extrato à mão.",
    botao: "Conectar Contas",
  },
  {
    id: "alertas",
    titulo: "Alertas antes do imposto vencer",
    imagem: "/imagens/bg-home-main.jpg",
    badge: "Tempo Real",
    tag: "Notificações",
    descricao:
      "Seja avisado quando o DAS estiver perto do vencimento, quando o Fator R sair de faixa ou quando um gasto pessoal cair na conta errada.",
    botao: "Ativar Alertas",
  },
  {
    id: "runway",
    titulo: "Runway de caixa sempre visível",
    imagem: "/imagens/visi.jpg",
    badge: "Previsibilidade",
    tag: "Projeção",
    descricao:
      "Projeção de quanto caixa sua PJ tem para os próximos meses, considerando sazonalidade de faturamento e a reserva já provisionada.",
    botao: "Ver Projeção",
  },
]

export function GestaoFinanceiraFeaturesSection() {
  const { openConsultant } = useConsultant()

  return (
    <section id="pilares-gestao" aria-label="Recursos de Gestão Financeira" className="w-full band-tint border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1100px] mx-auto px-5 py-20 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <Card key={card.id} className="w-full border-[rgba(55,50,47,0.14)] bg-white shadow-xs py-0 gap-0">
              <CardContent className="flex flex-col gap-4 p-2 sm:p-3 flex-1 justify-between">
                <div className="relative h-48 w-full overflow-hidden rounded-lg bg-[rgba(55,50,47,0.06)]">
                  {card.imagem && (
                    <img
                      src={card.imagem}
                      alt={card.titulo}
                      width={1000}
                      height={800}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>

                <div className="flex items-center justify-between gap-5">
                  <Badge variant="outline">
                    {card.badge}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <span className="text-secondary-foreground text-xs font-medium">
                      {card.tag}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-semibold text-secondary leading-snug">
                    {card.titulo}
                  </h3>
                  <p className="text-foreground text-sm mt-2 leading-relaxed">
                    {card.descricao}
                  </p>
                </div>

                {/* <Button
                  onClick={() => openConsultant(`gestao_${card.id}`)}
                  className="w-full cursor-pointer mt-2"
                >
                  {card.botao}
                  <ArrowRightIcon aria-hidden="true" />
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
export default GestaoFinanceiraFeaturesSection
