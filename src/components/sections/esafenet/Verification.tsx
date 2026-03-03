'use client';

import { useTranslations } from 'next-intl';
import SectionHeading from '@/components/layout/SectionHeading';

export default function Verification() {
  const t = useTranslations('esafenet');

  return (
    <section>
      <SectionHeading number={5} title={t('s5.title')} id="verification" />
      <div className="rounded-2xl border border-surface-200 bg-white shadow-sm p-6 sm:p-8">
        <p className="text-sm text-surface-700 mb-4">{t('s5.intro')}</p>
        <ol className="space-y-3">
          {(['v1', 'v2', 'v3', 'v4'] as const).map((key, index) => (
            <li key={key} className="flex gap-3 items-start">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-50 text-brand-700 font-bold text-xs shrink-0 mt-0.5">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-surface-900">{t(`s5.${key}.title`)}</p>
                <p className="text-xs text-surface-500">{t(`s5.${key}.desc`)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
