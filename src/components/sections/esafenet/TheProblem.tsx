'use client';

import { useTranslations } from 'next-intl';

export default function TheProblem() {
  const t = useTranslations('esafenet');

  return (
    <section>
      <div id="the-problem" className="flex items-center gap-4 scroll-mt-24 mb-8">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-700 text-sm font-bold shadow-md shadow-red-500/10">
          !
        </span>
        <h2 className="text-2xl font-bold text-surface-900 sm:text-3xl">
          {t('s3.title')}
        </h2>
      </div>
      <div className="rounded-2xl border border-red-200 bg-red-50/50 shadow-sm p-6 sm:p-8 space-y-4">
        <p className="text-surface-700">{t('s3.intro')}</p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-white border border-red-100 p-4">
            <h4 className="font-semibold text-red-800 text-sm mb-1">{t('s3.p1.title')}</h4>
            <p className="text-xs text-surface-600">{t('s3.p1.desc')}</p>
          </div>
          <div className="rounded-xl bg-white border border-red-100 p-4">
            <h4 className="font-semibold text-red-800 text-sm mb-1">{t('s3.p2.title')}</h4>
            <p className="text-xs text-surface-600">{t('s3.p2.desc')}</p>
          </div>
          <div className="rounded-xl bg-white border border-red-100 p-4">
            <h4 className="font-semibold text-red-800 text-sm mb-1">{t('s3.p3.title')}</h4>
            <p className="text-xs text-surface-600">{t('s3.p3.desc')}</p>
          </div>
          <div className="rounded-xl bg-white border border-red-100 p-4">
            <h4 className="font-semibold text-red-800 text-sm mb-1">{t('s3.p4.title')}</h4>
            <p className="text-xs text-surface-600">{t('s3.p4.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
