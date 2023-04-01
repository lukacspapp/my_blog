'use client'

import { TooltipProvider } from '@radix-ui/react-tooltip'
import { ThemeProvider } from 'next-themes'
import Navigation from '../components/Navigation/Navigation'

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" storageKey='app-theme' defaultTheme='system'>
      <TooltipProvider>
        <Navigation />
        {children}
      </TooltipProvider>
    </ThemeProvider>
  )
}