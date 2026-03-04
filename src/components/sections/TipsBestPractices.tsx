'use client';

import { useTranslations } from 'next-intl';
import InfoCard from '@/components/ui/InfoCard';

export default function TipsBestPractices() {
  const t = useTranslations('tips');

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-sm font-bold text-accent-400">
          *
        </span>
        <h2 className="text-2xl font-display font-bold text-white sm:text-3xl">
          {t('title')}
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <InfoCard icon="$" title={t('cost')} description={t('costDesc')} />
        <InfoCard icon="^" title={t('update')} description={t('updateDesc')} />
        <InfoCard icon="~" title={t('failover')} description={t('failoverDesc')} />
        <InfoCard icon="#" title={t('keys')} description={t('keysDesc')} />
      </div>
    </section>
  );
}
