
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
    <div className="container text-center py-20">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        The all in one <span className="text-accent">finance platform</span>
        <br />
        you've been looking for
      </h2>
      <div className="mt-8 flex items-center justify-center flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
        <span>With Razorpay, you can:</span>
        <div className="h-6 border-l border-border hidden sm:block"></div>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="font-medium text-primary hover:underline"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
