"use client"

import { useState, useEffect } from "react"
import {
  StickyNavbar,
  TopNavbar,
  FooterSection,
  ConsultantProvider,
  useConsultant,
} from "@/components/layout"

function PagesLayoutContent({ children }: { children: React.ReactNode }) {
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
      {/* Header flutuante que aparece ao scrollar */}
      <StickyNavbar isScrolled={isScrolled} onOpenConsultant={openConsultant} />

      <header className="w-full">
        <TopNavbar onOpenConsultant={openConsultant} />
      </header>

      <main id="conteudo" className="w-full flex flex-col items-center">
        {children}
      </main>

      <footer className="w-full">
        <FooterSection />
      </footer>
    </div>
  )
}

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <ConsultantProvider>
      <PagesLayoutContent>{children}</PagesLayoutContent>
    </ConsultantProvider>
  )
}
