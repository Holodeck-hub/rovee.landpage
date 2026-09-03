"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "O que é uma Fintech Fiscal e como ela se diferencia de um app de finanças ou ERP?",
    answer:
      "Aplicativos tradicionais apenas registram o que você já gastou no passado. A Rovee atua no presente e no futuro: ela calcula seu pró-labore ideal no Simples Nacional para pagar a menor alíquota legal, separa seu caixa em 3 baldes (Seu, Empresa e Imposto) e usa Machine Learning para prever seu faturamento e proteger sua liquidez.",
  },
  {
    question: "A Rovee substitui o trabalho do meu contador?",
    answer:
      "Não. A Rovee é a maior aliada do seu contador. Ela resolve a tomada de decisão diária do empreendedor (quanto retirar, como provisionar e evitar despesas pessoais na PJ) e entrega tudo conciliado e calculado para o contador fazer a apuração e escrituração legal com facilidade e zero atrito.",
  },
  {
    question: "Como funciona a otimização do Fator R no Simples Nacional?",
    answer:
      "Para empresas de serviços e tecnologia, se a folha de salários (FS12) representar pelo menos 28% do faturamento bruto (RBT12), a tributação cai do Anexo V (a partir de 15,5%) para o Anexo III (a partir de 6%). A Rovee calcula deterministicamente o pró-labore ótimo que minimiza a soma de Simples + INSS + IRPF.",
  },
  {
    question: "Como a IA preditiva da Rovee funciona sem alucinações?",
    answer:
      "A Rovee utiliza uma arquitetura determinística de 3 camadas: toda a matemática de projeção de faturamento, detecção de gastos atípicos e cálculo de fôlego financeiro roda em código nativo de alta precisão. A inteligência artificial atua exclusivamente na tradução dessas métricas em orientações práticas em português claro e direto para a sua rotina.",
  },
  {
    question: "Meus dados bancários e financeiros estão seguros?",
    answer:
      "Sim. Utilizamos criptografia de padrão bancário (AES-256) em repouso e em trânsito (TLS 1.3), controle rigoroso de acesso multi-tenant (RBAC), verificação em 2 etapas por OTP e estrita conformidade com a LGPD.",
  },
  {
    question: "Meu contador pode acessar a Rovee para pegar os relatórios?",
    answer:
      "Sim. Você pode convidar seu contador para um perfil exclusivo de visualização (Viewer somente-leitura). Ele terá acesso direto aos relatórios de faturamento, memórias de cálculo do Fator R e demonstrativos de conciliação, sem precisar ficar pedindo extratos por e-mail ou WhatsApp no fechamento do mês.",
  },
  {
    question: "Como funciona a importação de extratos bancários?",
    answer:
      "Você pode subir extratos bancários em formato OFX, CSV ou PDF de qualquer banco brasileiro (Nubank PJ, Itaú, Inter, C6, etc.). O sistema remove duplicidades automaticamente e nossa IA limpa e categoriza todas as transações em segundos.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start border-b border-[rgba(55,50,47,0.12)]">
      <div className="flex-1 w-full px-4 md:px-12 py-16 md:py-24 flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-16">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-3 lg:py-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Dúvidas Frequentes
          </span>

          <h2 className="w-full text-[#37322F] font-medium font-sans text-3xl sm:text-4xl h-section">
            Perguntas Frequentes sobre a Rovee
          </h2>

          <p className="w-full text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans">
            Tudo o que você precisa saber sobre o funcionamento da Fintech Fiscal, a segurança dos dados e o modelo de parceria com os contadores.
          </p>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(55,50,47,0.12)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full py-4 sm:py-5 flex justify-between items-center gap-4 text-left hover:bg-[rgba(55,50,47,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#37322F] text-sm sm:text-base font-semibold leading-snug font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-5 h-5 text-[#6B6560] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180 text-[#37322F]" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="text-[#605A57] text-xs sm:text-sm font-normal leading-relaxed font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default FAQSection
