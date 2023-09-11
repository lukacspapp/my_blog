'use client'

import { Accordion, AccordionItem } from '../ui/accordion'
import ChatAccordion from './ChatAccordion'
import Login from '../Auth/Login'
import { useUserStore } from '../../lib/store/userStore'
import Image from 'next/image'


export default function Chat({prompts}) {

  const user = useUserStore(state => state.user)

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
        {user ?
          <ChatAccordion prompts={prompts} />
          :
          <Login/>
        }
      </AccordionItem>
    </Accordion>
  )
}