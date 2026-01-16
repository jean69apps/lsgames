import { create } from 'zustand'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

interface AuthState {
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  init: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: true,
  
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (data.session) {
      set({ user: data.user, session: data.session, loading: false })
    }
    
    return { error }
  },
  
  signOut: async () => {
    await supabase.auth.signOut()
    set({ user: null, session: null, loading: false })
  },
  
  init: async () => {
    try {
      set({ loading: true })
      
      // Get initial session
      const { data: { session }, error } = await supabase.auth.getSession()
      
      if (error) {
        console.warn('Erro ao obter sessão:', error)
        set({ session: null, user: null, loading: false })
      } else {
        set({ session, user: session?.user ?? null, loading: false })
      }
      
      // Listen for auth changes
      supabase.auth.onAuthStateChange((_event, session) => {
        set({ session, user: session?.user ?? null, loading: false })
      })
    } catch (error) {
      console.error('Erro ao inicializar auth:', error)
      set({ session: null, user: null, loading: false })
    }
  },
}))
