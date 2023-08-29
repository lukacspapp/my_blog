'use client'

import { AccordionContent, AccordionTrigger } from "../ui/accordion"
import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"

export default function ChatAccordion({ prompts }) {
  return (
    <div
      className='fixed right-8 w-80 bottom-8 dark:bg-gray-700 bg-white shadow-lg rounded-md overflow-hidden'>
      <div className='flex flex-col h-full w-full'>
        <AccordionTrigger className='px-6 border-b-4 border-red-600'>
          <ChatHeader prompts={prompts}/>
        </AccordionTrigger>
        <AccordionContent>
          <div className='flex flex-col h-80'>
            <ChatMessages className='px-2 py-3 flex-1' />
            <ChatInput />
          </div>
        </AccordionContent>
      </div>
    </div>
  )
}