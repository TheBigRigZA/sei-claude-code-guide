import type { ReactNode } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  return (
    <details className="group" open={defaultOpen || undefined}>
      <summary className="flex items-center justify-between p-5 hover:bg-white/[0.03] transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span className="font-semibold text-white">{title}</span>
        <span className="chevron text-surface-500 text-sm ml-2 transition-transform duration-200 group-open:rotate-90">
          &#9654;
        </span>
      </summary>
      <div className="px-5 pb-5 text-sm text-surface-400 space-y-2">
        {children}
      </div>
    </details>
  );
}
