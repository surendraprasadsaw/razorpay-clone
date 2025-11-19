import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { FaqSection } from '@/components/landing/FaqSection';
import { Footer } from '@/components/landing/Footer';
import { ClientLogos } from '@/components/landing/ClientLogos';
import { InternationalPayments } from '@/components/landing/InternationalPayments';
import { AllInOnePlatform } from '@/components/landing/AllInOnePlatform';
import { AcceptPayments } from '@/components/landing/AcceptPayments';
import { PoweringEveryIndustry } from '@/components/landing/PoweringEveryIndustry';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ClientLogos />
        <AcceptPayments />
        <PoweringEveryIndustry />
        <InternationalPayments />
        <AllInOnePlatform />
        <Features />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
