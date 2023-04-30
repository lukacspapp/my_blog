'use client'

import TextareaAutosize from 'react-textarea-autosize';
import { cn } from "../../lib/utils";

interface ChatInputProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ChatInput({ className, ...props }: ChatInputProps) {
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
          maxRows={4}
          autoFocus
          placeholder='Type a message...'
        />
      </div>
    </div>
  )
}
// ! Left at 36:53