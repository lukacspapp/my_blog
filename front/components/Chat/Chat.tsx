'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'

type Props = {}

export default function Chat({}: Props) {
  return (
    <Accordion
      type='single'
      collapsible
      className='relative bg-white dark:bg-gray-800 rounded-lg shadow'
    >
      <AccordionItem
        className='border-b border-divider border-none'
        value='item-1'
      >
        <div
          className='fixed right-8 w-80 bottom-8 bg-white dark:bg-gray-800,
          rounded-md overflow-hidden'
        >
          <div className='flex flex-col h-full w-full'>
            <AccordionTrigger
              className='px-6 border-b border-zinc-300'
            >
              <ChatHeader />
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col h-80'>
                message
                <ChatInput />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  )
}