'use client'

import { Accordion, AccordionItem } from '../ui/accordion'
import ChatAccordion from './ChatAccordion'
import Login from '../Auth/Login'
import { useUserStore } from '../../lib/store/userStore'
import Image from 'next/image'


export default function Chat({prompts}) {

  const user = useUserStore(state => state.user)
  const avatarImage = user && user.session.user.user_metadata.avatar_url

  const avatar =
    <div>
      <Image width={10} height={10} className="w-10 h-10 rounded-full" src={avatarImage} alt=""/>
      <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>

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
        {!user ?
          <ChatAccordion prompts={prompts} />
          :
          <Login />
        }
      </AccordionItem>
    </Accordion>
  )
}