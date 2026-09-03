"use client"

import Link from "next/link"
import { AnimatedWave } from "../shared/animated-wave"
import { SITE } from "../../lib/site-config"

export default function FooterSection() {
  return (
    <footer className="w-full pt-10 flex flex-col justify-start items-start relative overflow-hidden">
      {/* Background Animated Wave */}
      <div className="absolute inset-0 w-full h-full opacity-40 sm:opacity-50 z-0 pointer-events-none">
        <AnimatedWave />
      </div>

      {/* Main Footer Content */}
      <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0 relative z-10">
        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-6 max-w-sm">
          {/* Brand Section */}
          <div className="self-stretch flex items-center">
            <div className="text-primary text-2xl font-bold font-sans tracking-tight">Rovee</div>
          </div>

          <p className="text-[#605A57] text-xs sm:text-sm font-normal leading-relaxed font-sans">
            A fintech construída para transformar faturamento em decisões tributárias
            lucrativas e clareza absoluta de caixa para quem empreende.
          </p>

          <div className="text-[11px] text-[#6B6560] font-mono">
            Origem: Amazônia, Brasil 🇧🇷 • Operação Nacional
          </div>
        </div>

        {/* Navigation Links */}
        <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8 flex-1">
          {/* Produto */}
          <nav aria-labelledby="footer-produto" className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div id="footer-produto" className="text-[rgba(73,66,61,0.62)] text-xs font-semibold uppercase tracking-wider font-mono">
              Produto
            </div>
            <div className="flex flex-col justify-end items-start gap-1 text-xs font-medium text-[#49423D]">
              <a href="/#fiscal" className="py-2 hover:text-secondary transition-colors">
                Inteligência Fiscal
              </a>
              <a href="/#predicao" className="py-2 hover:text-secondary transition-colors">
                Predição & Machine Learning
              </a>
              <a href="/#agentes" className="py-2 hover:text-secondary transition-colors">
                Agentes Proativos
              </a>
              <a href="/#metricas" className="py-2 hover:text-secondary transition-colors">
                Métricas ao Vivo
              </a>
              <a href="/#depoimentos" className="py-2 hover:text-secondary transition-colors">
                Cenários de Uso
              </a>
            </div>
          </nav>

          {/* Segurança & Conformidade */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.62)] text-xs font-semibold uppercase tracking-wider font-mono">
              Segurança
            </div>
            <div className="flex flex-col justify-center items-start gap-2 text-xs font-medium text-[#49423D]">
              <span className="text-[#605A57]">Criptografia AES-256</span>
              <span className="text-[#605A57]">Conformidade LGPD</span>
              <span className="text-[#605A57]">Matemática Determinística</span>
              <span className="text-[#605A57]">Parceiro do Contador</span>
            </div>
          </div>

          {/* Legal */}
          <nav aria-labelledby="footer-empresa" className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div id="footer-empresa" className="text-[rgba(73,66,61,0.62)] text-xs font-semibold uppercase tracking-wider font-mono">
              Empresa
            </div>
            <div className="flex flex-col justify-center items-start gap-1 text-xs font-medium text-[#49423D]">
              <Link href="/contadores" className="py-2 hover:text-secondary hover:underline transition-colors">
                Para contadores
              </Link>
              <Link href="/termos" className="py-2 hover:text-secondary hover:underline transition-colors">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="py-2 hover:text-secondary hover:underline transition-colors">
                Privacidade
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 hover:text-secondary hover:underline transition-colors"
              >
                Suporte
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="self-stretch border-t border-[rgba(55,50,47,0.12)] px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6560] relative z-10 bg-white/30 backdrop-blur-xs">
        <div>
          © {new Date().getFullYear()} {SITE.legalName} Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
