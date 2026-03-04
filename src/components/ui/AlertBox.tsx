import type { ReactNode } from 'react';

type AlertVariant = 'warning' | 'info' | 'success' | 'error';

interface AlertBoxProps {
  variant: AlertVariant;
  children: ReactNode;
}

const variantStyles: Record<AlertVariant, { container: string; icon: string; iconChar: string }> = {
  warning: {
    container: 'bg-amber-500/10 border-amber-500/20',
    icon: 'text-amber-400',
    iconChar: '\u26A0',
  },
  info: {
    container: 'bg-blue-500/10 border-blue-500/20',
    icon: 'text-blue-400',
    iconChar: '\u2139',
  },
  success: {
    container: 'bg-green-500/10 border-green-500/20',
    icon: 'text-green-400',
    iconChar: '\u2714',
  },
  error: {
    container: 'bg-red-500/10 border-red-500/20',
    icon: 'text-red-400',
    iconChar: '\u2718',
  },
};

export default function AlertBox({ variant, children }: AlertBoxProps) {
  const styles = variantStyles[variant];

  return (
    <div className={`rounded-xl border p-4 flex gap-3 ${styles.container}`}>
      <span className={`text-xl shrink-0 ${styles.icon}`} aria-hidden="true">
        {styles.iconChar}
      </span>
      <div className="text-sm text-surface-300">
        {children}
      </div>
    </div>
  );
}
