'use client'

import { cn } from "../../lib/utils"
import MarkdownLite from './MarkDownLite'
import { useMessagesStore } from "../../lib/store/messagesStore"
import { useEffect } from "react"

interface ChatMessagesProps extends React.HTMLAttributes<HTMLDivElement> {
  prompts: any
}

export default function ChatMessages({className, prompts, ...props}: ChatMessagesProps) {

  const messages = useMessagesStore(state => state.messages)
  const inverseMessages = [...messages].reverse()

  return (
    <div
      {...props}
      className={cn(
        'flex flex-col-reverse gap-3 overflow-y-auto',
        'scrollbar-thumb-blue scrollbar-thumb-rounded',
        'scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch',
        className
      )}
    >
      <div className='flex-1 flex-grow' />
      {inverseMessages.map((message) => {
        return (
          <div className='chat-message' key={`${message.id}-${message.id}`}>
            <div
              className={cn('flex items-end', {
                'justify-end': message.isUserInput,
              })}>
              <div
                className={cn('flex flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden', {
                  'order-1 items-end': message.isUserInput,
                  'order-2 items-start': !message.isUserInput,
                })}>
                <p
                  className={cn('px-4 py-2 rounded-lg', {
                    'bg-blue-600 text-white': message.isUserInput,
                    'bg-gray-200 text-gray-900': !message.isUserInput,
                  })}>
                  <MarkdownLite text={message.text} />
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}