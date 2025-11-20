'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Globe,
  ArrowRight,
  ChevronsRight,
  ChevronRight,
} from 'lucide-react';

export function Disruption() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
            We have innovated at every instance, creating a disruption.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between">
              <span className="font-semibold">MoneySaver Export Account</span>
              <Globe className="w-5 h-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex-grow">
              <h3 className="text-3xl font-bold text-primary mb-4">
                Open a virtual account in 200+ countries, save up to 50% on
                international bank transfer charges. Receive
                ACH/SWIFT/SEPA/BACS payments
              </h3>
              <p className="text-muted-foreground">
                Receive international wire transfers with ease with a smart
                account
              </p>
            </CardContent>
            <CardFooter>
              <Button>
                Sign Up <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="link">Know More</Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between">
              <span className="font-semibold">Turbo UPI</span>
              <ChevronsRight className="w-5 h-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-lg text-primary mb-4 font-medium">
                Experience a 5X faster checkout, achieve a 10% success rate
                boost, all without any redirections to UPI apps.
              </p>
              <p className="text-muted-foreground">
                Get India&apos;s fastest one-step UPI payment solution for
                businesses
              </p>
            </CardContent>
            <CardFooter>
              <Button>
                Sign Up <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="link">Know More</Button>
            </CardFooter>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Button
                variant="default"
                size="icon"
                className="rounded-full h-10 w-10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
