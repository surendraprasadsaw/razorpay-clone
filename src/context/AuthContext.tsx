'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';

// Mock User type, you can expand this if needed
type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We'll simulate loading and then set a mock user
    // To have a logged-out experience by default, set the user to null
    const timer = setTimeout(() => {
      // To simulate a logged-in user:
      // setUser({
      //   uid: 'mock-user-id',
      //   email: 'test@example.com',
      //   displayName: 'Test User',
      //   photoURL: null,
      // });
      setUser(null); // Simulate a logged-out state
      setLoading(false);
    }, 500); // 500ms delay to simulate async operation

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
