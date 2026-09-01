import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LEGAL_LAST_UPDATE, SITE } from "../../lib/site-config"

/**
 * Casca compartilhada das páginas legais: cabeçalho, largura de leitura,
 * tipografia e rodapé com os dados institucionais que estiverem preenchidos.
 */
export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] flex flex-col items-center">
      <header className="w-full border-b border-[rgba(55,50,47,0.12)] bg-white/80 backdrop-blur-md">
        <div className="w-full max-w-[760px] mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="text-secondary text-xl font-bold tracking-tight hover:opacity-85">
            Rovee
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#49423D] hover:text-secondary min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main id="conteudo" className="w-full max-w-[760px] px-5 py-12 sm:py-16">
        <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6B6560]">
          Documento legal
        </p>
        <h1 className="text-secondary text-3xl sm:text-4xl font-semibold tracking-tight mt-2">
          {title}
        </h1>
        <p className="text-sm text-[#605A57] mt-3 leading-relaxed">{intro}</p>
        <p className="text-xs text-[#6B6560] mt-4">
          Última atualização: {LEGAL_LAST_UPDATE}
        </p>

        <div className="legal-prose mt-10">{children}</div>

        <footer className="mt-14 pt-8 border-t border-[rgba(55,50,47,0.12)] text-xs text-[#6B6560] leading-relaxed">
          <p className="font-medium text-[#49423D]">{SITE.legalName}</p>
          {SITE.cnpj ? <p>CNPJ {SITE.cnpj}</p> : null}
          {SITE.address ? <p>{SITE.address}</p> : null}
          {SITE.email ? (
            <p>
              Contato:{" "}
              <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">
                {SITE.email}
              </a>
            </p>
          ) : null}
          <p className="mt-1">
            WhatsApp:{" "}
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.whatsappDisplay}
            </a>
          </p>
        </footer>
      </main>
    </div>
  )
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-9">
      <h2 className="text-secondary text-lg sm:text-xl font-semibold tracking-tight mb-3">{title}</h2>
      <div className="space-y-3 text-sm text-[#49423D] leading-relaxed">{children}</div>
    </section>
  )
}
