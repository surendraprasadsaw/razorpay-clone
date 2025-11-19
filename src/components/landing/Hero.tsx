import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              PayFlow
            </span>
            , Powering
          </h1>{" "}
          Online Payments
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Experience the future of payments. We offer a seamless, secure, and developer-friendly platform to handle all your transaction needs.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/signup">
            <Button className="w-full md:w-1/3" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      <div className="z-10">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="relative bg-card/60 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border">
            <h3 className="text-2xl font-bold mb-4">The Complete Payment Solution</h3>
            <p className="text-muted-foreground mb-6">
              From startups to large enterprises, PayFlow provides a robust suite of tools to accept payments, manage subscriptions, and automate payouts.
            </p>
            <div className="flex justify-between items-center bg-muted p-4 rounded-lg">
              <div className="text-sm">
                <p>Accepting Payments</p>
                <p className="text-lg font-bold">₹100.00</p>
              </div>
              <Button size="sm">Pay Now</Button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
