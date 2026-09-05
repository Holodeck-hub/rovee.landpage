import type React from "react"
import { PagesShell } from "@/components/layout"

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return <PagesShell>{children}</PagesShell>
}
