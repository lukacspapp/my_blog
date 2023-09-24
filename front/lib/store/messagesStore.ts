import { create } from 'zustand';
import uuid from 'react-uuid';
import { Message } from '../../lib/validator/message';
import { timeOfDay } from '../../lib/date';
import { useUserStore } from '../../lib/store/userStore';

type State = {
  messages: Message[];
  isMessageUpdating: boolean;
  addMessage: (message: Message) => void;
  addMessages: (messages: Message[]) => void;
  removeMessage: (id: string) => void;
  updateMessage: (id: string, updateFn: (prevText: string) => string) => void;
  setMessages: (messages: Message[]) => void;
  setIsMessageUpdating: (isUpdating: boolean) => void;
};

export const useMessagesStore = create<State>((set) => ({
  messages: [],
  isMessageUpdating: false,
  addMessage: (message: Message) => set((state) => ({ messages: [...state.messages, message] })),
  addMessages: (messages: Message[]) => set((state) => ({ messages: [...state.messages, ...messages] })),
  removeMessage: (id: string) => set((state) => ({ messages: state.messages.filter((message) => message.id !== id) })),
  updateMessage: (id: string, updateFn: (prevText: string) => string) => set((state) => ({
    messages: state.messages.map((message) => (message.id === id ? { ...message, text: updateFn(message.text) } : message)),
  })),
  setMessages: (messages: Message[]) => set(() => ({ messages })),
  setIsMessageUpdating: (isUpdating: boolean) => set(() => ({ isMessageUpdating: isUpdating })),
}));
