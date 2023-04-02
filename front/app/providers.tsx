'use client'

import { TooltipProvider } from '@radix-ui/react-tooltip'
import Inspect from 'inspx'
import { ThemeProvider } from 'next-themes'
import "tailwindcss/tailwind.css"
import Footer from '../components/Footer'
import Gradient from '../components/Gradient'
import Navigation from '../components/Navigation/Navigation'

export function Providers({ children }) {

  return (
    <ThemeProvider attribute="class" storageKey='app-theme' defaultTheme='system'>
      <Inspect>
          <Gradient />
        <TooltipProvider>
          <Navigation />
        </TooltipProvider>
        {children}
        <TooltipProvider>
          <Footer />
        </TooltipProvider>
      </Inspect>
    </ThemeProvider>
  )
}