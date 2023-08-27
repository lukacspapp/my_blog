import { error } from 'console';
import { create } from 'zustand'

type State = {
  loading: boolean,
  error: null | string;
  setLoading: (loading: boolean) => void;
  setError: (error: null | string) => void;
}

export const useLoadingErrorStore = create<State>((set) => ({
  loading: false,
  error: null,
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: null | string) => set({ error })
}))