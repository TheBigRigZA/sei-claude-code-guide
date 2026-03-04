'use client';

import { useTranslations, useLocale } from 'next-intl';
import CopyButton from '@/components/ui/CopyButton';
import { quickRefItems } from '@/data/quick-reference';

export default function QuickReference() {
  const t = useTranslations('qref');
  const locale = useLocale();

  return (
    <section id="quick-ref" className="scroll-mt-8">
      <div className="flex items-center gap-4 mb-8">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-sm font-bold text-accent-400 font-mono">
          07
        </span>
        <h2 className="text-2xl font-display font-bold text-white sm:text-3xl">
          {t('title')}
        </h2>
      </div>

      <div className="rounded-2xl glass-strong overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-surface-400">
              <th className="px-5 py-3 font-semibold">{t('colWhat')}</th>
              <th className="px-5 py-3 font-semibold">{t('colCommand')}</th>
              <th className="px-5 py-3 w-24"></th>
            </tr>
          </thead>
          <tbody>
            {quickRefItems.map((item, i) => (
              <tr
                key={i}
                className="border-b border-white/[0.04] last:border-b-0 hover:bg-white/[0.03] transition"
              >
                <td className="px-5 py-3 text-surface-300">
                  {item.action[locale as 'en' | 'zh']}
                </td>
                <td className="px-5 py-3">
                  {item.type === 'command' ? (
                    <code className="font-mono text-xs bg-white/[0.06] text-accent-300 px-2 py-1 rounded">
                      {item.command}
                    </code>
                  ) : (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-400 hover:underline"
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
