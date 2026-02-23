'use client'

import { TooltipProvider } from '@radix-ui/react-tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { usePathname } from 'next/navigation'
import "tailwindcss/tailwind.css"
import Footer from '../components/Footer'
import Gradient from '../components/Gradient'
import Navigation from '../components/Navigation/Navigation'
import { useEffect } from 'react'
import { useUserStore } from '../lib/store/userStore'
import ChatPopover from '../components/Chat/ChatPopover'
import Login from '../components/Auth/Login'
import { useMessagesStore } from '../lib/store/messagesStore'
import { createSupabaseClient } from '../lib/supabase/client'


export function Providers({ children, email, prompts, session }) {

  const router = usePathname()
  const user = useUserStore(state => state.user)
  const setUser = useUserStore(state => state.setUser)
  const supabase = createSupabaseClient()
  const messages = useMessagesStore(state => state.messages)
  const setMessages = useMessagesStore(state => state.setMessages)

  async function getSession() {
    const { data } = await supabase.auth.getSession()

    if (data && data.session) {
      setUser(data.session)
      await getPrompts().then(prompts => {
        if (prompts) {
          setMessages(prompts)
        }
      })
    }
  }

  async function getPrompts() {
    const { data: prompts, error } = await supabase
      .from('messages')
      .select('*')

    if (prompts) return prompts
  }

  const queryClient = new QueryClient()

  const footer = router === '/' ? null : <Footer />

  useEffect(() => {
    if (session) {
      setUser(session)
      setMessages(prompts)
    }
    if (!session) {
      getSession()
    }
  }, [session])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" storageKey='app-theme' defaultTheme='system'>
        <Gradient />
        <TooltipProvider>
          <Navigation email={email} />
        </TooltipProvider>
        {children}
        <TooltipProvider>
          {footer}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}