import type { ReactNode } from 'react';

interface StepCardProps {
  number: number;
  title: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
}

export default function StepCard({ number, title, description, children }: StepCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-surface-100 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5">
      {/* Step number circle */}
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-50 text-brand-700 text-sm font-bold shrink-0">
        {number}
      </span>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-surface-900 mb-1">
          {title}
        </h4>
        {description && (
          <p className="text-sm text-surface-600 mb-3">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
