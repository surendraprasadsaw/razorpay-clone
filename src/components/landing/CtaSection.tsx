'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
    return (
        <section className="bg-secondary/30 py-20">
            <div className="container text-center">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Supercharge your business with Razorpay
                </h2>
                <div className="mt-8">
                    <Button size="lg" asChild style={{ backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}>
                        <Link href="/signup">
                            Sign Up Now <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
