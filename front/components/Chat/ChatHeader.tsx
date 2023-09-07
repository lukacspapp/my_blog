'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useLoadingErrorStore } from "../../lib/store/loadingErrorStore"
import { useEffect, useState } from "react"

export default function ChatHeader({ prompts }) {

  const supabase = createClientComponentClient()
  const [msg, setMsg] = useState(prompts)

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
    <div className='w-full flex gap-3 justify-start items-center dark:text-white'>
      <div className='flex flex-col text-sm items-start'>
        <div className="flex gap-1.5 items-center">
          <p className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
          <p className="font-medium"> Me</p>
        </div>
        <div
          className='flex gap-1.5 items-center'
        >
          you have {10 - msg.filter(m => m.isUserInput).length} prompts left
        </div>
      </div>
    </div>
  )
}