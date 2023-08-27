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
import Chat from '../components/Chat/Chat'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { useUserStore } from '../lib/store/userStore'


export function Providers({ children, email }) {

  const user = useUserStore(state => state.user)
  const setUser = useUserStore(state => state.setUser)
  const supabase = createClientComponentClient()

  async function signInWithGitHub() {
    const data = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        scopes: 'user'
      }
    })
    console.log(data)
  }

  async function signout() {
    const { error } = await supabase.auth.signOut()
  }
  const router = usePathname()

  const queryClient = new QueryClient()

  const footer = router === '/' ? null : <Footer />

  useEffect(() => {

  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" storageKey='app-theme' defaultTheme='system'>
        <Inspect>
          <Gradient />
          <TooltipProvider>
            <Navigation email={email}  />
          </TooltipProvider>
          <button onClick={signout}>Sign out</button>
          <button
            onClick={signInWithGitHub}
          >Login</button>
            <MessagesProvider>
              {children}
              <Chat />
            </MessagesProvider>
          <TooltipProvider>
            {footer}
          </TooltipProvider>
        </Inspect>
      </ThemeProvider>
    </QueryClientProvider>
  )
}