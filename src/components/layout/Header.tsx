import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LanguageToggle from './LanguageToggle';
import { Link } from '@/i18n/navigation';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations('hero');

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-surface-900 via-surface-800 to-brand-950 text-white">
      {/* Decorative blurred circles */}
      <div className="absolute top-[-10%] left-[-5%] h-96 w-96 rounded-full bg-brand-500 opacity-10 blur-3xl" />
      <div className="absolute bottom-[-15%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-brand-400 opacity-10 blur-3xl" />
      <div className="absolute top-[40%] right-[20%] h-64 w-64 rounded-full bg-brand-600 opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24">
        {/* Top row: logo + language toggle */}
        <div className="flex items-center justify-between mb-10">
          <Image
            src="https://ueeshop.ly200-cdn.com/u_file/UPAO/UPAO310/2010/photo/0d6812b65e.png"
            alt="SEI Robotics"
            width={140}
            height={40}
            className="h-10 w-auto brightness-0 invert"
            unoptimized
          />
          <LanguageToggle />
        </div>

        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full bg-brand-500/20 px-4 py-1.5 text-sm font-medium text-brand-300 ring-1 ring-brand-400/30">
            {t('badge')}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Claude Code{' '}
          <span className="text-brand-400">{t('subtitle')}</span>
        </h1>

        {/* Description */}
        <p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-surface-300"
          dangerouslySetInnerHTML={{ __html: t('desc') }}
        />

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#prerequisites"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-brand-400/25"
          >
            {t('cta1')}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </a>

          <a
            href="#quick-ref"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20 border border-white/10"
          >
            {t('cta2')}
          </a>

          <a
            href="#scenarios"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20 border border-white/10"
          >
            {t('cta3')}
          </a>

          <Link
            href="/esafenet"
            locale={locale}
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20 border border-white/10"
          >
            {t('cta4')}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
