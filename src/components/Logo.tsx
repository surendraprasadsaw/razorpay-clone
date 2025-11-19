import { cn } from '@/lib/utils';
import { CircleDollarSign } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <CircleDollarSign className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold tracking-tight">Razor Pay</span>
    </div>
  );
}
