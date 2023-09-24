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
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { useUserStore } from '../lib/store/userStore'
import { useLoadingErrorStore } from '../lib/store/loadingErrorStore'
import ChatPopover from '../components/Chat/ChatPopover'
import Login from '../components/Auth/Login'
import { useSession } from '../lib/hooks/useSession'
import { useMessagesStore } from '../lib/store/messagesStore'


export function Providers({ children, email, prompts, session }) {

  const routerPush = useRouter()
  const router = usePathname()
  const user = useUserStore(state => state.user)
  const setUser = useUserStore(state => state.setUser)
  const supabase = createClientComponentClient()
  const [err, setErr] = useState<any>(null)
  const messages = useMessagesStore(state => state.messages)
  const setMessages = useMessagesStore(state => state.setMessages)

  const magyar = useSession()

  async function getSession() {
    const { data } = await supabase.auth.getSession()

    if (data && data.session) setUser(data.session)
  }

  async function signout() {
    const { error } = await supabase.auth.signOut()

    if (error) setErr(error)

    if (!error) {
      setUser(null)
      setMessages([])
      routerPush.push('/')
    }
  }

  async function getPrompts() {
    const { data: prompts, error } = await supabase
      .from('messages')
      .select('*')

    if (prompts) setMessages(prompts)
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

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" storageKey='app-theme' defaultTheme='system'>
        <Inspect>
          <Gradient />
          <TooltipProvider>
            <button onClick={signout}>Sign out</button>
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