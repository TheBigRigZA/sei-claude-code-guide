'use client';

import { useTranslations } from 'next-intl';

export default function QuickReferenceIT() {
  const t = useTranslations('esafenet');

  return (
    <section>
      <div id="quick-reference" className="flex items-center gap-4 scroll-mt-24 mb-8">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700 text-sm font-bold shadow-md shadow-brand-500/10">
          &#9733;
        </span>
        <h2 className="text-2xl font-bold text-surface-900 sm:text-3xl">
          {t('s6.title')}
        </h2>
      </div>
      <div className="rounded-2xl border border-surface-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-surface-100">
              <tr>
                <th className="text-left px-5 py-3 font-semibold text-surface-700">{t('s6.th1')}</th>
                <th className="text-left px-5 py-3 font-semibold text-surface-700">{t('s6.th2')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              <tr className="hover:bg-surface-50">
                <td className="px-5 py-3 text-surface-600">{t('s6.r1')}</td>
                <td className="px-5 py-3 font-mono text-xs">{t('s6.r1v')}</td>
              </tr>
              <tr className="hover:bg-surface-50">
                <td className="px-5 py-3 text-surface-600">{t('s6.r2')}</td>
                <td className="px-5 py-3 font-mono text-xs">{t('s6.r2v')}</td>
              </tr>
              <tr className="hover:bg-surface-50">
                <td className="px-5 py-3 text-surface-600">{t('s6.r3')}</td>
                <td className="px-5 py-3 font-mono text-xs">{t('s6.r3v')}</td>
              </tr>
              <tr className="hover:bg-surface-50">
                <td className="px-5 py-3 text-surface-600">{t('s6.r4')}</td>
                <td className="px-5 py-3 font-mono text-xs">{t('s6.r4v')}</td>
              </tr>
              <tr className="hover:bg-surface-50">
                <td className="px-5 py-3 text-surface-600">{t('s6.r5')}</td>
                <td className="px-5 py-3 font-mono text-xs">{t('s6.r5v')}</td>
              </tr>
              <tr className="hover:bg-surface-50">
                <td className="px-5 py-3 text-surface-600">{t('s6.r6')}</td>
                <td className="px-5 py-3 font-mono text-xs">{t('s6.r6v')}</td>
              </tr>
              <tr className="hover:bg-surface-50">
                <td className="px-5 py-3 text-surface-600">{t('s6.r7')}</td>
                <td className="px-5 py-3 text-xs">{t('s6.r7v')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
