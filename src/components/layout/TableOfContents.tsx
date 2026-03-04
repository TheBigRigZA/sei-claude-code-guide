'use client';

import { useTranslations } from 'next-intl';

const tocAnchors = [
  'prerequisites',
  'api-key',
  'install',
  'env-vars',
  'verify',
  'troubleshooting',
  'dept-tools',
  'ai-tools',
  'scenarios',
];

export default function TableOfContents() {
  const t = useTranslations('toc');

  return (
    <nav
      aria-label={t('title')}
      className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="mb-6 text-lg font-bold text-surface-900">
        {t('title')}
      </h2>
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {tocAnchors.map((anchor, index) => {
          const num = index + 1;
          return (
            <li key={anchor}>
              <a
                href={`#${anchor}`}
                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-surface-600 transition-colors hover:bg-brand-50 hover:text-brand-600"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface-100 text-xs font-semibold text-surface-500 transition-colors group-hover:bg-brand-100 group-hover:text-brand-600">
                  {num}
                </span>
                <span className="font-medium">{t(String(num))}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
