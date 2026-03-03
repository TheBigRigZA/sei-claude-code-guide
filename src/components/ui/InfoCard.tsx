import type { ReactNode } from 'react';

interface InfoCardProps {
  icon: string;
  title: string;
  description: string | ReactNode;
}

export default function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="rounded-xl border border-surface-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:-translate-y-0.5">
      <div className="flex items-start gap-3">
        <span className="text-2xl shrink-0" role="img" aria-label={title}>
          {icon}
        </span>
        <div className="min-w-0">
          <h4 className="font-semibold text-surface-900 mb-1">{title}</h4>
          <div className="text-sm text-surface-600">{description}</div>
        </div>
      </div>
    </div>
  );
}
