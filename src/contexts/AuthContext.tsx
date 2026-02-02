import React, { createContext, useContext } from 'react';

/** Stub auth — no Supabase. Use for UI that expects useAuth(). */
interface AuthStub {
  user: null;
  isLoading: false;
  signIn: (email?: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const stub: AuthStub = {
  user: null,
  isLoading: false,
  signIn: async () => {},
  signOut: async () => {},
};

const AuthContext = createContext<AuthStub | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthContext.Provider value={stub}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthStub {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}
