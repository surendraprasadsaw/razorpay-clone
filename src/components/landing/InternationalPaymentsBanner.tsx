'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function InternationalPaymentsBanner() {
  const currencies = ['£', '€', '$', '¥', 'A$', '₹'];

  return (
    <div className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-primary font-medium text-sm hidden sm:block">
              Accept International Payments
            </Link>
            <p className="hidden lg:block text-sm text-muted-foreground">
              Global cards, Apple Pay, bank transfers. Low fees, local support.
            </p>
          </div>
          <div className="flex items-center space-x-4">
             <Button asChild variant="secondary" size="sm" className="hidden sm:inline-flex bg-card">
              <Link href="/signup">Sign Up Now</Link>
            </Button>
            <div className="hidden sm:flex items-center space-x-2">
              {currencies.map((currency, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-card"
                >
                  <span className="text-sm font-medium text-muted-foreground">{currency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
