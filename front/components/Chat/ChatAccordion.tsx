'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { AccordionContent, AccordionTrigger } from "../ui/accordion"
import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"
import { useLoadingErrorStore } from "../../lib/store/loadingErrorStore"
import { useState } from "react"
import { useUserStore } from "../../lib/store/userStore"
import Image from "next/image"

export default function ChatAccordion({ prompts }) {

  const [messages, setMessages] = useState(prompts)

  const supabase = createClientComponentClient()

  async function getPrompts() {
    const { data: prompts , error } = await supabase
    .from('chat_prompts')
    .select('*')
    setMessages(prompts)
  }

  const user = useUserStore(state => state.user)
  const avatarImage = user && user.session.user.user_metadata.avatar_url

  const avatar =
    <div>
      <Image width={10} height={10} className="w-10 h-10 rounded-full" src={avatarImage} alt=""/>
      <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>

  return (
    <div
      className='fixed right-8 w-80 bottom-8 dark:bg-gray-700 bg-white shadow-lg rounded-md overflow-hidden'>
      <div className='flex flex-col h-full w-full'>
        <AccordionTrigger className='px-6 border-b-4 border-red-600'>
          <ChatHeader prompts={messages}/>
        </AccordionTrigger>
        <AccordionContent>
          <div className='flex flex-col h-80'>
            <ChatMessages className='px-2 py-3 flex-1' prompts={messages} />
            <ChatInput getPrompts={getPrompts} prompts={messages} />
          </div>
        </AccordionContent>
      </div>
    </div>
  )
}