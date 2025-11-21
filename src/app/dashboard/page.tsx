'use client';
import { useAuth } from '@/hooks/useAuth';
import { PaymentButton } from '@/components/payment/PaymentButton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-2">Welcome, {user?.displayName || user?.email}</h1>
      <p className="text-muted-foreground mb-8">Here's your payment dashboard.</p>
      
      <Card>
        <CardHeader>
          <CardTitle>Make a Payment</CardTitle>
          <CardDescription>Click the button below to initiate a test payment with Razorpay.</CardDescription>
        </CardHeader>
        <CardContent>
          <PaymentButton />
        </CardContent>
      </Card>
    </div>
  );
}
