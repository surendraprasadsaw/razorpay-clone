'use client';

import { cn } from '@/lib/utils';
import React from 'react';

const logos = [
  {
    name: 'Unacademy',
    logo: (
      <svg fill="currentColor" viewBox="0 0 114 26" className="h-5 w-auto">
        <path d="M68.21 2.9C65.57 2.9 63 4.7 63 7.53v15.5c0 .72.63 1.08 1.26 1.08.63 0 1.26-.36 1.26-1.08v-2.34c.36 1.08 2.07 2.61 4.5 2.61 4.23 0 7.83-3.6 7.83-8.73 0-5.22-3.6-8.73-7.84-8.73zM70.3 15.32c0 2.97-1.8 4.5-4.05 4.5-2.25 0-4.05-1.53-4.05-4.5s1.8-4.5 4.05-4.5c2.25 0 4.05 1.53 4.05 4.5zM83.47 23.03c-2.88 0-4.86-1.89-4.86-4.59v-2.25h9.72v-1.8c0-3.96-2.25-6.12-5.49-6.12-3.6 0-5.94 2.88-5.94 6.39 0 3.6 2.43 6.39 6.21 6.39 2.16 0 4.23-.9 5.4-2.25l-.9-.9c-1.08.9-2.61 1.44-4.14 1.44zm.63-9.99h-5.4c.18-1.8 1.62-2.97 3-2.97 1.26 0 2.25.99 2.4 2.97zM113.55 9.02a.9.9 0 0 0-1.26 0l-3.6 3.69v-3.6h-1.62v13.6h1.62v-7.2l3.42-3.6a.9.9 0 0 0 .18-.71.9.9 0 0 0-.36-.58zM102.54 23.03c-2.88 0-4.86-1.89-4.86-4.59v-2.25h9.72v-1.8c0-3.96-2.25-6.12-5.49-6.12-3.6 0-5.94 2.88-5.94 6.39 0 3.6 2.43 6.39 6.21 6.39 2.16 0 4.23-.9 5.4-2.25l-.9-.9c-1.08.9-2.61 1.44-4.14 1.44zm.63-9.99h-5.4c.18-1.8 1.62-2.97 3-2.97 1.26 0 2.25.99 2.4 2.97zM24.77 15.14c0 3.6-2.52 5.94-5.94 5.94s-5.94-2.34-5.94-5.94c0-3.6 2.52-5.94 5.94-5.94s5.94 2.34 5.94 5.94zm-10.26 0c0 2.7 1.71 4.5 4.32 4.5s4.32-1.8 4.32-4.5-1.71-4.5-4.32-4.5-4.32 1.8-4.32 4.5zM42.42 21.08V9.38h-1.62v11.7zm-1.17-14.4c.9 0 1.53-.63 1.53-1.53s-.63-1.53-1.53-1.53c-.9 0-1.53.63-1.53 1.53s.63 1.53 1.53 1.53zM58.71 21.08h-1.62V3.26h1.62v17.82zM52.05 21.08h-1.62l-4.5-6.03v6.03h-1.62V3.26h1.62l4.5 6.03V3.26h1.62v17.82zM33.87 21.08h1.62v-7.2l3.42-3.6a.9.9 0 0 0 .18-.71.9.9 0 0 0-1.44-.58l-3.6 3.69V3.26h-1.62v13.6h1.44zM10.82 2.9H0v1.62h10.82z M5.42 21.08H3.8V8.6h1.62v12.48zM8.12 14.84a3.15 3.15 0 0 1-2.7-3.15c0-1.8 1.17-3.24 3-3.24 1.53 0 2.52 1.08 2.52 2.52v.99h-3.96c.09 1.17.99 1.8 1.89 1.8.9 0 1.44-.36 1.8-.72l.9.81c-.54.63-1.44 1.08-2.43 1.08a3.15 3.15 0 0 1-3.03-3.06zM7.85 10.4c-.09-1.08-.81-1.62-1.62-1.62-.99 0-1.71.72-1.8 1.62h3.42z"></path>
      </svg>
    ),
  },
  {
    name: 'PaisaBazaar',
    logo: <span className="font-serif text-xl">paisabazaar<span className="text-xs">.com</span></span>
  },
  {
    name: 'Nykaa',
    logo: (
      <svg fill="none" viewBox="0 0 100 30" className="h-6 w-auto text-gray-500">
        <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="currentColor">NYKAA</text>
      </svg>
    )
  },
  {
    name: 'Zerodha',
    logo: (
      <svg fill="currentColor" viewBox="0 0 120 25" className="h-4 w-auto">
        <path d="M11.75 14.9a7.45 7.45 0 1 1-1.3-4.31 7.45 7.45 0 0 1 1.3 4.31zM4.3 14.9a7.45 7.45 0 1 0 1.3-4.31 7.45 7.45 0 0 0-1.3 4.31z"></path>
        <path d="M22.95 24.5h3.92V0h-3.92v24.5zM40.23 19.38L33.7 12.3l6.53-7.07h-4.73L30.8 9.98l-4.7-4.75h-4.7l6.52 7.07-6.52 7.23h4.73l4.7-4.75 4.7 4.75h4.73zM57.64 24.5h3.92v-8.32l-5.69-5.17h6.6V0h-3.92v6.07l5.69 5.17h-6.6V24.5zM80.03 24.5h14.2v-3.48h-10.2v-6.9h9.1v-3.48h-9.1V3.48h10.5V0h-14.5v24.5h.3zM100.2 24.5h3.92V0h-3.92v24.5zM119.85 12.25a12.25 12.25 0 1 1-24.5 0 12.25 12.25 0 0 1 24.5 0zM107.6 12.25a4.44 4.44 0 1 0 8.88 0 4.44 4.44 0 0 0-8.88 0z"></path>
      </svg>
    )
  },
  {
    name: 'Goibibo',
    logo: <span className="font-sans text-xl font-bold text-blue-600">goibibo</span>
  },
  {
    name: 'Cure.fit',
    logo: (
       <svg fill="currentColor" viewBox="0 0 85 24" className="h-5 w-auto">
        <path d="M4.93 23.95c-1.34 0-2.5-.4-3.5-1.19l.71-.97c.88.66 1.9.99 2.93.99 1.32 0 2.1-.53 2.1-1.36v-.02c0-.77-.55-1.18-2.3-1.63L5.1 19c-2.38-.6-3.9-1.9-3.9-4.2 0-2.37 1.8-4.14 4.52-4.14 1.25 0 2.36.35 3.32 1.04l-.7.97c-.83-.6-1.8-.9-2.77-.9-1.18 0-1.8.5-1.8 1.2v.01c0 .7.5 1.08 2.18 1.5l2.76.7c2.6.62 4.14 1.96 4.14 4.3 0 2.4-1.87 4.2-4.83 4.2zM21.2 11.23h-4.3V24h-1.93V11.23h-4.3V9.5h10.52v1.73zM34.84 24h-1.92l-4.44-7.5v7.5h-1.92V9.5h1.92l4.44 7.5V9.5h1.92V24zM47.78 19.34c0 2.94-2.18 4.9-5.32 4.9-3.14 0-5.32-1.96-5.32-4.9s2.18-4.9 5.32-4.9c3.14 0 5.32 1.96 5.32 4.9zm-8.72 0c0 1.9 1.4 3.2 3.4 3.2s3.4-1.3 3.4-3.2-1.4-3.2-3.4-3.2-3.4 1.3-3.4 3.2zM52.26 9.5l4.88 11.82L62 9.5h2.1l-6.1 14.5h-1.87L50.1 9.5h2.16zM69.04 11.13c-1.63 0-2.7.9-3.1 1.9h-.03v-1.68h-1.8v12.4h1.92v-6.96c0-1.54.8-2.72 2.22-2.72.3 0 .56.03.8.08v-1.86a2.8 2.8 0 0 0-.9-3.14zM71.74 24v-8.9c0-2.8-1.5-4.38-4-4.38s-4 1.57-4 4.38V24h-1.93V14.9c0-3.6 2-5.9 5.8-5.9s5.8 2.3 5.8 5.9V24h-1.67zM84.34 24h-1.92V11.24h-2.9v-1.73h7.72v1.73h-2.9V24z"></path>
      </svg>
    )
  },
  {
    name: 'ClearTax',
    logo: <span className="font-sans text-xl font-semibold">Clear<span className="font-light">Tax</span></span>
  },
  {
    name: 'BookMyShow',
    logo: (
      <svg fill="currentColor" viewBox="0 0 100 20" className="h-5 w-auto">
        <text x="0" y="15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">book</text>
        <text x="40" y="15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#F84464">my</text>
        <text x="65" y="15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">show</text>
      </svg>
    )
  },
];

export function ClientLogos() {
  return (
    <div className="relative w-full py-12 bg-background overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="text-sm font-semibold uppercase text-muted-foreground tracking-wider">
          Trusted by the best companies in India
        </h3>
      </div>
      <div
        className="flex animate-scroll"
        style={{ animationDuration: '10s' }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-6 flex items-center justify-center text-gray-500" style={{ minWidth: '120px' }}>
            {logo.logo}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}</style>
    </div>
  );
}
