'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  CreditCard,
  Laptop,
  Smartphone,
  Store,
  Wallet,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export function AcceptPayments() {
  const [activeTab, setActiveTab] = useState('Top Products');

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
    { name: 'Pay using card', icon: <CreditCard className="w-5 h-5" /> },
    { name: 'UPI ID', icon: <span className="font-bold text-lg">▷</span> },
    { name: 'Net banking', icon: <Laptop className="w-5 h-5" /> },
    {
      name: 'EMI',
      icon: <CreditCard className="w-5 h-5" />,
      tag: 'NO COST EMI AVAILABLE',
    },
    { name: 'Wallet', icon: <Wallet className="w-5 h-5" /> },
  ];

  const products = [
    {
      id: 'payment-gateway',
      title: 'Payment Gateway',
      description: 'Offer a seamless payment experience on your website or app',
      image: PlaceHolderImages.find((p) => p.id === 'payment-gateway'),
      content: (
        <div className="p-4 space-y-3">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className="flex items-center justify-between p-3 rounded-md bg-background"
            >
              <div className="flex items-center gap-3">
                {method.icon}
                <span className="font-medium">{method.name}</span>
                {method.tag && (
                  <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded">
                    {method.tag}
                  </span>
                )}
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'payment-button',
      title: 'Payment Button',
      description: 'Effortlessly add a Pay Now button without any coding required.',
      image: PlaceHolderImages.find((p) => p.id === 'payment-button'),
      badge: 'NO CODE',
      actions: (
        <div className="flex items-center space-x-2">
          <Button>
            Sign up Now <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="link">Know More</Button>
        </div>
      ),
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
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Accept Payments</h2>
        </div>

        <div className="border-b mb-8 overflow-x-auto">
          <div className="flex space-x-8 whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'pb-3 border-b-2 text-muted-foreground',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden flex flex-col group"
            >
              <CardContent className="p-0 flex-grow">
                <div className="bg-muted/40 p-4 min-h-[250px] relative flex items-center justify-center">
                  {product.image && (
                    <Image
                      src={product.image.imageUrl}
                      alt={product.title}
                      width={product.id === 'razorpay-pos' ? 200 : 250}
                      height={200}
                      className={cn(
                        'object-contain transition-transform duration-300 group-hover:scale-105',
                         product.id === 'razorpay-pos' ? "w-[150px]" : "w-auto"
                      )}
                       data-ai-hint={product.image.imageHint}
                    />
                  )}
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold">
                      {product.badge}
                    </div>
                  )}
                   {product.id === 'razorpay-pos' && (
                     <Button variant="secondary" size="icon" className="absolute right-4 bottom-4 rounded-full h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity">
                       <ChevronRight />
                     </Button>
                   )}
                </div>
                 {product.content ? (
                  product.content
                ) : (
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>
                    {product.actions}
                  </div>
                )}
                 {product.id === 'payment-gateway' && (
                   <div className="p-6 border-t">
                      <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {product.description}
                      </p>
                   </div>
                 )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
