'use client';

import { useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function PaymentButton({ amount, user }: { amount: number, user: User }) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    if (amount < 1) {
      toast({
        variant: 'destructive',
        title: 'Invalid Amount',
        description: 'Please enter an amount of at least ₹1.',
      });
      return;
    }
    
    setIsLoading(true);

    // Mock payment processing
    setTimeout(() => {
      toast({
        title: 'Payment Successful! (Mock)',
        description: `A mock payment of ₹${amount} was processed.`,
      });
      setIsLoading(false);
    }, 1500);

  };

  return (
    <Button onClick={handlePayment} disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        `Pay ₹${amount}`
      )}
    </Button>
  );
}
