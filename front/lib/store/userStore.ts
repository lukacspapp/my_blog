import { create } from 'zustand'
import { Session } from '@supabase/supabase-js';

type State = {
  user: Session | null;
  setUser: (user: Session) => void;
  logout: () => void;
}

export const useUserStore = create<State>((set) => ({
  user: null,
  setUser: (user: Session) => set({ user }),
  logout: () => set({ user: null }),
}))