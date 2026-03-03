'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import WhatIsEsafenet from '@/components/sections/esafenet/WhatIsEsafenet';
import HowItWorks from '@/components/sections/esafenet/HowItWorks';
import TheProblem from '@/components/sections/esafenet/TheProblem';
import Recommendations from '@/components/sections/esafenet/Recommendations';
import Verification from '@/components/sections/esafenet/Verification';
import QuickReferenceIT from '@/components/sections/esafenet/QuickReferenceIT';
import KnownIssues from '@/components/sections/esafenet/KnownIssues';

export default function EsafenetPage() {
  const t = useTranslations('esafenet');

  return (
    <>
      {/* ───────── HERO ───────── */}
      <header className="relative overflow-hidden bg-gradient-to-br from-surface-900 via-surface-800 to-brand-950 text-white">
        {/* Decorative blurred circles */}
        <div className="absolute top-[-10%] left-[-5%] h-96 w-96 rounded-full bg-brand-500 opacity-10 blur-3xl" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-brand-400 opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-surface-400 hover:text-white text-sm font-medium mb-6 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('nav.back')}
          </Link>

          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 backdrop-blur px-4 py-1.5 text-sm font-medium border border-amber-400/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              {t('hero.badge')}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {t('hero.title1')}
            <br className="hidden sm:block" />
            <span className="text-brand-400">{t('hero.title2')}</span>
          </h1>

          {/* Description */}
          <p
            className="mt-4 text-base sm:text-lg text-surface-300 max-w-2xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('hero.desc') }}
          />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        <WhatIsEsafenet />
        <HowItWorks />
        <TheProblem />
        <Recommendations />
        <Verification />
        <QuickReferenceIT />
        <KnownIssues />
      </main>

      {/* ───────── FOOTER ───────── */}
      <footer className="border-t border-surface-200 bg-white mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-surface-500">
          <p>{t('footer.updated')}</p>
          <p className="mt-2">
            <Link
              href="/"
              className="text-brand-600 hover:underline"
            >
              {t('footer.back')}
            </Link>
            {' · '}
            <a
              href="https://www.esafenet.com"
              className="text-brand-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ESAFENET Official Site
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
