'use client';

import { useTranslations } from 'next-intl';
import SectionHeading from '@/components/layout/SectionHeading';
import InfoCard from '@/components/ui/InfoCard';

export default function WhatIsEsafenet() {
  const t = useTranslations('esafenet');

  return (
    <section>
      <SectionHeading number={1} title={t('s1.title')} id="what-is-esafenet" />
      <div className="rounded-2xl border border-surface-200 bg-white shadow-sm p-6 sm:p-8 space-y-4">
        <p
          className="text-surface-700"
          dangerouslySetInnerHTML={{ __html: t('s1.p1') }}
        />
        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          <InfoCard
            icon="🔐"
            title={t('s1.card1.title')}
            description={t('s1.card1.desc')}
          />
          <InfoCard
            icon="📋"
            title={t('s1.card2.title')}
            description={t('s1.card2.desc')}
          />
          <InfoCard
            icon="🛡️"
            title={t('s1.card3.title')}
            description={t('s1.card3.desc')}
          />
        </div>
      </div>
    </section>
  );
}
