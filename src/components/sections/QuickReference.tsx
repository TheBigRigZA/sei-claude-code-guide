'use client';

import { useTranslations, useLocale } from 'next-intl';
import CopyButton from '@/components/ui/CopyButton';
import { quickRefItems } from '@/data/quick-reference';

export default function QuickReference() {
  const t = useTranslations('qref');
  const locale = useLocale();

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-100 text-brand-700 font-bold text-lg">
          ★
        </span>
        <h2 className="text-2xl font-bold text-surface-900 sm:text-3xl">
          {t('title')}
        </h2>
      </div>

      <div className="rounded-2xl bg-white shadow-sm border border-surface-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-200 text-left text-surface-500">
              <th className="px-5 py-3 font-semibold">What</th>
              <th className="px-5 py-3 font-semibold">Command / Link</th>
              <th className="px-5 py-3 w-24"></th>
            </tr>
          </thead>
          <tbody>
            {quickRefItems.map((item, i) => (
              <tr
                key={i}
                className="border-b border-surface-100 last:border-b-0 hover:bg-surface-50 transition"
              >
                <td className="px-5 py-3 text-surface-700">
                  {item.action[locale as 'en' | 'zh']}
                </td>
                <td className="px-5 py-3">
                  {item.type === 'command' ? (
                    <code className="font-mono text-xs bg-surface-100 text-surface-800 px-2 py-1 rounded">
                      {item.command}
                    </code>
                  ) : (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-600 hover:underline"
                    >
                      {item.command}
                    </a>
                  )}
                </td>
                <td className="px-5 py-3">
                  {item.type === 'command' && (
                    <CopyButton text={item.command} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
