'use client'

import { useMutation } from '@tanstack/react-query';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { cn } from "../../lib/utils";

interface ChatInputProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ChatInput({ className, ...props }: ChatInputProps) {

  const [input, setInput] = useState<string>('')

  const { mutate, isLoading,  } = useMutation({
    mutationFn: async (message) => {
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: 'sanyika' })
      })

      return res.body
    },
    onSuccess: () => {
      console.log('====================================');
      console.log('success');
      console.log('====================================');
    }
  })


  return (
    <div
      {...props}
      className={cn('border-t border-zinc-300', className)}
    >
      <div className="relative mt-4 flex-1 overflow-hidden p-2 rounded-lg border-none outline-none">
        <TextareaAutosize
          className='peer rounded-lg disabled:opacity-50 pr-14 resize-none block w-full,
          border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm,
          sm:leading-6'
          rows={2}
          value={input}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()

              const message = {
                id: nanoid(),
                userInput: true,
                text: input,
              }
            }
          }}
          onChange={(e) => setInput(e.target.value)}
          maxRows={4}
          autoFocus
          placeholder='Type a message...'
        />
      </div>
    </div>
  )
}
// ! Left at 52:36