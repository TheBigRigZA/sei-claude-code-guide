import type { ReactNode } from 'react';

type AlertVariant = 'warning' | 'info' | 'success' | 'error';

interface AlertBoxProps {
  variant: AlertVariant;
  children: ReactNode;
}

const variantStyles: Record<AlertVariant, { container: string; icon: string; iconChar: string }> = {
  warning: {
    container: 'bg-amber-50 border-amber-200',
    icon: 'text-amber-600',
    iconChar: '\u26A0', // Warning sign
  },
  info: {
    container: 'bg-blue-50 border-blue-200',
    icon: 'text-blue-600',
    iconChar: '\u2139', // Info sign
  },
  success: {
    container: 'bg-green-50 border-green-200',
    icon: 'text-green-600',
    iconChar: '\u2714', // Check mark
  },
  error: {
    container: 'bg-red-50 border-red-200',
    icon: 'text-red-600',
    iconChar: '\u2718', // Cross mark
  },
};

export default function AlertBox({ variant, children }: AlertBoxProps) {
  const styles = variantStyles[variant];

  return (
    <div className={`rounded-xl border p-4 flex gap-3 ${styles.container}`}>
      <span className={`text-xl shrink-0 ${styles.icon}`} aria-hidden="true">
        {styles.iconChar}
      </span>
      <div className="text-sm">
        {children}
      </div>
    </div>
  );
}
