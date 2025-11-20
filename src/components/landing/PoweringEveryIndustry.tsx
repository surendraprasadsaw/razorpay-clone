
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  GraduationCap,
  MessageSquareMore,
  BriefcaseMedical,
  FileCode,
  ShoppingBag as ShoppingBagIcon,
  ArrowRight,
  BookOpen,
  Landmark,
  Code,
  Briefcase,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function PoweringEveryIndustry() {
  const [activeTab, setActiveTab] = useState('');
  const image = PlaceHolderImages.find((p) => p.id === 'powering-ecommerce');

  const industries = [
    {
      name: 'E-Commerce',
      icon: <ShoppingBagIcon className="w-5 h-5 mr-2" />,
    },
    {
      name: 'Education',
      icon: <BookOpen className="w-5 h-5 mr-2" />,
    },
    {
      name: 'BFSI',
      icon: <Landmark className="w-5 h-5 mr-2" />,
    },
    {
      name: 'SaaS',
      icon: <Code className="w-5 h-5 mr-2" />,
    },
    {
      name: 'Freelancer',
      icon: <Briefcase className="w-5 h-5 mr-2" />,
    },
  ];

  const icons = [
    <GraduationCap key="graduation" className="w-6 h-6" />,
    <MessageSquareMore key="message" className="w-6 h-6" />,
    <BriefcaseMedical key="medical" className="w-6 h-6" />,
    <FileCode key="code" className="w-6 h-6" />,
    <ShoppingBagIcon key="shopping" className="w-6 h-6" />,
  ];

  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    // This hook is to prevent hydration errors with state.
    // Initialize state on the client side.
    setActiveTab('E-Commerce');
    
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [icons.length]);


  const clientLogos = [
    { name: 'Nykaa', logo: <span className="font-bold text-lg">NYKAA</span> },
    {
      name: 'Decathlon',
      logo: <span className="font-bold text-lg text-blue-600">DECATHLON</span>,
    },
    {
      name: 'Zomato',
      logo: <span className="font-bold text-lg text-red-500">zomato</span>,
    },
    {
      name: 'Flipkart',
      logo: (
        <span className="font-bold text-lg italic text-yellow-500">
          Flipkart
        </span>
      ),
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Powering every industry.
              <br />
              Powering all disruptors.
            </h2>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-muted-foreground">
            {icons.map((icon, index) => (
               <div key={index} className={cn('transition-opacity duration-300', currentIconIndex === index ? 'opacity-100' : 'opacity-25')}>
                {icon}
               </div>
            ))}
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 mb-8">
            {industries.map((industry) => (
              <TabsTrigger key={industry.name} value={industry.name}>
                {industry.icon}
                {industry.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="E-Commerce">
            <div className="relative rounded-lg overflow-hidden min-h-[500px] flex items-center">
              {image && (
                <Image
                  src={image.imageUrl}
                  alt="E-commerce business"
                  fill
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

              <div className="relative z-10 p-8 md:p-12 max-w-lg text-white">
                <h3 className="text-4xl font-bold mb-4">
                  Empower your <br />
                  <span className="text-accent">e-commerce business</span>
                </h3>
                <p className="text-lg text-gray-300 mb-8">
                  Streamline payment management with a unified dashboard,
                  enabling both online and in-person payment collection while
                  enhancing conversion rates and minimizing fraud.
                </p>
                <div className="flex items-center space-x-6 mb-8 text-gray-300">
                  {clientLogos.map((client) => (
                    <div key={client.name} className="h-6 flex items-center">
                      {client.logo}
                    </div>
                  ))}
                  <span className="text-sm">+ 70,000 others</span>
                </div>
                <Button size="lg" asChild>
                  <Link href="#">
                    See Solutions <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          {industries
            .filter((i) => i.name !== 'E-Commerce')
            .map((industry) => (
              <TabsContent key={industry.name} value={industry.name}>
                <div className="text-center py-20 border rounded-lg">
                  <h3 className="text-2xl font-semibold">
                    Content for {industry.name}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Details coming soon.
                  </p>
                </div>
              </TabsContent>
            ))}
        </Tabs>
      </div>
    </section>
  );
}
