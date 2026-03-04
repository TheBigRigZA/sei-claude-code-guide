import type { ReactNode } from 'react';

interface InfoCardProps {
  icon: string;
  title: string;
  description: string | ReactNode;
}

export default function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-5 transition-all duration-200 hover:bg-white/[0.06]">
      <div className="flex items-start gap-3">
        <span className="text-2xl shrink-0" role="img" aria-label={title}>
          {icon}
        </span>
        <div className="min-w-0">
          <h4 className="font-semibold text-white mb-1">{title}</h4>
          <div className="text-sm text-surface-400">{description}</div>
        </div>
      </div>
    </div>
  );
}
