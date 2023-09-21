import { create } from 'zustand'

type State = {
  user: any | null;
  setUser: (user: any | null) => void;
  logout: () => void;
}

export const useUserStore = create<State>((set) => ({
  user: null,
  setUser: (user: any | null) => set({ user }),
  logout: () => set({ user: null }),
}))