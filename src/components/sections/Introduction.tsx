'use client';

import { useTranslations } from 'next-intl';

const features = [
  { key: 'f1', icon: '>' },
  { key: 'f2', icon: '{}' },
  { key: 'f3', icon: '+' },
] as const;

export default function Introduction() {
  const t = useTranslations('intro');

  return (
    <section id="introduction" className="scroll-mt-8">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-4 mx-auto max-w-3xl text-surface-300 leading-relaxed">
          {t('desc')}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {features.map(({ key, icon }) => (
          <div
            key={key}
            className="group rounded-2xl glass-strong p-8 transition-all duration-300 hover:bg-white/[0.08] hover:glow-accent"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 font-mono text-lg font-bold mb-5 transition-colors group-hover:bg-accent-500/20">
              {icon}
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2">
              {t(key)}
            </h3>
            <p className="text-sm text-surface-400 leading-relaxed">
              {t(`${key}Desc`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
