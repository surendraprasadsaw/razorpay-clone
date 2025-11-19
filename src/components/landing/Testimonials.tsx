'use client';
import Image from 'next/image';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function Testimonials() {
    const testimonials = [
        {
          id: 'anusree-goenka',
          name: 'Anusree Goenka',
          title: 'Co-founder, Spark Studio',
          image: PlaceHolderImages.find(p => p.id === 'testimonial-anusree'),
          quote: null,
          size: 'large'
        },
        {
          id: 'nischay-ag',
          name: 'Nischay AG',
          title: 'Co-founder, Jar',
          image: null,
          quote: 'RazorpayX works for most of our needs - be it our salaries, be it our compliance, be it our payments to vendors And the biggest headache of all OTPs went away.',
          size: 'medium'
        },
        {
          id: 'aditya-shankar',
          name: 'Aditya Shankar',
          title: 'Co-founder, Doubtnut',
          image: PlaceHolderImages.find(p => p.id === 'testimonial-aditya'),
          quote: null,
          size: 'large'
        },
        {
          id: 'neha-tandon',
          name: 'Neha Tandon Sharma',
          title: 'Founder, Isadora Life',
          image: PlaceHolderImages.find(p => p.id === 'testimonial-neha'),
          quote: null,
          size: 'large'
        },
        {
          id: 'durlabh-rawat',
          name: 'Durlabh Rawat',
          title: 'Founder, Barosi',
          image: PlaceHolderImages.find(p => p.id === 'testimonial-durlabh'),
          quote: null,
          size: 'large'
        },
        {
          id: 'nikita-gujral',
          name: 'Nikita Gujral',
          title: 'Founder, AN Fashions',
          image: PlaceHolderImages.find(p => p.id === 'testimonial-nikita'),
          quote: null,
          size: 'large'
        }
      ];

  return (
    <section className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Razorpay grows with <span className="text-primary">you!</span>
          </h2>
          <div className="text-right">
            <p className="font-bold text-lg">1,50,000+ Businesses</p>
            <Button variant="link" className="text-primary p-0 h-auto">
              View all case studies <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-8 -m-4 p-4 no-scrollbar">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className={cn(
                  'flex-shrink-0 rounded-xl overflow-hidden group',
                  testimonial.size === 'large' ? 'w-[300px]' : 'w-[320px]'
                )}
              >
                <CardContent className="p-0">
                  {testimonial.image ? (
                    <div className="relative h-[400px]">
                      <Image
                        src={testimonial.image.imageUrl}
                        alt={testimonial.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        data-ai-hint={testimonial.image.imageHint}
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                       <div className="absolute bottom-0 left-0 p-6 text-white">
                         <p className="font-bold text-lg">{testimonial.name}</p>
                         <p className="text-sm">{testimonial.title}</p>
                       </div>
                    </div>
                  ) : (
                    <div className="h-[400px] bg-card flex flex-col justify-center p-8">
                       <blockquote className="text-lg font-medium mb-6">
                        "{testimonial.quote}"
                       </blockquote>
                       <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                       </div>
                    </div>
                  )}
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