'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AuthButton() {
  // Since authentication has been removed, we will always show the login/signup buttons.
  // The logic for a logged-in user has been removed.

  return (
    <div className="space-x-2">
      <Button asChild variant="ghost">
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
        <Link href="/signup">Sign Up</Link>
      </Button>
    </div>
  );
}
