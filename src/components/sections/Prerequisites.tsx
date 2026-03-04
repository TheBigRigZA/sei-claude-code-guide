'use client';

import { useTranslations } from 'next-intl';
import InfoCard from '@/components/ui/InfoCard';

export default function Prerequisites() {
  const t = useTranslations('prereq');

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <InfoCard icon="~" title={t('internet')} description={t('internetDesc')} />
      <InfoCard icon=">" title={t('terminal')} description={t('terminalDesc')} />
      <InfoCard icon="*" title={t('account')} description={t('accountDesc')} />
      <InfoCard icon="#" title={t('git')} description={t('gitDesc')} />
    </div>
  );
}
