'use client';

import { useTranslations } from 'next-intl';

const sections = [
  { key: 'setup', href: '#getting-started', icon: '01' },
  { key: 'plugins', href: '#plugins', icon: '02' },
  { key: 'combos', href: '#combos', icon: '03' },
  { key: 'dept', href: '#dept-tools', icon: '04' },
  { key: 'scenarios', href: '#scenarios', icon: '05' },
  { key: 'ai', href: '#ai-tools', icon: '06' },
  { key: 'ref', href: '#quick-ref', icon: '07' },
  { key: 'trouble', href: '#troubleshooting', icon: '08' },
] as const;

export default function NavigationGrid() {
  const t = useTranslations('nav');

  return (
    <nav aria-label={t('title')} className="scroll-mt-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {sections.map(({ key, href, icon }) => (
          <a
            key={key}
            href={href}
            className="group flex items-start gap-4 rounded-xl glass p-5 transition-all duration-300 hover:bg-white/[0.06] hover:border-accent-500/20"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 font-mono text-xs font-bold text-accent-400 transition-colors group-hover:bg-accent-500/20 group-hover:text-accent-300">
              {icon}
            </span>
            <div className="min-w-0">
              <span className="block text-sm font-semibold text-white group-hover:text-accent-300 transition-colors">
                {t(key)}
              </span>
              <span className="block text-xs text-surface-500 mt-0.5">
                {t(`${key}Desc`)}
              </span>
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
}
