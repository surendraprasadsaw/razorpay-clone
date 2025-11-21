'use client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

declare const window: any;

export function PaymentButton() {
  const { toast } = useToast();
  const { user } = useAuth();

  const makePayment = async () => {
    if (!user) {
      toast({
        title: 'Authentication Error',
        description: 'You must be logged in to make a payment.',
        variant: 'destructive',
      });
      return;
    }

    const res = await initializeRazorpay();
    if (!res) {
      toast({
        title: 'Error',
        description: 'Razorpay SDK failed to load. Are you online?',
        variant: 'destructive',
      });
      return;
    }

    // Make API call to the serverless function
    const response = await fetch('/api/razorpay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 100, // Amount in paise (e.g., 100 paise = 1 INR)
      }),
    });

    const data = await response.json();
    if (!data || data.error) {
      toast({
        title: 'Error Creating Order',
        description: data.error || 'An unknown error occurred.',
        variant: 'destructive',
      });
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      name: 'Your App Name',
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: 'Test Transaction',
      handler: async function (response: any) {
        try {
          const verificationResponse = await fetch('/api/verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              userId: user.uid,
              amount: data.amount,
            }),
          });

          const verificationData = await verificationResponse.json();

          if (verificationData.success) {
            toast({
              title: 'Payment Successful',
              description: `Payment ID: ${response.razorpay_payment_id}`,
            });
          } else {
            toast({
              title: 'Payment Verification Failed',
              description: verificationData.error || 'An unknown error occurred.',
              variant: 'destructive',
            });
          }
        } catch (error) {
          toast({
            title: 'Verification Request Error',
            description: 'Failed to communicate with the server for verification.',
            variant: 'destructive',
          });
        }
      },
      prefill: {
        name: user.displayName || 'Test User',
        email: user.email || 'test@example.com',
        contact: '9999999999',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  return (
    <Button onClick={makePayment} size="lg">
      Pay ₹1 Now
    </Button>
  );
}
