'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
    return (
        <section className="bg-secondary/30 py-12 md:py-20">
            <div className="w-[60%] mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold">
                    Supercharge your business with Razorpay
                </h2>
                <div className="mt-8">
                    <Button size="lg" asChild>
                        <Link href="/signup">
                            Sign Up Now <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
