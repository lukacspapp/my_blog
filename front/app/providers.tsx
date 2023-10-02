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
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect } from 'react'
import { useUserStore } from '../lib/store/userStore'
import ChatPopover from '../components/Chat/ChatPopover'
import Login from '../components/Auth/Login'
import { useMessagesStore } from '../lib/store/messagesStore'
import uuid from 'react-uuid'
import { timeOfDay } from '../lib/date'
import { getUserName } from '../lib/getUserName'


export function Providers({ children, email, prompts, session }) {

  const router = usePathname()
  const user = useUserStore(state => state.user)
  const setUser = useUserStore(state => state.setUser)
  const supabase = createClientComponentClient()
  const messages = useMessagesStore(state => state.messages)
  const setMessages = useMessagesStore(state => state.setMessages)

  const welcomeMessage = user ? {
    id: uuid(),
    isUserInput: false,
    text: getUserName(user.user.user_metadata) ? `Good ${timeOfDay()} ${getUserName(user.user.user_metadata)}, Ask Me Something!` : `Good ${timeOfDay()}, Ask Me Something!`,
  } : null

  async function getSession() {
    const { data } = await supabase.auth.getSession()

    if (data && data.session) setUser(data.session)
  }

  async function getPrompts() {
    const { data: prompts, error } = await supabase
      .from('messages')
      .select('*')
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
      getPrompts()
    }
  }, [session])


  useEffect(() => {
    if (user) {
      setMessages([welcomeMessage, ...prompts])
    }
  }, [user])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" storageKey='app-theme' defaultTheme='system'>
        <Inspect>
          <Gradient />
          <TooltipProvider>
            <Navigation email={email} />
          </TooltipProvider>
          {children}
          {user ?
            <ChatPopover prompts={messages} getPrompts={getPrompts} />
            :
            <Login />
          }
          <TooltipProvider>
            {footer}
          </TooltipProvider>
        </Inspect>
      </ThemeProvider>
    </QueryClientProvider>
  )
}