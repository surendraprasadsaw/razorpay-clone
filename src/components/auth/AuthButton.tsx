'use client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getAuth, signOut } from 'firebase/auth';
import app from '@/lib/firebase/config';
import { useRouter } from 'next/navigation';

const auth = getAuth(app!);

export function AuthButton() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  if (loading) {
    return <Button variant="ghost" disabled>Loading...</Button>;
  }

  return (
    <div className="flex items-center gap-2">
      {user ? (
        <>
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <>
          <Button variant="ghost" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </>
      )}
    </div>
  );
}
