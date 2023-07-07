'use client'

import { TooltipProvider } from '@radix-ui/react-tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Inspect from 'inspx'
import { ThemeProvider } from 'next-themes'
import { usePathname } from 'next/navigation'
import "tailwindcss/tailwind.css"
import Footer from '../components/Footer'
import Gradient from '../components/Gradient'
import Navigation from '../components/Navigation/Navigation'
import { MessagesProvider } from '../context/messages'
import { SessionProvider } from "next-auth/react";

export function Providers({ children, email }) {

  const router = usePathname()

  const queryClient = new QueryClient()

  const footer = router === '/' ? null : <Footer />

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" storageKey='app-theme' defaultTheme='system'>
        <Inspect>
          <Gradient />
          <TooltipProvider>
            <Navigation email={email} />
          </TooltipProvider>
          <SessionProvider>
            <MessagesProvider>
              {children}
            </MessagesProvider>
          </SessionProvider>
          <TooltipProvider>
            {footer}
          </TooltipProvider>
        </Inspect>
      </ThemeProvider>
    </QueryClientProvider>
  )
}