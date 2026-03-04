'use client';

import { useState, type ReactNode } from 'react';

interface ExpandableSectionProps {
  id: string;
  number?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  children: ReactNode;
  defaultExpanded?: boolean;
}

export default function ExpandableSection({
  id,
  number,
  title,
  description,
  icon,
  children,
  defaultExpanded = false,
}: ExpandableSectionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <section id={id} className="scroll-mt-8">
      <button
        onClick={() => setExpanded(!expanded)}
        className="group w-full text-left rounded-2xl glass-strong p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/50"
        aria-expanded={expanded}
        aria-controls={`${id}-content`}
      >
        <div className="flex items-start gap-4 sm:gap-6">
          {/* Number / Icon */}
          {(number || icon) && (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 font-display font-bold text-lg transition-colors group-hover:bg-accent-500/20">
              {icon || number}
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                {title}
              </h2>
              <span
                className={`shrink-0 text-surface-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 7.5L10 12.5L15 7.5" />
                </svg>
              </span>
            </div>
            {description && (
              <p className="mt-2 text-sm text-surface-400 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </button>

      {/* Expandable content */}
      <div
        id={`${id}-content`}
        className={`expandable-grid ${expanded ? 'expanded' : ''}`}
        role="region"
        aria-labelledby={id}
      >
        <div>
          <div className="pt-6 space-y-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
