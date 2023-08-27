import { create } from 'zustand'
import { User } from '../../types/userType'

type State = {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<State>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  logout: () => set({ user: null }),
}))