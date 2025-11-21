'use client';

import Link from 'next/link';
import { AuthButton } from '@/components/auth/AuthButton';
import { Button } from '../ui/button';
import { InternationalPaymentsBanner } from './InternationalPaymentsBanner';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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
        <div className="mr-4 flex items-center">
          <Link href="/" className="font-bold text-xl">Razor Pay</Link>
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
          <div className="hidden md:flex">
            <AuthButton />
          </div>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="p-4">
                <div className="mb-8 block">
                  <Link href="/" className="font-bold text-xl">Razor Pay</Link>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map(link => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsSheetOpen(false)}
                      className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 border-t pt-6">
                  <AuthButton />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <InternationalPaymentsBanner />
    </header>
  );
}
