'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CreditCard,
  Send,
  Building,
  BadgePercent,
  FileText,
  Search,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { EmblaCarouselType, EmblaPluginType } from 'embla-carousel-react';
import { useCallback, useEffect, useState, useRef } from 'react';

export function Hero() {
  const heroSlides = [
    {
      id: 1,
      title: "Effortless Banking for India's boldest disruptors",
      tags: ['Powerful Automation', 'Smart Dashboard', 'Integrated Access'],
      image: PlaceHolderImages.find(p => p.id === 'hero-carousel-1'),
      cardImage: PlaceHolderImages.find(p => p.id === 'hero-card-1'),
      personName: 'Abhishek',
      personTitle: 'MYGATE FOUNDER',
    },
    {
      id: 2,
      title: 'Seamless Payroll for modern businesses',
      tags: ['Automated Compliance', 'Simple & Powerful', 'Happy Employees'],
      image: PlaceHolderImages.find(p => p.id === 'hero-carousel-2'),
      cardImage: PlaceHolderImages.find(p => p.id === 'hero-card-2'),
      personName: 'Jane Doe',
      personTitle: 'CEO, STARTUP INC.',
    },
    {
      id: 3,
      title: 'Global Payments, Simplified for you',
      tags: ['100+ Currencies', 'Low Fees', 'Easy Integration'],
      image: PlaceHolderImages.find(p => p.id === 'hero-carousel-3'),
      cardImage: PlaceHolderImages.find(p => p.id === 'hero-card-3'),
      personName: 'John Smith',
      personTitle: 'FOUNDER, E-COM GLOBAL',
    },
  ];

  const products = [
    { name: 'Accept Payments', icon: <CreditCard className="w-4 h-4 mr-2" /> },
    { name: 'Make Payouts', icon: <Send className="w-4 h-4 mr-2" /> },
    { name: 'Start Business Banking', icon: <Building className="w-4 h-4 mr-2" /> },
    { name: 'Get Credit', icon: <BadgePercent className="w-4 h-4 mr-2" /> },
    { name: 'Automate Payroll', icon: <FileText className="w-4 h-4 mr-2" /> },
    { name: 'Something else?', icon: <Search className="w-4 h-4 mr-2" /> },
  ];

  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const fadePlugin: EmblaPluginType = useCallback((emblaApi) => {
    const onSelect = () => {
      // Your onSelect logic here if needed
    };

    const onScroll = () => {
      if (!emblaApi) return;
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();

      const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
        let diffToTarget = scrollSnap - scrollProgress;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach(loopItem => {
            const target = loopItem.target();
            if (index === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }
        return 1 - Math.abs(diffToTarget);
      });
      setTweenValues(styles);
    };
    
    emblaApi.on('select', onSelect);
    emblaApi.on('scroll', onScroll);
    emblaApi.on('reInit', onScroll);
    // Initial call
    onScroll();
  }, []);
  
  const fadePluginRef = useRef(fadePlugin);

  return (
    <section className="relative bg-background overflow-hidden py-20">
      <Carousel
        setApi={setEmblaApi}
        opts={{
          loop: true,
        }}
        plugins={[fadePluginRef.current]}
        className="w-full"
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={slide.id} style={{
                ...(tweenValues[index] !== undefined && { opacity: tweenValues[index] })
              }}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="text-center lg:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                      {slide.title}
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      {slide.tags.join(' | ')}
                    </p>
                    <div className="flex items-center justify-center lg:justify-start space-x-4">
                      <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/signup">
                          Sign Up Now <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="link" asChild>
                        <Link href="#">Know More</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
                     <div className="absolute inset-0 bg-primary/10 -skew-y-6 transform-gpu rounded-3xl"></div>
                      {slide.image && (
                        <Image
                          src={slide.image.imageUrl}
                          alt={slide.personName}
                          width={300}
                          height={450}
                          className="relative z-10 object-cover rounded-md"
                          data-ai-hint={slide.image.imageHint}
                        />
                      )}
                      {slide.cardImage && (
                        <div className="absolute z-20 bottom-0 right-0 lg:-right-10 w-64">
                           <Image
                            src={slide.cardImage.imageUrl}
                            alt={`${slide.personName}'s company card`}
                            width={260}
                            height={320}
                            className="rounded-lg shadow-2xl"
                            data-ai-hint={slide.cardImage.imageHint}
                          />
                           <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-xs uppercase">{slide.personTitle}</p>
                            <p className="text-4xl font-bold font-serif">{slide.personName}</p>
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex" />
      </Carousel>
      <div className="bg-secondary/50 border-t border-border">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-muted-foreground mr-4 hidden md:inline">Looking for a product?</span>
             {products.map((product) => (
              <Button key={product.name} variant="ghost" className="text-muted-foreground hover:text-foreground">
                {product.icon}
                {product.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
