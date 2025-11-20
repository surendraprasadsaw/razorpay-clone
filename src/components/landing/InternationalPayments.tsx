
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function InternationalPayments() {
  const image = PlaceHolderImages.find(p => p.id === 'international-payments');

  return (
    <div className="container py-20">
      <div className="relative rounded-2xl overflow-hidden">
        {image && (
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-white text-center p-12 md:p-24">
          <h2 className="text-4xl md:text-5xl font-bold">
            Accept payments in 130+ currencies.
            <br />
            Go global today!
          </h2>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#">Accept International Payments</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
