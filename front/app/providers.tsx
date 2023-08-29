'use client'

import { TooltipProvider } from '@radix-ui/react-tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Inspect from 'inspx'
import { ThemeProvider } from 'next-themes'
import { usePathname, useRouter } from 'next/navigation'
import "tailwindcss/tailwind.css"
import Footer from '../components/Footer'
import Gradient from '../components/Gradient'
import Navigation from '../components/Navigation/Navigation'
import { MessagesProvider } from '../context/messages'
import Chat from '../components/Chat/Chat'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { useUserStore } from '../lib/store/userStore'
import { Provider } from '@supabase/supabase-js'
import { useLoadingErrorStore } from '../lib/store/loadingErrorStore'


export function Providers({ children, email, prompts }) {

  const routerPush = useRouter()

  const router = usePathname()
  const user = useUserStore(state => state.user)
  const setUser = useUserStore(state => state.setUser)
  const supabase = createClientComponentClient()
  const setError = useLoadingErrorStore(state => state.setError);

  async function getSession() {
    const { data, error } = await supabase.auth.getSession()

    if (error) setError(error)
    if (data && data.session) setUser(data.session)
  }

  async function signout() {
    const { error } = await supabase.auth.signOut()

    if (error) setError(error)

    if (!error) {
      setUser(null)
      routerPush.push('/')
    }
  }

  const queryClient = new QueryClient()

  const footer = router === '/' ? null : <Footer />

  useEffect(() => {
    getSession()
  }, [])


  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" storageKey='app-theme' defaultTheme='system'>
        <Inspect>
          <Gradient />
          <TooltipProvider>
            <button onClick={signout}>Sign out</button>
            <Navigation email={email}  />
          </TooltipProvider>
            <MessagesProvider>
              {children}
              <Chat prompts={prompts} />
            </MessagesProvider>
          <TooltipProvider>
            {footer}
          </TooltipProvider>
        </Inspect>
      </ThemeProvider>
    </QueryClientProvider>
  )
}