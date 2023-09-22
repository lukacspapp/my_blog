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
import ChatPopover from '../components/Chat/ChatPopover'
import Login from '../components/Auth/Login'
import { useSession } from '../lib/hooks/useSession'


export function Providers({ children, email, prompts, session }) {

  const routerPush = useRouter()
  const router = usePathname()
  const user = useUserStore(state => state.user)
  const setUser = useUserStore(state => state.setUser)
  const supabase = createClientComponentClient()
  const setError = useLoadingErrorStore(state => state.setError);
  const [msg, setMsg] = useState(prompts)

  const magyar = useSession()

  async function getSession() {

    const { data } = await supabase.auth.getSession()

    if (data && data.session) {
      const messages = await getPrompts()
      setMsg(messages)
      setUser(data)
    }

  }

  async function signout() {
    const { error } = await supabase.auth.signOut()

    if (error) setError(error)

    if (!error) {
      setUser(null)
      setMsg([])
      routerPush.push('/')
    }
  }

  async function getPrompts() {
    const { data: prompts , error } = await supabase
    .from('messages')
    .select('*')

    return prompts
  }


  const queryClient = new QueryClient()

  const footer = router === '/' ? null : <Footer />

  useEffect(() => {
    if (session) setUser(session)
    if (!session) getSession()
  }, [session])



  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" storageKey='app-theme' defaultTheme='system'>
        <Inspect>
          <Gradient />
          <TooltipProvider>
            <button onClick={signout}>Sign out</button>
            <Navigation email={email}  />
          </TooltipProvider>
            <MessagesProvider prompts={prompts} >
              {children}
              {user ?
                <ChatPopover prompts={prompts} />
                :
                <Login />
              }
            </MessagesProvider>
          <TooltipProvider>
            {footer}
          </TooltipProvider>
        </Inspect>
      </ThemeProvider>
    </QueryClientProvider>
  )
}