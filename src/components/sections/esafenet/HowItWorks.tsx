'use client';

import { useTranslations } from 'next-intl';
import SectionHeading from '@/components/layout/SectionHeading';
import AlertBox from '@/components/ui/AlertBox';

export default function HowItWorks() {
  const t = useTranslations('esafenet');

  return (
    <section>
      <SectionHeading number={2} title={t('s2.title')} id="how-it-works" />
      <div className="rounded-2xl border border-surface-200 bg-white shadow-sm p-6 sm:p-8 space-y-6">
        <p className="text-surface-700">{t('s2.intro')}</p>

        {/* Components table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-surface-200 rounded-lg overflow-hidden">
            <thead className="bg-surface-100">
              <tr>
                <th className="text-left px-4 py-2.5 font-semibold text-surface-700">{t('s2.th1')}</th>
                <th className="text-left px-4 py-2.5 font-semibold text-surface-700">{t('s2.th2')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              <tr>
                <td className="px-4 py-2.5 font-mono text-xs">CDGRegedit.exe</td>
                <td className="px-4 py-2.5 text-surface-600">{t('s2.r1')}</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-mono text-xs">EstVPN.exe</td>
                <td className="px-4 py-2.5 text-surface-600">{t('s2.r2')}</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-mono text-xs">Filelock.sys</td>
                <td className="px-4 py-2.5 text-surface-600">{t('s2.r3')}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Key concept alert */}
        <AlertBox variant="info">
          <div dangerouslySetInnerHTML={{ __html: t('s2.key') }} />
        </AlertBox>

        {/* Encryption method */}
        <h4 className="font-semibold text-surface-900">{t('s2.enc.title')}</h4>
        <ul className="text-sm text-surface-700 space-y-2 list-disc list-inside">
          <li>{t('s2.enc.1')}</li>
          <li>{t('s2.enc.2')}</li>
          <li>{t('s2.enc.3')}</li>
          <li>{t('s2.enc.4')}</li>
        </ul>
      </div>
    </section>
  );
}
