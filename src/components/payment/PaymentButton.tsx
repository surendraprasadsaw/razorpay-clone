'use client';

import { useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { createOrder, verifyPaymentAndSave } from '@/lib/actions/payment';
import { Loader2 } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export function PaymentButton({ amount, user }: { amount: number, user: User }) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

    const result = await createOrder(amount);

    if (!result.success || !result.order) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error || 'Could not create payment order.',
      });
      setIsLoading(false);
      return;
    }

    const { order } = result;

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: order.amount,
      currency: order.currency,
      name: 'Razor Pay',
      description: 'Test Transaction',
      order_id: order.id,
      handler: async function (response: any) {
        const verificationResult = await verifyPaymentAndSave({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          amount,
          userId: user.uid,
          userEmail: user.email!,
        });

        if (verificationResult.success) {
          toast({
            title: 'Payment Successful!',
            description: `Payment ID: ${verificationResult.paymentId}`,
          });
        } else {
          toast({
            variant: 'destructive',
            title: 'Payment Failed',
            description: verificationResult.error || 'Verification failed.',
          });
        }
        setIsLoading(false);
      },
      prefill: {
        name: user.displayName || 'Test User',
        email: user.email,
        contact: user.phoneNumber || '9999999999',
      },
      notes: {
        address: 'Razor Pay Corporate Office',
      },
      theme: {
        color: '#3F51B5',
      },
      modal: {
        ondismiss: function() {
          setIsLoading(false);
          toast({
            variant: 'destructive',
            title: 'Payment Canceled',
            description: 'The payment process was not completed.',
          });
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Button onClick={handlePayment} disabled={isLoading} className="w-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
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
