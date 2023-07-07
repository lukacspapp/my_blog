import { nanoid } from 'nanoid'
import { createContext, useState } from 'react'
import { Message } from '../lib/validator/message'
import { useSession } from 'next-auth/react'
import { timeOfDay } from '../lib/date'

const defaultValue = [
  {
    id: nanoid(),
    text: 'Hello, Ask me something?',
    isUserInput: false,
  },
]
export const MessagesContext = createContext<{
  messages: Message[]
  isMessageUpdating: boolean
  addMessage: (message: Message) => void
  removeMessage: (id: string) => void
  updateMessage: (id: string, updateFn: (prevText: string) => string) => void
  setIsMessageUpdating: (isUpdating: boolean) => void
}>({
  messages: [],
  isMessageUpdating: false,
  addMessage: () => {},
  removeMessage: () => {},
  updateMessage: () => {},
  setIsMessageUpdating: () => {},
})

export function MessagesProvider({ children }: { children: React.ReactNode }) {

  const {data: session} = useSession()

  const name = session ? session.user?.name : null
  const formattedName = name ? name.split(' ')[0] : null

  if (formattedName) {
    defaultValue[0].text = `Good ${timeOfDay()} ${formattedName}, Ask me something?`
  }

  const [messages, setMessages] = useState(defaultValue)
  const [isMessageUpdating, setIsMessageUpdating] = useState<boolean>(false)

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message])
  }

  const removeMessage = (id: string) => {
    setMessages((prev) => prev.filter((message) => message.id !== id))
  }

  const updateMessage = (
    id: string,
    updateFn: (prevText: string) => string
  ) => {
    setMessages((prev) =>
      prev.map((message) => {
        if (message.id === id) {
          return { ...message, text: updateFn(message.text) }
        }
        return message
      })
    )
  }

  return (
    <MessagesContext.Provider
      value={{
        messages,
        isMessageUpdating,
        addMessage,
        removeMessage,
        updateMessage,
        setIsMessageUpdating,
      }}>
      {children}
    </MessagesContext.Provider>
  )
}