'use client';

import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { AuthButton } from '@/components/auth/AuthButton';
import { Button } from '../ui/button';

export function Header() {
  const navLinks = [
    { name: 'Payments', href: '#' },
    { name: 'Banking+', href: '#' },
    { name: 'Payroll', href: '#' },
    { name: 'Engage', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Pricing', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <AuthButton />
        </div>
      </div>
    </header>
  );
}
