import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  // To have a logged-in experience for development, you can return a mock user here.
  // For example:
  // return {
  //   user: {
  //     uid: 'mock-user-id',
  //     email: 'test@example.com',
  //     displayName: 'Test User',
  //     photoURL: 'https://placehold.co/40x40'
  //   },
  //   loading: false
  // };

  return context;
};
