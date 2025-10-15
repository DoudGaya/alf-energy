"use client"

import { VisitorWelcomeModal } from "@/components/visitor-welcome-modal"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as SonnerToaster } from "sonner"

export function ClientProviders() {
  return (
    <>
      {/* <VisitorWelcomeModal /> */}
      <Toaster />
      <SonnerToaster />
    </>
  )
}
