import type { Timestamp } from 'firebase/firestore';

export type Payment = {
  userId: string;
  userEmail: string;
  amount: number;
  razorpayPaymentId: string;
  razorpayOrderId: string;
  razorpaySignature: string;
  status: 'created' | 'verified' | 'failed';
  createdAt: Timestamp;
};
