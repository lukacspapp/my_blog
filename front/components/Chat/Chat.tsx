'use client'

import { Accordion, AccordionItem } from '../ui/accordion'
import ChatAccordion from './ChatAccordion'
import Login from '../Auth/Login'

export default function Chat() {

  const session = null

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
        {session ?
          <ChatAccordion />
          :
          <Login />
        }
      </AccordionItem>
    </Accordion>
  )
}