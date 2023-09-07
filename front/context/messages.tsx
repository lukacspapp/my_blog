import uuid from 'react-uuid';
import { createContext, useState } from 'react'
import { Message } from '../lib/validator/message'
import { timeOfDay } from '../lib/date'
import { useUserStore } from '../lib/store/userStore';

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

export function MessagesProvider({ children, prompts, session }: { children: React.ReactNode, prompts: any, session: any }) {

  const userName = session.session.user.user_metadata.full_name.split(' ')[0]

  const greetingMessage = {
    id: uuid(),
    text: `Good ${timeOfDay()} ${userName}, Ask me anything!`,
    isUserInput: false,
  }

  const [messages, setMessages] = useState([
    greetingMessage,
    ...prompts,
  ])
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