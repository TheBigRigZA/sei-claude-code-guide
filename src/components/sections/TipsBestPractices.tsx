import { useTranslations } from 'next-intl';
import InfoCard from '@/components/ui/InfoCard';

export default function TipsBestPractices() {
  const t = useTranslations('tips');

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-100 text-brand-700 font-bold text-lg">
          ⚙
        </span>
        <h2 className="text-2xl font-bold text-surface-900 sm:text-3xl">
          {t('title')}
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <InfoCard
          icon="💰"
          title={t('cost')}
          description={t('costDesc')}
        />
        <InfoCard
          icon="🔄"
          title={t('update')}
          description={t('updateDesc')}
        />
        <InfoCard
          icon="🔀"
          title={t('failover')}
          description={t('failoverDesc')}
        />
        <InfoCard
          icon="🔒"
          title={t('keys')}
          description={t('keysDesc')}
        />
      </div>
    </section>
  );
}
