import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center', className)}>
      <svg
        width="100"
        height="30"
        viewBox="0 0 100 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground"
      >
        <text
          x="0"
          y="22"
          fontFamily="Arial, sans-serif"
          fontSize="24"
          fontWeight="bold"
          fill="#528FF0"
        >
          M
        </text>
        <text
          x="24"
          y="22"
          fontFamily="Arial, sans-serif"
          fontSize="24"
          fontWeight="bold"
          fill="currentColor"
        >
          OHAN
        </text>
      </svg>
    </div>
  );
}
