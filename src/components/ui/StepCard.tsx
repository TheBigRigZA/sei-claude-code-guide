import type { ReactNode } from 'react';

interface StepCardProps {
  number: number;
  title: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
}

export default function StepCard({ number, title, description, children }: StepCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-5 transition-all duration-200 hover:bg-white/[0.06]">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-500/10 text-accent-400 text-sm font-bold shrink-0">
        {number}
      </span>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-white mb-1">
          {title}
        </h4>
        {description && (
          <p className="text-sm text-surface-400 mb-3">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
