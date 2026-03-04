'use client';

import { useTranslations } from 'next-intl';

const combos = [
  { key: 'c1', color: 'accent' },
  { key: 'c2', color: 'brand' },
  { key: 'c3', color: 'accent' },
  { key: 'c4', color: 'brand' },
  { key: 'c5', color: 'accent' },
  { key: 'c6', color: 'brand' },
] as const;

export default function BestPracticeCombos() {
  const t = useTranslations('combos');

  return (
    <section id="combos" className="scroll-mt-8">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-4 mx-auto max-w-3xl text-surface-300 leading-relaxed">
          {t('desc')}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {combos.map(({ key, color }, index) => (
          <div
            key={key}
            className="group relative rounded-2xl glass-strong p-7 transition-all duration-300 hover:bg-white/[0.08] overflow-hidden"
          >
            {/* Subtle top accent line */}
            <div
              className={`absolute inset-x-0 top-0 h-px ${
                color === 'accent'
                  ? 'bg-gradient-to-r from-transparent via-accent-400/40 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-brand-400/40 to-transparent'
              }`}
            />

            {/* Number badge */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                  color === 'accent'
                    ? 'bg-accent-500/10 text-accent-400'
                    : 'bg-brand-500/10 text-brand-400'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                {t(`${key}Title`)}
              </h3>
            </div>

            <p className="text-sm text-surface-400 leading-relaxed mb-5">
              {t(`${key}Desc`)}
            </p>

            {/* Plugin flow */}
            <div className="rounded-lg bg-surface-950/50 border border-white/[0.04] p-4 mb-4">
              <p className="text-xs font-mono text-accent-300/80 leading-relaxed">
                {t(`${key}Plugins`)}
              </p>
            </div>

            {/* Use case tag */}
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-surface-500" />
              <span className="text-xs text-surface-500">
                {t(`${key}Use`)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
