import { useLocale } from 'next-intl';
import Header from '@/components/layout/Header';
import TableOfContents from '@/components/layout/TableOfContents';
import Footer from '@/components/layout/Footer';
import StickyLanguageToggle from '@/components/layout/StickyLanguageToggle';
import BackToTop from '@/components/ui/BackToTop';
import { ToastProvider } from '@/components/ui/Toast';
import Prerequisites from '@/components/sections/Prerequisites';
import OpenRouterKey from '@/components/sections/OpenRouterKey';
import InstallGuide from '@/components/sections/InstallGuide';
import ConfigureEnvVars from '@/components/sections/ConfigureEnvVars';
import LaunchVerify from '@/components/sections/LaunchVerify';
import Troubleshooting from '@/components/sections/Troubleshooting';
import DepartmentTools from '@/components/sections/DepartmentTools';
import AiChat from '@/components/sections/AiChat';
import Scenarios from '@/components/sections/Scenarios';
import QuickReference from '@/components/sections/QuickReference';
import TipsBestPractices from '@/components/sections/TipsBestPractices';

export default function HomePage() {
  const locale = useLocale();

  return (
    <ToastProvider>
      <Header locale={locale} />

      <main className="mx-auto max-w-5xl px-6 py-12 space-y-16">
        <TableOfContents />
        <Prerequisites />
        <OpenRouterKey />
        <InstallGuide />
        <ConfigureEnvVars />
        <LaunchVerify />
        <Troubleshooting />
        <DepartmentTools />
        <AiChat />
        <Scenarios />
        <QuickReference />
        <TipsBestPractices />
      </main>

      <Footer />
      <StickyLanguageToggle />
      <BackToTop />
    </ToastProvider>
  );
}
