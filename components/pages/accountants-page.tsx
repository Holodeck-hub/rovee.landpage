"use client"

import { useCallback, useState } from "react"
import Link from "next/link"
import { ArrowLeft, PlayCircle } from "lucide-react"
import { ConsultantModal } from "../shared/consultant-modal"
import { VideoLightbox } from "../shared/video-lightbox"
import { PhoneFrame } from "../shared/phone-frame"
import { BankConstellation } from "../shared/bank-constellation"
import { trackEvent } from "../../lib/analytics"

/**
 * Página para escritórios contábeis.
 *
 * A home fala com o PJ; esta fala com quem atende o PJ. São duas promessas
 * diferentes: o PJ quer pagar menos imposto, o contador quer menos retrabalho
 * no fechamento. Tentar servir os dois na mesma página não converte nenhum.
 *
 * A copy sai da proposta de valor da seção 2.1 e do FAQ da 4.1 do
 * ANALISE_COMPLETA_ROVEE_LP_ADDENDUM_CONTABILIDADE.md — texto já validado,
 * em vez de posicionamento inventado do zero.
 *
 * ⚠️ O que esta página NÃO pode prometer, e por quê:
 * o Módulo Contador Leve (SCRUM-168) está "A Fazer", e mesmo pronto é
 * visualização somente-leitura de UMA empresa. Nada aqui promete painel de
 * carteira — a seção "O portal do escritório" diz explicitamente que está em
 * construção. Anunciar carteira hoje seria o mesmo erro do toggle de desconto.
 */

const DORES = [
  {
    titulo: "Extrato despoluído.",
    texto:
      "O Sentinela PF × PJ marca a despesa pessoal paga pela empresa no dia em que ela acontece. O que chega na conciliação já vem separado.",
  },
  {
    titulo: "Pró-labore calibrado.",
    texto:
      "A memória de cálculo do Fator R vem com FS12, RBT12 e o valor exato para cruzar os 28%. Sem a reunião de alinhamento todo mês.",
  },
  {
    titulo: "Menos pergunta fora de hora.",
    texto:
      "O cliente enxerga sozinho quanto pode retirar e quanto é imposto a vencer. A dúvida morre no app, não no seu WhatsApp de domingo.",
  },
]

/**
 * Números do ponto de vista do escritório.
 *
 * ⚠️ A Rovee não tem base de clientes para medir horas economizadas. A Brex
 * publica "756 horas" porque declara a fonte ("métricas internas de março de
 * 2025"); nós não temos essa fonte. Então a economia aqui é apresentada como
 * ARITMÉTICA VERIFICÁVEL, com a fórmula à vista, e não como medição.
 * Quando houver base real, troque por número medido e declare o período.
 */
/** Minutos que o escritório gasta por cliente, por mês, nas três tarefas. */
const MINUTOS_POR_CLIENTE = 20

const NUMEROS_FIXOS = {
  esquerda: {
    rotulo: "Por cliente, por mês",
    valor: "3 idas e voltas",
    texto:
      "Pedir o extrato, separar despesa pessoal e alinhar o pró-labore deixam de ser tarefa do escritório",
  },
  direita: {
    rotulo: "Poder de movimentação da Rovee",
    valor: "Zero",
    texto: "Acesso somente-leitura: não transferimos, não pagamos e não emitimos nada",
  },
}

const FAQ = [
  {
    p: "A Rovee substitui a contabilidade?",
    r: "Não. O contador é o profissional legalmente responsável pela escrituração, pela emissão de guias e pelas obrigações acessórias perante o Fisco. A Rovee atua no dia a dia da empresa — calcula a calibragem do pró-labore, separa o que pode ser gasto e entrega as memórias de cálculo prontas para você validar.",
  },
  {
    p: "Meu cliente me dá acesso aos relatórios?",
    r: "Sim, por convite dele, num perfil exclusivo de visualização. Você acessa faturamento, memórias de cálculo do Fator R e demonstrativos de conciliação sem pedir extrato por e-mail no fechamento. O convite parte sempre do cliente: a Rovee não condiciona o cadastro dele ao aval de ninguém.",
  },
  {
    p: "Existe um painel para gerir todos os meus clientes?",
    r: "Ainda não. Hoje o acesso é por empresa, a convite do cliente. O painel de carteira está em desenvolvimento e é justamente o que queremos desenhar junto com escritórios parceiros — é para isso que serve a conversa.",
  },
]

export function AccountantsPage() {
  const [modalAberto, setModalAberto] = useState(false)
  const [videoAberto, setVideoAberto] = useState(false)
  const [email, setEmail] = useState("")
  const [clientes, setClientes] = useState(40)
  const [emailInicial, setEmailInicial] = useState<string | undefined>()

  const abrirModal = useCallback((origem: string, emailDigitado?: string) => {
    trackEvent("abriu_modal", { origem, perfil: "contabilidade" })
    setEmailInicial(emailDigitado)
    setModalAberto(true)
  }, [])

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      {/* ── Cabeçalho enxuto: esta página não tem as âncoras da home ── */}
      <header className="w-full border-b border-[rgba(55,50,47,0.12)] bg-white sticky top-0 z-30">
        <div className="w-full max-w-[1100px] mx-auto px-5 h-15 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
            <span className="text-secondary text-lg font-bold tracking-[-0.03em]">Rovee</span>
              <span className="hidden sm:inline text-xs font-mono uppercase tracking-wider text-ink-faint">
                para contadores
              </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-secondary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Site principal
            </Link>
            <button
              type="button"
              onClick={() => abrirModal("contadores_header")}
              className="h-9 px-4 bg-primary hover:bg-primary-hover text-white text-sm font-normal rounded-lg transition-colors cursor-pointer"
            >
              Falar sobre parceria
            </button>
          </div>
        </div>
      </header>

      <main id="conteudo" className="w-full flex flex-col items-center">
        {/* ── Hero ── */}
        <section aria-label="Rovee para escritórios contábeis" className="w-full">
          <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] items-center gap-12 px-5 pt-16 sm:pt-24 pb-16 sm:pb-20">
            <div className="flex flex-col items-start gap-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-faint">
                Para escritórios contábeis
              </span>

              <h1 className="text-secondary text-[32px] sm:text-[42px] md:text-[50px] font-medium h-display text-balance">
                Seu cliente chega ao fechamento com o extrato já limpo.
              </h1>

              <p className="text-ink-muted text-base md:text-[1.0625rem] leading-[1.58] max-w-[34rem]">
                A Rovee calibra o pró-labore pelo Fator R e separa despesa pessoal da
                despesa da empresa durante o mês. Você recebe a memória de cálculo pronta.
              </p>

              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  abrirModal("contadores_hero", email.trim() || undefined)
                }}
                className="w-full max-w-[26rem] mt-1"
              >
                <label htmlFor="contador-email" className="sr-only">
                  E-mail do escritório
                </label>
                <div className="flex items-center gap-1.5 p-1.5 bg-white border border-[rgba(55,50,47,0.16)] rounded-xl focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-colors">
                  <input
                    id="contador-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="E-mail do escritório"
                    className="flex-1 min-w-0 h-9 px-3 bg-transparent text-sm text-secondary placeholder-ink-faint focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="h-9 px-4 shrink-0 bg-primary hover:bg-primary-hover text-white text-sm font-normal rounded-lg transition-colors cursor-pointer"
                  >
                    Falar sobre parceria
                  </button>
                </div>
              </form>

              <button
                type="button"
                onClick={() => setVideoAberto(true)}
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline cursor-pointer"
              >
                <PlayCircle className="w-[18px] h-[18px]" aria-hidden="true" />
                Ver o que o cliente enxerga
              </button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <PhoneFrame larguraClasse="w-[220px] sm:w-[250px]" />
            </div>
          </div>
        </section>

        {/* ── O que muda no seu fechamento ── */}
        <section aria-label="O que muda no fechamento" className="w-full band-tint border-y border-[rgba(55,50,47,0.12)]">
          <div className="w-full max-w-[1100px] mx-auto px-5 py-20 sm:py-24">
            <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance max-w-[38rem]">
              O trabalho que some do seu mês.
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {DORES.map((d) => (
                <div key={d.titulo} className="flex flex-col items-start gap-2.5">
                  <h3 className="text-secondary text-base font-medium tracking-[-0.018em]">
                    {d.titulo}
                  </h3>
                  <p className="text-ink-muted text-sm leading-[1.6]">{d.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── A fronteira: o que a Rovee não faz ── */}
        <section aria-label="Limites da Rovee" className="w-full border-b border-[rgba(55,50,47,0.12)]">
          <div className="w-full max-w-[1100px] mx-auto px-5 py-20 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="flex flex-col items-start gap-5">
              <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance">
                A Rovee não faz a sua parte.
              </h2>
              <p className="text-ink-muted text-base leading-[1.58] max-w-[32rem]">
                Escrituração, guias e obrigações acessórias continuam com você — é a sua
                responsabilidade legal, e a Rovee não encosta nisso. O que ela faz é
                entregar o mês organizado antes de chegar na sua mesa.
              </p>
            </div>

            <ul className="flex flex-col divide-y divide-[rgba(55,50,47,0.1)] border-y border-[rgba(55,50,47,0.1)]">
              {[
                "Não faz escrituração contábil",
                "Não emite guia, DAS nem obrigação acessória",
                "Não movimenta dinheiro: o acesso bancário é somente-leitura",
                "Não condiciona o cadastro do cliente ao aval de ninguém",
              ].map((item) => (
                <li key={item} className="py-4 text-sm text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Números ── */}
        <section aria-label="Números" className="w-full band-tint border-b border-[rgba(55,50,47,0.12)]">
          <div className="w-full max-w-[1000px] mx-auto px-5 py-20 sm:py-24">
            <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-center text-balance max-w-[42rem] mx-auto">
              O trabalho que sai da conta do escritório.
            </h2>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 md:gap-12">
              <div className="flex flex-col items-start">
                <p className="text-secondary text-base font-medium tracking-[-0.015em]">
                  {NUMEROS_FIXOS.esquerda.rotulo}
                </p>
                <p className="text-primary text-[2rem] sm:text-[2.25rem] md:text-[2.5rem] font-medium tracking-[-0.03em] leading-[1.1] mt-1.5">
                  {NUMEROS_FIXOS.esquerda.valor}
                </p>
                <p className="text-ink-muted text-sm leading-[1.55] mt-3 max-w-[19rem]">
                  {NUMEROS_FIXOS.esquerda.texto}
                </p>
              </div>

              {/* A conta é do leitor: ele troca o número de clientes e o
                  resultado muda. Vale mais que uma nota de rodapé explicando
                  de onde saiu a estimativa. */}
              <div className="flex flex-col items-start">
                <label
                  htmlFor="qtd-clientes"
                  className="text-secondary text-base font-medium tracking-[-0.015em] flex items-baseline gap-1.5 flex-wrap"
                >
                  Escritório com
                  <input
                    id="qtd-clientes"
                    type="number"
                    min={1}
                    max={999}
                    value={clientes}
                    onChange={(event) => {
                      const n = Number(event.target.value)
                      setClientes(Number.isFinite(n) ? Math.min(999, Math.max(1, n)) : 1)
                    }}
                    className="w-[3.6rem] px-1.5 py-0.5 text-center bg-white border-b-2 border-primary/40 focus:border-primary rounded-t text-secondary font-medium focus:outline-none tabular-nums"
                  />
                  clientes PJ
                </label>
                <p className="text-primary text-[2rem] sm:text-[2.25rem] md:text-[2.5rem] font-medium tracking-[-0.03em] leading-[1.1] mt-1.5 tabular-nums">
                  {((clientes * MINUTOS_POR_CLIENTE) / 60).toLocaleString("pt-BR", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  })}{" "}
                  h/mês
                </p>
                <p className="text-ink-muted text-sm leading-[1.55] mt-3 max-w-[19rem]">
                  Contando {MINUTOS_POR_CLIENTE} minutos por cliente somados nas três
                  tarefas. Troque o número e veja a conta do seu escritório.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <p className="text-secondary text-base font-medium tracking-[-0.015em]">
                  {NUMEROS_FIXOS.direita.rotulo}
                </p>
                <p className="text-primary text-[2rem] sm:text-[2.25rem] md:text-[2.5rem] font-medium tracking-[-0.03em] leading-[1.1] mt-1.5">
                  {NUMEROS_FIXOS.direita.valor}
                </p>
                <p className="text-ink-muted text-sm leading-[1.55] mt-3 max-w-[19rem]">
                  {NUMEROS_FIXOS.direita.texto}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Conciliação: o formato de constelação, com a promessa que é
             verdadeira hoje. O addendum (Gate 2) proíbe anunciar conexão
             automática via Open Finance antes do SCRUM-167 homologar, então
             o texto diz "em homologação" em vez de "conecte seu banco". ── */}
        <section aria-label="De onde vêm os extratos" className="w-full border-b border-[rgba(55,50,47,0.12)]">
          <div className="w-full max-w-[1100px] mx-auto px-5 py-20 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <BankConstellation />
            </div>

            <div className="order-1 md:order-2 flex flex-col items-start gap-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-faint">
                De onde vêm os números
              </span>

              <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance">
                Pare de cobrar extrato do cliente no dia 5.
              </h2>

              <p className="text-ink-muted text-base leading-[1.58] max-w-[32rem]">
                Contador: o extrato entra pelo lado do cliente, por OFX ou PDF, e já chega
                classificado, com a despesa pessoal separada da despesa da empresa. Você
                deixa de perseguir arquivo por WhatsApp no fechamento.
              </p>

              <p className="text-ink-faint text-xs leading-relaxed max-w-[32rem]">
                A conexão bancária automática via Open Finance está em homologação de
                cobertura e segurança. Enquanto não conclui, a entrada é por importação de
                arquivo — e nós não anunciamos o que ainda não está no ar.
              </p>

              <button
                type="button"
                onClick={() => abrirModal("contadores_conciliacao")}
                className="h-10 px-4 mt-1 bg-primary hover:bg-primary-hover text-white text-sm font-normal rounded-lg transition-colors cursor-pointer"
              >
                Ver como chega na sua mesa
              </button>
            </div>
          </div>
        </section>

        {/* ── Estado real do produto: honestidade sobre o portal ── */}
        <section aria-label="Portal do escritório" className="w-full border-b border-[rgba(55,50,47,0.12)]">
          <div className="w-full max-w-[760px] mx-auto px-5 py-20 sm:py-24 flex flex-col items-start gap-5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-faint">
              Onde estamos
            </span>
            <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance">
              O painel de carteira ainda não existe.
            </h2>
            <p className="text-ink-muted text-base leading-[1.58]">
              Hoje o acesso é por empresa, a convite do cliente, em perfil somente-leitura.
              Um painel para acompanhar todos os seus clientes num lugar só está em
              desenvolvimento — e é exatamente o que queremos desenhar junto com os
              primeiros escritórios parceiros, antes de escrever a primeira linha.
            </p>
            <button
              type="button"
              onClick={() => abrirModal("contadores_parceria")}
              className="h-10 px-4 mt-2 bg-primary hover:bg-primary-hover text-white text-sm font-normal rounded-lg transition-colors cursor-pointer"
            >
              Quero participar do desenho
            </button>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section aria-label="Dúvidas frequentes" className="w-full band-tint">
          <div className="w-full max-w-[760px] mx-auto px-5 py-20 sm:py-24">
            <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance">
              As três perguntas que sempre chegam.
            </h2>
            <div className="mt-10 flex flex-col divide-y divide-[rgba(55,50,47,0.12)] border-y border-[rgba(55,50,47,0.12)]">
              {FAQ.map((item) => (
                <div key={item.p} className="py-6 flex flex-col gap-2.5">
                  <h3 className="text-secondary text-base font-medium tracking-[-0.018em]">
                    {item.p}
                  </h3>
                  <p className="text-ink-muted text-sm leading-[1.6]">{item.r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-[rgba(55,50,47,0.12)] py-10 px-5">
        <div className="w-full max-w-[1100px] mx-auto flex flex-wrap gap-4 justify-between items-center text-xs text-ink-faint">
          <span>© {new Date().getFullYear()} Rovee Tecnologia Financeira Ltda.</span>
          <span className="flex gap-4">
            <Link href="/" className="hover:text-secondary">Site principal</Link>
            <Link href="/termos" className="hover:text-secondary">Termos</Link>
            <Link href="/privacidade" className="hover:text-secondary">Privacidade</Link>
          </span>
        </div>
      </footer>

      <ConsultantModal
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        emailInicial={emailInicial}
      />
      <VideoLightbox isOpen={videoAberto} onClose={() => setVideoAberto(false)} />
    </div>
  )
}
