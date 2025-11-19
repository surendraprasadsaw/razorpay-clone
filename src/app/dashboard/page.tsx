'use client';

import { useState } from 'react';
import { PaymentButton } from '@/components/payment/PaymentButton';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';

export default function DashboardPage() {
  const [amount, setAmount] = useState(10);
  const { user } = useAuth();

  return (
    <div className="flex justify-center items-start pt-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Make a Payment</CardTitle>
          <CardDescription>
            Enter an amount and complete the transaction.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="amount">Amount (INR)</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min="1"
                placeholder="Enter amount"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          {user && <PaymentButton amount={amount} user={user} />}
        </CardFooter>
      </Card>
    </div>
  );
}
