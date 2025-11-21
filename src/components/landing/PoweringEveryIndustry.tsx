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
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  const poweringEcommerceImage = PlaceHolderImages.find((p) => p.id === 'powering-ecommerce');
  const poweringEducationImage = PlaceHolderImages.find((p) => p.id === 'powering-education');


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

  useEffect(() => {
    setActiveTab('E-Commerce');
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);


  const eCommerceClientLogos = [
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

    const educationClientLogos = [
    { name: 'Unacademy', logo: (
      <svg fill="currentColor" viewBox="0 0 114 26" className="h-4 w-auto">
        <path d="M68.21 2.9C65.57 2.9 63 4.7 63 7.53v15.5c0 .72.63 1.08 1.26 1.08.63 0 1.26-.36 1.26-1.08v-2.34c.36 1.08 2.07 2.61 4.5 2.61 4.23 0 7.83-3.6 7.83-8.73 0-5.22-3.6-8.73-7.84-8.73zM70.3 15.32c0 2.97-1.8 4.5-4.05 4.5-2.25 0-4.05-1.53-4.05-4.5s1.8-4.5 4.05-4.5c2.25 0 4.05 1.53 4.05 4.5zM83.47 23.03c-2.88 0-4.86-1.89-4.86-4.59v-2.25h9.72v-1.8c0-3.96-2.25-6.12-5.49-6.12-3.6 0-5.94 2.88-5.94 6.39 0 3.6 2.43 6.39 6.21 6.39 2.16 0 4.23-.9 5.4-2.25l-.9-.9c-1.08.9-2.61 1.44-4.14 1.44zm.63-9.99h-5.4c.18-1.8 1.62-2.97 3-2.97 1.26 0 2.25.99 2.4 2.97zM113.55 9.02a.9.9 0 0 0-1.26 0l-3.6 3.69v-3.6h-1.62v13.6h1.62v-7.2l3.42-3.6a.9.9 0 0 0 .18-.71.9.9 0 0 0-.36-.58zM102.54 23.03c-2.88 0-4.86-1.89-4.86-4.59v-2.25h9.72v-1.8c0-3.96-2.25-6.12-5.49-6.12-3.6 0-5.94 2.88-5.94 6.39 0 3.6 2.43 6.39 6.21 6.39 2.16 0 4.23-.9 5.4-2.25l-.9-.9c-1.08.9-2.61 1.44-4.14 1.44zm.63-9.99h-5.4c.18-1.8 1.62-2.97 3-2.97 1.26 0 2.25.99 2.4 2.97zM24.77 15.14c0 3.6-2.52 5.94-5.94 5.94s-5.94-2.34-5.94-5.94c0-3.6 2.52-5.94 5.94-5.94s5.94 2.34 5.94 5.94zm-10.26 0c0 2.7 1.71 4.5 4.32 4.5s4.32-1.8 4.32-4.5-1.71-4.5-4.32-4.5-4.32 1.8-4.32 4.5zM42.42 21.08V9.38h-1.62v11.7zm-1.17-14.4c.9 0 1.53-.63 1.53-1.53s-.63-1.53-1.53-1.53c-.9 0-1.53.63-1.53 1.53s.63 1.53 1.53 1.53zM58.71 21.08h-1.62V3.26h1.62v17.82zM52.05 21.08h-1.62l-4.5-6.03v6.03h-1.62V3.26h1.62l4.5 6.03V3.26h1.62v17.82zM33.87 21.08h1.62v-7.2l3.42-3.6a.9.9 0 0 0 .18-.71.9.9 0 0 0-1.44-.58l-3.6 3.69V3.26h-1.62v13.6h1.44zM10.82 2.9H0v1.62h10.82z M5.42 21.08H3.8V8.6h1.62v12.48zM8.12 14.84a3.15 3.15 0 0 1-2.7-3.15c0-1.8 1.17-3.24 3-3.24 1.53 0 2.52 1.08 2.52 2.52v.99h-3.96c.09 1.17.99 1.8 1.89 1.8.9 0 1.44-.36 1.8-.72l.9.81c-.54.63-1.44 1.08-2.43 1.08a3.15 3.15 0 0 1-3.03-3.06zM7.85 10.4c-.09-1.08-.81-1.62-1.62-1.62-.99 0-1.71.72-1.8 1.62h3.42z"></path>
      </svg>
    ) },
    { name: 'NIIT', logo: <span className="font-bold text-lg">NIIT</span> },
    { name: 'toppr', logo: <span className="font-bold text-lg">toppr</span> },
    { name: 'Great Learning', logo: <span className="text-lg flex items-center gap-1"><span className="font-bold text-xl">G</span>Great Learning</span> },
  ];

  return (
    <section className="py-12 md:py-20 bg-secondary/30 flex justify-center">
      <div className="container max-w-7xl">
        <div className="md:flex justify-between items-start mb-12 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center md:text-center">
              Powering every industry.
              <br className="hidden md:block" />
              Powering all disruptors.
            </h2>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-muted-foreground mt-4 md:mt-0 justify-center">
            {icons.map((icon, index) => (
              <div
                key={index}
                className={cn(
                  'transition-opacity duration-300',
                  currentIconIndex === index ? 'opacity-100' : 'opacity-25'
                )}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 mb-8 h-auto">
            {industries.map((industry) => (
              <TabsTrigger
                key={industry.name}
                value={industry.name}
                className="flex-col sm:flex-row h-12"
              >
                {industry.icon}
                {industry.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="E-Commerce">
            <div className="relative rounded-lg overflow-hidden min-h-[500px] flex items-center">
              {poweringEcommerceImage && (
                <Image
                  src={poweringEcommerceImage.imageUrl}
                  alt="E-commerce business"
                  fill
                  className="object-cover"
                  data-ai-hint={poweringEcommerceImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

              <div className="relative z-10 p-8 md:p-12 max-w-lg text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Empower your <br />
                  <span className="text-accent">e-commerce business</span>
                </h3>
                <p className="text-base md:text-lg text-gray-300 mb-8">
                  Streamline payment management with a unified dashboard,
                  enabling both online and in-person payment collection while
                  enhancing conversion rates and minimizing fraud.
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-8 text-gray-300">
                  {eCommerceClientLogos.map((client) => (
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

          <TabsContent value="Education">
            <div className="relative rounded-lg overflow-hidden min-h-[500px] flex items-center">
              {poweringEducationImage && (
                <Image
                  src={poweringEducationImage.imageUrl}
                  alt="Education business"
                  fill
                  className="object-cover"
                  data-ai-hint={poweringEducationImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

              <div className="relative z-10 p-8 md:p-12 max-w-lg text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Payments for your<br />
                  <span className="text-accent">education business.</span>
                </h3>
                <p className="text-base md:text-lg text-gray-300 mb-8">
                  Effortlessly establish and monitor fee payments and vendor payouts for educational institutions, tutorials, or online courses, whether you have a website or not.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-4 mb-8 text-gray-300">
                  {educationClientLogos.map((client) => (
                    <div key={client.name} className="h-6 flex items-center">
                      {client.logo}
                    </div>
                  ))}
                  <span className="text-sm">+ 21,000 others</span>
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
            .filter((i) => i.name !== 'E-Commerce' && i.name !== 'Education')
            .map((industry) => (
              <TabsContent key={industry.name} value={industry.name}>
                <div className="text-center py-20 border rounded-lg flex flex-col justify-center items-center min-h-[500px]">
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
