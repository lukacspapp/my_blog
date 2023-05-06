'use client'

type Props = {}

export default function ChatHeader({}: Props) {
  return (
    <div className='w-full flex gap-3 justify-start items-center dark:text-white'>
      <div className='flex flex-col text-sm items-start'>
        <p className="text-sm">
          Chat With
        </p>
        <div className="flex gap-1.5 items-center">
          <p className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
          <p className="font-medium"> Me</p>
        </div>
      </div>
    </div>
  )
}