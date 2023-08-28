import { AuthError } from '@supabase/supabase-js';
import { error } from 'console';
import { create } from 'zustand'

type State = {
  loading: boolean,
  error: null | AuthError;
  setLoading: (loading: boolean) => void;
  setError: (error: null | AuthError) => void;
}

export const useLoadingErrorStore = create<State>((set) => ({
  loading: false,
  error: null,
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: null | AuthError) => set({ error })
}))