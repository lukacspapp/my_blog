'use client'

import { useSession } from 'next-auth/react'
import { Accordion, AccordionItem } from '../ui/accordion'
import ChatAccordion from './ChatAccordion'
import Login from '../Login'

export default function Chat() {

  const { data: session } = useSession()

  console.log('====================================');
  console.log('session', session);
  console.log('====================================');



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
        {/* <ChatAccordion /> */}
        <Login />
      </AccordionItem>
    </Accordion>
  )
}