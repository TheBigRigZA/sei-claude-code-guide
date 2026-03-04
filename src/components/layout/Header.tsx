'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LanguageToggle from './LanguageToggle';
import { Link } from '@/i18n/navigation';
import Waveform from '@/components/ui/Waveform';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations('hero');

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-surface-950 via-surface-900 to-surface-950 text-white min-h-[85vh] flex flex-col">
      {/* Gradient mesh blobs */}
      <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-accent-500 opacity-[0.06] blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-15%] h-[500px] w-[500px] rounded-full bg-brand-500 opacity-[0.08] blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[30%] right-[10%] h-[300px] w-[300px] rounded-full bg-accent-400 opacity-[0.04] blur-[80px] animate-float" />

      {/* Top bar */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-8">
        <div className="flex items-center justify-between">
          <Image
            src="https://ueeshop.ly200-cdn.com/u_file/UPAO/UPAO310/2010/photo/0d6812b65e.png"
            alt="SEI Robotics"
            width={560}
            height={160}
            className="h-20 w-auto brightness-0 invert opacity-80"
            unoptimized
          />
          <LanguageToggle />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="mx-auto max-w-6xl px-6 py-16 w-full">
          {/* Badge */}
          <div className="mb-8 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-4 py-1.5 text-sm font-medium text-accent-300 ring-1 ring-accent-400/20">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse-glow" />
              {t('badge')}
            </span>
          </div>

          {/* Title */}
          <h1 className="animate-fade-up-delay-1 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
            <span className="text-gradient-accent whitespace-pre-line">{t('introTitle')}</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-surface-300 animate-fade-up-delay-2">
            {t('introDesc')}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up-delay-3">
            <a
              href="#getting-started"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent-500 px-7 py-3.5 text-sm font-semibold text-surface-950 shadow-lg shadow-accent-500/20 transition-all hover:bg-accent-400 hover:shadow-accent-400/30 hover:-translate-y-0.5"
            >
              {t('cta1')}
              <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>

            <a
              href="#plugins"
              className="inline-flex items-center gap-2 rounded-xl bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/[0.12] border border-white/[0.08] hover:-translate-y-0.5"
            >
              {t('cta2')}
            </a>

            <a
              href="#combos"
              className="inline-flex items-center gap-2 rounded-xl bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/[0.12] border border-white/[0.08] hover:-translate-y-0.5"
            >
              {t('cta3')}
            </a>

            <Link
              href="/esafenet"
              locale={locale}
              className="inline-flex items-center gap-2 rounded-xl bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/[0.12] border border-white/[0.08] hover:-translate-y-0.5"
            >
              {t('cta4')}
              <svg className="h-3.5 w-3.5 opacity-50" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Waveform band at bottom */}
      <Waveform />
    </header>
  );
}
