'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useLoadingErrorStore } from "../../lib/store/loadingErrorStore"
import { useEffect, useState } from "react"

export default function ChatHeader({ prompts }) {

  const supabase = createClientComponentClient()
  const [msg, setMsg] = useState(prompts)

  const isPrompsLeft = msg.filter(m => m.isUserInput).length > 10

  async function getPrompts() {
    const { data: prompts , error } = await supabase
    .from('messages')
    .select('*')

    if (prompts) setMsg(prompts)
  }

  useEffect(() => {
    getPrompts()
  }, [prompts])

  return (
    <div className='w-full flex gap-3 justify-start items-center p-2 dark:text-white border-b-[1px] border-gray-500'>
      <div className='flex flex-col text-sm items-start'>
        <div className="flex gap-1.5 items-center">
          <button>
            Logout
          </button>
          <button>
            Delete
          </button>
        </div>
        <div
          className='flex gap-1.5 items-center'
        >
          {!isPrompsLeft ? (
            <span className='text-green-400'>
              {10 - msg.filter(m => m.isUserInput).length} prompts left
            </span>
          ) : (
            <span className='text-red-500'>
              You have no prompts left
            </span>
          )}
        </div>
      </div>
    </div>
  )
}