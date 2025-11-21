'use client';
import { type ReactNode } from 'react';
import { Header } from '@/components/landing/Header';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  // Since the backend is removed, we no longer need to check for authentication.
  // The layout will simply render the header and its children.

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-8">
        {children}
      </main>
    </div>
  );
}
