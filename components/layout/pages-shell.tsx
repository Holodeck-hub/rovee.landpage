"use client"

import { useState, useEffect } from "react"
import { StickyNavbar, TopNavbar } from "./navbar"
import FooterSection from "./footer-section"
import { ConsultantProvider, useConsultant } from "./consultant-context"

function PagesShellInner({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const { openConsultant } = useConsultant()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="w-full min-h-screen relative bg-white overflow-x-hidden flex flex-col justify-start items-center">
      {/* ── SKIP LINK ── */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-primary focus:text-white focus:text-sm focus:font-semibold focus:rounded-lg focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>

      {/* ── 1. HEADER FLUTUANTE STICKY ── */}
      <header>
        <StickyNavbar isScrolled={isScrolled} onOpenConsultant={openConsultant} />
      </header>

      {/* ── 2. CONTAINER MESTRE CENTRAL ── */}
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1320px] lg:w-[1320px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Linhas verticais que emolduram a página inteira */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />

          <div className="self-stretch pt-[9px] overflow-visible border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10">
            {/* ── NAVBAR DO TOPO ── */}
            <header className="w-full">
              <TopNavbar onOpenConsultant={openConsultant} />
            </header>

            <main id="conteudo" className="w-full flex flex-col items-center">
              {children}
            </main>

            {/* ── FOOTER ── */}
            <div className="w-full">
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PagesShell({ children }: { children: React.ReactNode }) {
  return (
    <ConsultantProvider>
      <PagesShellInner>{children}</PagesShellInner>
    </ConsultantProvider>
  )
}
