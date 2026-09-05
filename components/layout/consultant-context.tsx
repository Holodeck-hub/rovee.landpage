"use client"

import React, { createContext, useContext, useState, useCallback } from "react"
import { ConsultantModal } from "./consultant-modal"
import { trackEvent } from "@/lib/analytics"

interface ConsultantContextType {
  openConsultant: (origem?: string, email?: string) => void
  closeConsultant: () => void
  isOpen: boolean
}

const ConsultantContext = createContext<ConsultantContextType | null>(null)

export function ConsultantProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [emailInicial, setEmailInicial] = useState<string | undefined>()

  const openConsultant = useCallback((origem?: string, email?: string) => {
    trackEvent("abriu_modal", { origem: origem ?? "nao_identificada" })
    setEmailInicial(email)
    setIsOpen(true)
  }, [])

  const closeConsultant = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <ConsultantContext.Provider value={{ openConsultant, closeConsultant, isOpen }}>
      {children}
      <ConsultantModal
        isOpen={isOpen}
        onClose={closeConsultant}
        emailInicial={emailInicial}
      />
    </ConsultantContext.Provider>
  )
}

export function useConsultant() {
  const context = useContext(ConsultantContext)
  if (!context) {
    throw new Error("useConsultant deve ser usado dentro de um ConsultantProvider")
  }
  return context
}
