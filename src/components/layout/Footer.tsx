'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-surface-500">
        {t('updated')}
      </div>
    </footer>
  );
}
