'use client'

import { useMutation } from '@tanstack/react-query';
import { CornerDownLeft, Loader2 } from 'lucide-react';
import uuid from 'react-uuid';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import TextareaAutosize from 'react-textarea-autosize';
import { cn } from "../../lib/utils";
import { Message } from '../../lib/validator/message';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useUserStore } from '../../lib/store/userStore';
import { useMessagesStore } from '../../lib/store/messagesStore';

interface ChatInputProps extends React.HTMLAttributes<HTMLDivElement> {
  getPrompts: () => void,
  prompts: Message[]
}

export default function ChatInput({ className, getPrompts, prompts, ...props }: ChatInputProps) {

  const user = useUserStore(state => state.user)
  const addMessage = useMessagesStore(state => state.addMessage)
  const removeMessage = useMessagesStore(state => state.removeMessage)
  const updateMessage = useMessagesStore(state => state.updateMessage)
  const setIsMessageUpdating = useMessagesStore(state => state.setIsMessageUpdating)
  const supabase = createClientComponentClient()
  const [msg, setMsg] = useState<string | null>(null)

  function sendChatMessage() {
    if (input.trim() === '') {
      setMsg('You need to type something')
    } else {
      const message: Message = {
        id: uuid(),
        isUserInput: true,
        text: input,
      };
      mutate(message);
      setMsg(null)
    }
  };

  async function addChatPromptToDb(message: Message) {

    const { id, isUserInput, text} = message;

    const { data, error } = await supabase
    .from('messages')
    .insert({
      id: id,
      created_at: new Date(),
      isUserInput: isUserInput,
      text: text,
      user_id: user?.user.id
    })

  }

  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [input, setInput] = useState<string>('')

  const { mutate, isLoading } = useMutation({
    mutationFn: async (message: Message) => {
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: [message], user: user.user })
      })

      if (!res.ok) throw new Error('Something went wrong')

      return res.body
    },
    onMutate: (message: Message) => {
      addMessage(message)
      addChatPromptToDb(message)
    },
    onSuccess: async (stream) => {

      if (!stream) throw new Error('No stream found')

      const id = uuid()

      const responseMessage: Message = {
        id: id,
        isUserInput: false,
        text: '',
      }

      addMessage(responseMessage)

      setIsMessageUpdating(true)

      const reader = stream.getReader()
      const decoder = new TextDecoder()
      let done = false
      let finishedResponse = '';


      while (!done) {
        const { value, done: isDone } = await reader.read()
        done = isDone
        const chunkValue = decoder.decode(value)

        updateMessage(id, (prev) => {
          const updatedText = prev + chunkValue;
          finishedResponse = updatedText;
          return updatedText
        })
      }

      const message: Message = {
        id: responseMessage.id,
        isUserInput: responseMessage.isUserInput,
        text: finishedResponse,
      }

      addChatPromptToDb(message)
      setInput('')
      setIsMessageUpdating(false)

      setTimeout(() => {
        textAreaRef.current?.focus()
      }, 10)
    },
    onError: (_,message) => {
      toast.error('Something went wrong')
      removeMessage(message.id)
      textAreaRef.current?.focus()
    }
  })



  return (
    <div {...props} className={cn('border-t border-gray-500 p-[2px]', className)}>
      <div className='relative m-1 flex-1 overflow-hidden rounded-lg border-none outline-none'>
        <TextareaAutosize
          ref={textAreaRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              sendChatMessage()
            }
          }}
          rows={2}
          maxRows={4}
          value={input}
          autoFocus
          disabled={isLoading}
          onChange={(e) => setInput(e.target.value)}
          placeholder={msg ? msg : 'Ask Me something...'}
          className='peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6'
        />
        <div className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5'>
          <kbd className='inline-flex items-center rounded border bg-white border-gray-200 px-1 font-sans text-xs text-gray-400'>
            {isLoading ? (
              <Loader2 className='w-3 h-3 animate-spin' />
            ) : (
              <CornerDownLeft
                className={cn(`w-3 h-3 ${input.trim() === '' ? 'text-gray-200 cursor-not-allowed dark:text-gray-300' : 'cursor-pointer text-gray-500 dark:text-gray-800 hover:text-gray-800 dark:hover:text-gray-600'}`)}
                onClick={sendChatMessage}
              />
            )}
          </kbd>
        </div>
        <div
          className='absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-[#fd9090] dark:peer-focus:border-[#382173]'
          aria-hidden='true'
        />
      </div>
    </div>
  )
}