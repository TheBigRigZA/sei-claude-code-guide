'use client';

import { useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import NavigationGrid from '@/components/layout/NavigationGrid';
import Footer from '@/components/layout/Footer';
import StickyLanguageToggle from '@/components/layout/StickyLanguageToggle';
import BackToTop from '@/components/ui/BackToTop';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ExpandableSection from '@/components/ui/ExpandableSection';
import { ToastProvider } from '@/components/ui/Toast';

import Introduction from '@/components/sections/Introduction';
import Prerequisites from '@/components/sections/Prerequisites';
import OpenRouterKey from '@/components/sections/OpenRouterKey';
import InstallGuide from '@/components/sections/InstallGuide';
import ConfigureEnvVars from '@/components/sections/ConfigureEnvVars';
import LaunchVerify from '@/components/sections/LaunchVerify';
import PluginsSkills from '@/components/sections/PluginsSkills';
import BestPracticeCombos from '@/components/sections/BestPracticeCombos';
import DepartmentTools from '@/components/sections/DepartmentTools';
import AiChat from '@/components/sections/AiChat';
import Scenarios from '@/components/sections/Scenarios';
import QuickReference from '@/components/sections/QuickReference';
import TipsBestPractices from '@/components/sections/TipsBestPractices';
import Troubleshooting from '@/components/sections/Troubleshooting';

function GettingStartedSection() {
  const t = useTranslations();

  return (
    <div id="getting-started" className="space-y-6 scroll-mt-8">
      <ExpandableSection
        id="prerequisites"
        number="01"
        title={t('prereq.title')}
        description={t('prereq.summary')}
        defaultExpanded
      >
        <Prerequisites />
      </ExpandableSection>

      <ExpandableSection
        id="api-key"
        number="02"
        title={t('key.title')}
        description={t('key.summary')}
      >
        <OpenRouterKey />
      </ExpandableSection>

      <ExpandableSection
        id="install"
        number="03"
        title={t('install.title')}
        description={t('install.summary')}
      >
        <InstallGuide />
      </ExpandableSection>

      <ExpandableSection
        id="configure"
        number="04"
        title={t('config.title')}
        description={t('config.summary')}
      >
        <ConfigureEnvVars />
      </ExpandableSection>

      <ExpandableSection
        id="verify"
        number="05"
        title={t('verify.title')}
        description={t('verify.summary')}
      >
        <LaunchVerify />
      </ExpandableSection>
    </div>
  );
}

export default function HomePage() {
  const locale = useLocale();
  const t = useTranslations();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <ToastProvider>
      <Header locale={locale} />

      <main className="mx-auto max-w-6xl px-6 py-16 space-y-20">
        {/* Introduction */}
        <ScrollReveal>
          <Introduction />
        </ScrollReveal>

        {/* Navigation Grid */}
        <ScrollReveal>
          <NavigationGrid />
        </ScrollReveal>

        {/* Getting Started — Expandable Sections */}
        <ScrollReveal>
          <div className="space-y-3">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mb-8">
              {t('nav.setup')}
            </h2>
            <GettingStartedSection />
          </div>
        </ScrollReveal>

        {/* Plugins & Skills */}
        <ScrollReveal>
          <PluginsSkills />
        </ScrollReveal>

        {/* Best Practice Combos */}
        <ScrollReveal>
          <BestPracticeCombos />
        </ScrollReveal>

        {/* Department Tools */}
        <ScrollReveal>
          <DepartmentTools />
        </ScrollReveal>

        {/* Scenarios */}
        <ScrollReveal>
          <Scenarios />
        </ScrollReveal>

        {/* AI Chat */}
        <ScrollReveal>
          <AiChat />
        </ScrollReveal>

        {/* Quick Reference */}
        <ScrollReveal>
          <QuickReference />
        </ScrollReveal>

        {/* Tips & Best Practices */}
        <ScrollReveal>
          <TipsBestPractices />
        </ScrollReveal>

        {/* Troubleshooting */}
        <ScrollReveal>
          <section id="troubleshooting" className="scroll-mt-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-sm font-bold text-accent-400 font-mono">
                08
              </span>
              <h2 className="text-2xl font-display font-bold text-white sm:text-3xl">
                {t('trouble.title')}
              </h2>
            </div>
            <Troubleshooting />
          </section>
        </ScrollReveal>
      </main>

      <Footer />
      <StickyLanguageToggle />
      <BackToTop />
    </ToastProvider>
  );
}
