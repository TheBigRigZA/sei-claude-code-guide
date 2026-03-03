'use client';

import { useTranslations } from 'next-intl';
import Accordion from '@/components/ui/Accordion';

export default function KnownIssues() {
  const t = useTranslations('esafenet');

  return (
    <section>
      <div id="known-issues" className="flex items-center gap-4 scroll-mt-24 mb-8">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 text-sm font-bold shadow-md shadow-amber-500/10">
          &#9888;
        </span>
        <h2 className="text-2xl font-bold text-surface-900 sm:text-3xl">
          {t('s7.title')}
        </h2>
      </div>
      <div className="rounded-2xl border border-surface-200 bg-white shadow-sm divide-y divide-surface-100 overflow-hidden">
        <Accordion title={t('s7.q1')}>
          <p>{t('s7.a1')}</p>
        </Accordion>
        <Accordion title={t('s7.q2')}>
          <p>{t('s7.a2')}</p>
        </Accordion>
        <Accordion title={t('s7.q3')}>
          <p>{t('s7.a3')}</p>
        </Accordion>
        <Accordion title={t('s7.q4')}>
          <p>{t('s7.a4')}</p>
        </Accordion>
      </div>
    </section>
  );
}
