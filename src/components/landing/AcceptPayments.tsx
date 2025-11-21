
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  CreditCard,
  Laptop,
  Wallet,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function AcceptPayments() {
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setActiveTab('Top Products');
  }, []);

  const tabs = [
    'Top Products',
    'On Website/App',
    'Plugins',
    'On Social Media',
    'In-Store',
    'Cross-Border',
    'With Smart Ad-Ons',
  ];

  const paymentMethods = [
    { name: 'Pay using card', icon: <CreditCard className="w-5 h-5 text-green-600" /> },
    { name: 'UPI ID', icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.73013 15.82L3.63013 12.72L6.73013 9.62001L8.15013 11.04L6.47013 12.72L8.15013 14.4L6.73013 15.82Z"
            fill="#38A169"
          />
          <path
            d="M11.92 15.5L10.5 14.08L16.86 7.72001H14.1V5.80001H20.4V12.1H18.48V9.38001L11.92 15.5Z"
            fill="#38A169"
          />
        </svg>
      )
    },
    { name: 'Net banking', icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 20H22V22H2V20ZM4 10H8V17H4V10ZM10 10H14V17H10V10ZM22 8.5L12 3L2 8.5V9.5H22V8.5ZM16 10H20V17H16V10Z"
            fill="#38A169"
          />
        </svg>
      )
    },
    {
      name: 'EMI',
      icon: <CreditCard className="w-5 h-5 text-green-600" />,
      tag: 'NO COST EMI AVAILABLE',
    },
    { name: 'Wallet', icon: <Wallet className="w-5 h-5 text-green-600" /> },
  ];

  const products = [
    {
      id: 'payment-gateway',
      title: 'Payment Gateway',
      description: 'Offer a seamless payment experience on your website or app',
      image: PlaceHolderImages.find((p) => p.id === 'payment-gateway'),
      content: (
        <>
          <div className="p-4 space-y-3">
            {paymentMethods.map((method, index) => (
              <div
                key={method.name}
                className={cn("flex items-center justify-between p-3 rounded-md bg-background", index === 1 ? "bg-blue-50 dark:bg-blue-900/20" : "")}
              >
                <div className="flex items-center gap-3">
                  {method.icon}
                  <span className="font-medium text-sm">{method.name}</span>
                  {method.tag && (
                    <span className="text-xs font-bold text-green-800 bg-green-100 px-2 py-0.5 rounded-sm">
                      {method.tag}
                    </span>
                  )}
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      id: 'payment-button',
      title: 'Payment Button',
      description: 'Effortlessly add a Pay Now button without any coding required.',
      image: PlaceHolderImages.find((p) => p.id === 'payment-button'),
      badge: 'NO CODE',
    },
    {
      id: 'payment-links',
      title: 'Payment Links',
      description: 'Create and share links over email, text and social to accept payments instantly',
      image: PlaceHolderImages.find((p) => p.id === 'payment-links'),
      badge: 'NO CODE',
    },
    {
      id: 'razorpay-pos',
      title: 'Razorpay POS',
      description: "Accept seamless in-store payments with India's best POS solution",
      image: PlaceHolderImages.find((p) => p.id === 'razorpay-pos'),
      badge: 'Seamless In-Store Payments',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-secondary/30 flex justify-center">
      <div className="container max-w-7xl">
        <div className="p-4 md:p-8 border rounded-lg bg-card">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">Accept Payments</h2>
          </div>

          <div className="border-b mb-8 overflow-x-auto no-scrollbar">
            <div className="flex space-x-4 sm:space-x-8 whitespace-nowrap px-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'pb-3 border-b-2 text-muted-foreground text-sm sm:text-base',
                    activeTab === tab
                      ? 'border-accent text-accent'
                      : 'border-transparent'
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden flex flex-col group h-full text-center"
              >
                <CardContent className="p-0 flex-grow flex flex-col">
                  <div className="bg-muted/40 p-4 min-h-[180px] relative flex items-center justify-center">
                    {product.image && (
                      <Image
                        src={product.image.imageUrl}
                        alt={product.title}
                        width={product.id === 'razorpay-pos' ? 120 : 200}
                        height={150}
                        className={cn(
                          'object-contain transition-transform duration-300 group-hover:scale-105',
                          product.id === 'razorpay-pos' ? "w-[120px]" : "w-auto"
                        )}
                        data-ai-hint={product.image.imageHint}
                      />
                    )}
                    {product.badge && (
                      <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold">
                        {product.badge}
                      </div>
                    )}
                    {product.id === 'razorpay-pos' && (
                       <Button asChild variant="secondary" size="icon" className="absolute right-2 bottom-2 rounded-full h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                         <Link href="#">
                            <ChevronRight className='w-4 h-4' />
                         </Link>
                       </Button>
                    )}
                  </div>
                  <div className="flex flex-col flex-grow p-4 items-center justify-center">
                    <h3 className="text-lg font-bold mb-1">{product.title}</h3>
                    <p className="text-muted-foreground text-xs mb-3 flex-grow">
                      {product.description}
                    </p>
                    {product.content ? (
                      <div className="mt-auto -mx-4 -mb-4 border-t w-full">{product.content}</div>
                    ) : (
                      <div className="mt-auto">
                        <Button variant="link" asChild className="p-0 h-auto text-primary">
                          <Link href="#">
                            Know More <ArrowRight className="ml-1 w-3 h-3" />
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
       <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
