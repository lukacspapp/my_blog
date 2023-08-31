'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { AccordionContent, AccordionTrigger } from "../ui/accordion"
import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"
import { useLoadingErrorStore } from "../../lib/store/loadingErrorStore"
import { useState } from "react"

export default function ChatAccordion({ prompts }) {

  const [messages, setMessages] = useState(prompts)

  const supabase = createClientComponentClient()

  async function getPrompts() {
    const { data: prompts , error } = await supabase
    .from('chat_prompts')
    .select('*')
    setMessages(prompts)
  }

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