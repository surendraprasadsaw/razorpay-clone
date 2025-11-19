'use server';

import { razorpay } from '@/lib/razorpay';
import crypto from 'crypto';
import { db } from '@/lib/firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import type { Payment } from '@/types';

export async function createOrder(amount: number) {
  try {
    const options = {
      amount: amount * 100, // amount in the smallest currency unit
      currency: 'INR',
    };
    const order = await razorpay.orders.create(options);
    return { success: true, order };
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return { success: false, error: 'Failed to create order.' };
  }
}

type VerifyPaymentParams = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  amount: number;
  userId: string;
  userEmail: string;
};

export async function verifyPaymentAndSave(params: VerifyPaymentParams) {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    amount,
    userId,
    userEmail,
  } = params;

  const body = razorpay_order_id + '|' + razorpay_payment_id;

  try {
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Payment is authentic, save to Firestore
      const paymentData: Omit<Payment, 'createdAt' | 'status'> & { status: 'verified' } = {
        userId,
        userEmail,
        amount,
        razorpayPaymentId: razorpay_payment_id,
        razorpayOrderId: razorpay_order_id,
        razorpaySignature: razorpay_signature,
        status: 'verified',
      };

      await addDoc(collection(db, 'payments'), {
        ...paymentData,
        createdAt: serverTimestamp(),
      });
      
      return { success: true, paymentId: razorpay_payment_id };
    } else {
      // Payment is not authentic
      return { success: false, error: 'Payment verification failed.' };
    }
  } catch (error) {
    console.error('Error verifying payment or saving to Firestore:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
