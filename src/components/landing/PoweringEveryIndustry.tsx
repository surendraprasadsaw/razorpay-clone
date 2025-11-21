
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
  const poweringBfsiImage = PlaceHolderImages.find((p) => p.id === 'powering-bfsi');
  const poweringSaaSImage = PlaceHolderImages.find((p) => p.id === 'powering-saas');
  const poweringFreelancerImage = PlaceHolderImages.find((p) => p.id === 'powering-freelancer');


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
  
    const bfsiClientLogos = [
    { name: 'ClearTax', logo: <span className="font-sans text-lg font-semibold">Clear<span className="font-light">Tax</span></span> },
    { name: 'CRED', logo: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-auto">
        <path d="M6.653 16.397h10.694c.37 0 .685-.157.915-.47.23-.314.288-.7.173-1.129l-1.718-6.39a1.23 1.23 0 0 0-1.16-.908H9.442a1.23 1.23 0 0 0-1.16.908l-1.717 6.39c-.115.43-.058.815.172 1.13.23.313.545.47.916.47zm-1.92-7.513c.219-.812.8-1.405 1.58-1.57l.1-.013h5.17c.78.165 1.361.758 1.58 1.57l.083.336H4.816l.001-.001.033-.122zM4.17 17.526c-.02-.01-.04-.02-.06-.033a1.86 1.86 0 0 1-.842-1.62c-.115-.429-.058-.814.172-1.129L5.158 8.354c.48-1.785 2.1-3.094 3.96-3.322l.19-.017h5.385c1.86.228 3.48 1.537 3.96 3.322l1.717 6.39c.23.315.287.7.172 1.129a1.86 1.86 0 0 1-.902 1.654l-.06.032H4.17z"/>
      </svg>
    )},
    { name: 'ACKO', logo: (
      <svg fill="currentColor" viewBox="0 0 64 18" className="h-5 w-auto">
         <path d="M12.42 18L6.2 9.01 0 18h2.3l2.8-4.54 1.3-2.22 1.3 2.22L10.55 18zM6.21 0l6.2 9-6.2 9-6.2-9L6.2 0zm10.48 11.2c-.37-2.68-2.9-4.7-5.58-4.7-3.1 0-5.63 2.5-5.63 5.62s2.52 5.63 5.64 5.63c2.68 0 5.2-2.02 5.58-4.7h-1.98c-.3 1.52-1.6 2.6-3.6 2.6s-3.6-1.08-3.6-2.6c0-1.5 1.53-2.6 3.6-2.6s3.32 1.07 3.6 2.6h1.97zM29.83.27V18h2V.27zm11.13 10.93c-.37-2.68-2.9-4.7-5.58-4.7-3.1 0-5.63 2.5-5.63 5.62s2.52 5.63 5.64 5.63c2.68 0 5.2-2.02 5.58-4.7h-1.98c-.3 1.52-1.6 2.6-3.6 2.6s-3.6-1.08-3.6-2.6c0-1.5 1.53-2.6 3.6-2.6s3.32 1.07 3.6 2.6h1.97zM52.2.27c3.12 0 5.63 2.5 5.63 5.6s-2.5 5.63-5.63 5.63-5.6-2.5-5.6-5.6S49.07.27 52.2.27zm0 9.25c2 0 3.6-1.63 3.6-3.62S54.2 2.28 52.2 2.28s-3.62 1.62-3.62 3.63c0 2 1.62 3.62 3.62 3.62zm10.6.9c-.37-2.68-2.9-4.7-5.58-4.7-3.1 0-5.63 2.5-5.63 5.62s2.52 5.63 5.64 5.63c2.68 0 5.2-2.02 5.58-4.7h-1.98c-.3 1.52-1.6 2.6-3.6 26s-3.6-1.08-3.6-2.6c0-1.5 1.53-2.6 3.6-2.6s3.32 1.07 3.6 2.6h1.97z"/>
      </svg>
    )},
    { name: 'PaisaBazaar', logo: <span className="font-serif text-lg">paisabazaar<span className="text-xs">.com</span></span> },
  ];

  const saasClientLogos = [
    { name: 'Zoho', logo: (
        <svg fill="currentColor" viewBox="0 0 70 20" className="h-4 w-auto">
          <path d="M12.63 15.3c-1.3 0-2.3-.47-3.02-1.4l.7-.47c.56.73 1.34 1.1 2.33 1.1 1.3 0 2.2-.7 2.2-1.74V4.4h1.7v9.12c0 2.2-1.37 3.48-3.9 3.48zm10.1-5.1c0-2.5-1.5-4.08-3.8-4.08-2.33 0-3.8 1.58-3.8 4.08 0 2.5 1.5 4.1 3.8 4.1 2.3 0 3.8-1.6 3.8-4.1zm-6 0c0-1.6.8-2.7 2.2-2.7s2.2 1.1 2.2 2.7-.8 2.7-2.2 2.7-2.2-1.1-2.2-2.7zm20.08-5.7v11.5h-1.6V4.5h1.6zM32.8 10.2c0-2.5-1.5-4.08-3.8-4.08-2.33 0-3.8 1.58-3.8 4.08 0 2.5 1.5 4.1 3.8 4.1 2.3 0 3.8-1.6 3.8-4.1zm-6 0c0-1.6.8-2.7 2.2-2.7s2.2 1.1 2.2 2.7-.8 2.7-2.2 2.7-2.2-1.1-2.2-2.7zm20.88.2v5.3h-1.6V4.5h1.6v5.3l3.2-5.3h1.9l-3.5 5.7 3.7 5.8h-1.9l-3.4-5.5zM69.5 10.2c0-2.62-1.8-4.2-4.5-4.2a4.3 4.3 0 0 0-4.3 4.2c0 2.6 1.8 4.2 4.5 4.2a4.3 4.3 0 0 0 4.3-4.2zm-7.2 0c0-1.6.9-2.8 2.7-2.8s2.7 1.2 2.7 2.8-.9 2.8-2.7 2.8-2.7-1.2-2.7-2.8zM4.5 16c-3.1 0-4.7-1.9-4.7-5.8s1.6-5.8 4.7-5.8c3.1 0 4.7 1.9 4.7 5.8S7.6 16 4.5 16zm0-10c-1.9 0-3 1.6-3 4.2s1.1 4.2 3 4.2 3-1.6 3-4.2-1.1-4.2-3-4.2z"/>
        </svg>
    )},
    { name: 'Shopify', logo: (
        <svg fill="currentColor" viewBox="0 0 100 28" className="h-5 w-auto">
         <path d="M34.7 21.6a6.2 6.2 0 0 1-6.1-6.2c0-3.5 2.7-6.2 6.1-6.2s6.1 2.7 6.1 6.2-2.7 6.2-6.1 6.2zm0-10.4a4.2 4.2 0 0 0-4.2 4.2 4.2 4.2 0 0 0 4.2 4.2 4.2 4.2 0 0 0 4.2-4.2c0-2.3-1.9-4.2-4.2-4.2zM52.3 9.2h-3.2v12.3h3.2V9.2zM15.4 15.4c0 3.5 2.7 6.2 6.1 6.2s6.1-2.7 6.1-6.2-2.7-6.2-6.1-6.2-6.1 2.8-6.1 6.2zm10.4 0c0 2.3-1.9 4.2-4.2 4.2a4.2 4.2 0 0 1-4.2-4.2c0-2.3 1.9-4.2 4.2-4.2s4.2 1.9 4.2 4.2zM63.8 15.4c0 3.5 2.7 6.2 6.1 6.2s6.1-2.7 6.1-6.2-2.7-6.2-6.1-6.2-6.1 2.8-6.1 6.2zm10.4 0c0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2c0-2.3 1.9-4.2 4.2-4.2 2.4 0 4.2 1.9 4.2 4.2zM94.6 19.3L90 9.8a.7.7 0 0 0-.6-.5h-4.3c-.4 0-.7.3-.6.7l2.2 4.7-3.1-4.7c-.2-.3-.5-.4-.8-.2s-.4.5-.2.8l3.7 5.6v5.3h3.2v-5l4.3-6.5h-3.1l-2.6 4zM0 11.2C.2 5.7 4.9.9 10.4.9c3.2 0 5.8 1.5 7.2 4L16 6.3c-1-1.6-2.9-2.6-5.5-2.6-3.5 0-6.3 2.7-6.3 6.2h12.3v1.9H4.2c.2 3.3 2.8 5.7 6.1 5.7 2.4 0 4.4-1 5.5-2.7l1.7 1.3A9.2 9.2 0 0 1 10.4 22C4.7 22 .1 17.5 0 11.2z"></path>
        </svg>
    )},
    { name: 'Intuit', logo: (
      <svg fill="currentColor" viewBox="0 0 65 16" className="h-4 w-auto">
        <path d="M12.6 15.3c-1.3 0-2.3-.47-3.02-1.4l.7-.47c.56.73 1.34 1.1 2.33 1.1 1.3 0 2.2-.7 2.2-1.74V4.4h1.7v9.12c0 2.2-1.37 3.48-3.9 3.48zM3.4 15.8V.2h1.6v15.6zm18.3-5.6c0-2.5-1.5-4.08-3.8-4.08-2.33 0-3.8 1.58-3.8 4.08 0 2.5 1.5 4.1 3.8 4.1 2.3 0 3.8-1.6 3.8-4.1zm-6 0c0-1.6.8-2.7 2.2-2.7s2.2 1.1 2.2 2.7-.8 2.7-2.2 2.7-2.2-1.1-2.2-2.7zM36.1 10.2c0-2.5-1.5-4.08-3.8-4.08-2.33 0-3.8 1.58-3.8 4.08 0 2.5 1.5 4.1 3.8 4.1 2.3 0 3.8-1.6 3.8-4.1zm-6 0c0-1.6.8-2.7 2.2-2.7s2.2 1.1 2.2 2.7-.8 2.7-2.2 2.7-2.2-1.1-2.2-2.7zM45 4.5h-1.6v11.3H45zm-1.1-3.2c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2-1.2.5-1.2 1.2.5 1.2 1.2 1.2zm10.5 8.9v-1l-3.3-3.6h-.1v4.6h-1.6V4.5h2.2l3.2 3.6h.1V4.5h1.6v11.3h-2.1zM64.6 9.4c0 .6-.1 1.1-.4 1.6-.3.5-.7.9-1.2 1.2s-1.1.4-1.8.4c-.6 0-1.2-.1-1.7-.4-.5-.3-.9-.6-1.2-1.1l.9-.7c.3.4.5.7.8.9s.6.3 1 .3c.4 0 .8-.1 1.1-.3s.5-.5.7-.9.2-.8.2-1.3V9c0-1-.3-1.7-1-2.1-.6-.4-1.6-.6-2.9-.6h-1.1v-1.4h1.2c1.7 0 2.6-.4 2.6-1.4s-.7-1.4-2.1-1.4c-.8 0-1.4.2-1.8.5s-.6.8-.7 1.3l-1.4-.4c.2-.9.6-1.6 1.2-2.1s1.4-.8 2.4-.8c1.6 0 2.7.4 3.3 1.1.6.7.9 1.6.9 2.8v.5c0 .6-.1 1.1-.4 1.5s-.6.7-1.1.9c.6.2 1.1.5 1.4.9s.5.9.5 1.5z"></path>
      </svg>
    )},
    { name: 'Sulekha', logo: (
      <svg fill="currentColor" viewBox="0 0 80 16" className="h-4 w-auto">
        <path d="M5.4 12.3c-1.2 0-2.3-.4-3-1.1l.6-.7c.6.5 1.3.8 2 .8 1.1 0 1.8-.4 1.8-1.1v-.1c0-.6-.4-.9-2-1.3l-2.4-.7c-2-.6-3.3-1.6-3.3-3.5 0-2 1.5-3.4 3.8-3.4 1 0 2 .3 2.8.8l-.6.7c-.7-.4-1.4-.7-2.1-.7-.9 0-1.5.4-1.5 1v.1c0 .6.4.9 1.8 1.2l2.3.6c2.2.5 3.5 1.6 3.5 3.6 0 2-1.5 3.4-4.1 3.4zM16.9 3.5h-3.6v9.3h-1.6V3.5h-3.6V2h8.8v1.5zM27 12.8h-1.6l-3.7-6.3v6.3h-1.6V2h1.6l3.7 6.3V2h1.6v10.8zM38.1 7.8c0 2.4-1.8 4.1-4.4 4.1s-4.4-1.7-4.4-4.1 1.8-4.1 4.4-4.1 4.4 1.7 4.4 4.1zm-7.3 0c0 1.6 1.2 2.7 2.9 2.7s2.9-1.1 2.9-2.7-1.2-2.7-2.9-2.7-2.9 1.1-2.9 2.7zM42.3 2l4 9.9L50.4 2h1.7l-5.1 12.1h-1.5L40.2 2h2.1zM53.1 12.8h-1.6V5.4c0-1.8 1-2.8 2.8-2.8.8 0 1.5.2 2.1.6l-.5.9c-.4-.3-1-.5-1.5-.5-1 0-1.4.6-1.4 1.8v7.4zM59.9 12.8h-1.6V2h1.6v10.8zM68.7 8.3c0-1.6 1-2.7 2.5-2.7s2.5 1.1 2.5 2.7-1 2.7-2.5 2.7-2.5-1.1-2.5-2.7zm-1.5 0c0 2.4 1.4 4.1 4 4.1s4-1.7 4-4.1-1.4-4.1-4-4.1-4 1.7-4 4.1zM79.2 12.8h-1.6V5.4c0-1.8 1-2.8 2.8-2.8.8 0 1.5.2 2.1.6l-.5.9c-.4-.3-1-.5-1.5-.5-1 0-1.4.6-1.4 1.8v7.4z"></path>
      </svg>
    )},
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
            <div className="relative rounded-lg overflow-hidden min-h-[500px] flex items-center justify-center">
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
            <div className="relative rounded-lg overflow-hidden min-h-[500px] flex items-center justify-center">
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

          <TabsContent value="BFSI">
            <div className="relative rounded-lg overflow-hidden min-h-[500px] flex items-center justify-center">
              {poweringBfsiImage && (
                <Image
                  src={poweringBfsiImage.imageUrl}
                  alt="Financial services business meeting"
                  fill
                  className="object-cover"
                  data-ai-hint={poweringBfsiImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

              <div className="relative z-10 p-8 md:p-12 max-w-lg text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Payments ecosystem for<br />
                  <span className="text-accent">financial services</span>
                </h3>
                <p className="text-base md:text-lg text-gray-300 mb-8">
                  Streamline collection management, automate recurring payments, and expedite loan disbursement for a comprehensive financial solution.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-4 mb-8 text-gray-300">
                  {bfsiClientLogos.map((client) => (
                    <div key={client.name} className="h-6 flex items-center">
                      {client.logo}
                    </div>
                  ))}
                  <span className="text-sm">+ 2800 others</span>
                </div>
                <Button size="lg" asChild>
                  <Link href="#">
                    See Solutions <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="SaaS">
            <div className="relative rounded-lg overflow-hidden min-h-[500px] flex items-center justify-center">
              {poweringSaaSImage && (
                <Image
                  src={poweringSaaSImage.imageUrl}
                  alt="IT & SaaS provider"
                  fill
                  className="object-cover"
                  data-ai-hint={poweringSaaSImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

              <div className="relative z-10 p-8 md:p-12 max-w-lg text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Global Payment Solutions for <br />
                  <span className="text-accent">IT & SaaS Providers</span>
                </h3>
                <p className="text-base md:text-lg text-gray-300 mb-8">
                  Seamlessly accept payments in over 100 currencies, facilitate customizable subscription payments, and efficiently execute vendor payouts.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-4 mb-8 text-gray-300">
                  {saasClientLogos.map((client) => (
                    <div key={client.name} className="h-6 flex items-center">
                      {client.logo}
                    </div>
                  ))}
                  <span className="text-sm">+ 13,500 others</span>
                </div>
                <Button size="lg" asChild>
                  <Link href="#">
                    See Solutions <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="Freelancer">
            <div className="relative rounded-lg overflow-hidden min-h-[500px] flex items-center justify-center">
              {poweringFreelancerImage && (
                <Image
                  src={poweringFreelancerImage.imageUrl}
                  alt="Freelancer working at desk"
                  fill
                  className="object-cover"
                  data-ai-hint={poweringFreelancerImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

              <div className="relative z-10 p-8 md:p-12 max-w-lg text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  The personalized payment solution for <span className="text-accent">freelancers</span>
                </h3>
                <p className="text-base md:text-lg text-gray-300 mb-8">
                  Easily accept payments, even without a website and without any coding expertise, while also enabling the creation of your personalized, branded online store.
                </p>
                <Button size="lg" asChild>
                  <Link href="#">
                    See Solutions <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
