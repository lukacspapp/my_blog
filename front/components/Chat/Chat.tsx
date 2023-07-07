'use client'

import { useSession, signIn } from 'next-auth/react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'

export default function Chat() {

  const {data: session} = useSession()

  console.log('====================================');
  console.log('session', session);
  console.log('====================================');

  if (!session) {
    return <button onClick={() => signIn()}>SignIn</button>
  }


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
          className='fixed right-8 w-80 bottom-8 dark:bg-gray-700 bg-white shadow-lg,
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
                <ChatMessages
                  className='px-2 py-3 flex-1'
                />
                <ChatInput />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  )
}