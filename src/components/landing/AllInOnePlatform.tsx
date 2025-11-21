
'use client';

import Link from 'next/link';

export function AllInOnePlatform() {
  const links = [
    { name: 'Accept Payments', href: '#' },
    { name: 'Make Payouts', href: '#' },
    { name: 'Start Business Banking', href: '#' },
    { name: 'Automate Payroll', href: '#' },
    { name: 'Get Credit & Loans', href: '#' },
  ];

  return (
    <div className="w-[60%] mx-auto text-center py-12 md:py-20">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight">
        The all in one <span className="text-accent">finance platform</span>
        <br className="hidden sm:block" />
        you've been looking for
      </h2>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-muted-foreground">
        <span className="mb-2 sm:mb-0">With Razorpay, you can:</span>
        <div className="h-6 border-l border-border hidden sm:block"></div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2">
            {links.map((link) => (
            <Link
                key={link.name}
                href={link.href}
                className="font-medium text-primary hover:underline text-sm sm:text-base"
            >
                {link.name}
            </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
