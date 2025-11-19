'use client';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Header } from '@/components/landing/Header';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="container flex h-14 items-center">
          <Skeleton className="h-8 w-28" />
          <div className="flex-grow" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <div className="flex flex-col items-center justify-center flex-grow p-4">
          <Skeleton className="h-48 w-full max-w-md" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-8">
        {children}
      </main>
    </div>
  );
}
