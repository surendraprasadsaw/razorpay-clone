'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const testimonials = [
    {
      id: 'anusree-goenka',
      name: 'Anusree Goenka',
      title: 'Co-founder, Spark Studio',
      image: PlaceHolderImages.find((p) => p.id === 'testimonial-anusree'),
      quote:
        'Razorpay has been a game-changer for us. The integration was seamless, and the platform is incredibly user-friendly.',
      size: 'large',
    },
    {
      id: 'nischay-ag',
      name: 'Nischay AG',
      title: 'Co-founder, Jar',
      image: PlaceHolderImages.find((p) => p.id === 'testimonial-nischay'),
      quote:
        'RazorpayX works for most of our needs - be it our salaries, be it our compliance, be it our payments to vendors And the biggest headache of all OTPs went away.',
      size: 'large',
    },
    {
      id: 'durlabh-rawat',
      name: 'Durlabh Rawat',
      title: 'Founder, Barosi',
      image: PlaceHolderImages.find((p) => p.id === 'testimonial-durlabh'),
      quote: 'The dashboard is very intuitive and provides all the necessary data at a glance. It has made our accounting much simpler.',
      size: 'large',
    },
    {
      id: 'nikita-gujral',
      name: 'Nikita Gujral',
      title: 'Founder, AN Fashions',
      image: PlaceHolderImages.find((p) => p.id === 'testimonial-nikita'),
      quote: 'Accepting international payments has never been easier. Razorpay has helped us expand our business globally.',
      size: 'large',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-secondary/30 overflow-hidden">
      <div className="container max-w-7xl">
        <div className="md:flex justify-between items-center mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
            Razorpay grows with <span className="text-primary">you!</span>
          </h2>
          <div className="text-center md:text-right">
            <p className="font-bold text-lg">1,50,000+ Businesses</p>
            <Button variant="link" className="text-primary p-0 h-auto">
              View all case studies <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="flex animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={`${testimonial.id}-${index}`}
                className={cn(
                  'flex-shrink-0 rounded-xl overflow-hidden group flex flex-col mx-4',
                  testimonial.size === 'large' ? 'w-[300px]' : 'w-[320px]'
                )}
              >
                <CardContent className="p-0 h-full flex flex-col">
                  {testimonial.image ? (
                    <div className="relative h-[400px] flex-grow">
                      <Image
                        src={testimonial.image.imageUrl}
                        alt={testimonial.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        data-ai-hint={testimonial.image.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <p className="font-bold text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full bg-card flex flex-col justify-center text-center p-8 flex-grow">
                      <blockquote className="text-lg font-medium mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex-grow flex flex-col items-center justify-center">
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.title}
                        </p>
                      </div>
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
