import { useTranslations } from 'next-intl';
import SectionHeading from '@/components/layout/SectionHeading';
import InfoCard from '@/components/ui/InfoCard';

export default function Prerequisites() {
  const t = useTranslations('prereq');

  return (
    <section>
      <SectionHeading number={1} title={t('title')} id="prerequisites" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <InfoCard
          icon="🌐"
          title={t('internet')}
          description={t('internetDesc')}
        />
        <InfoCard
          icon="💻"
          title={t('terminal')}
          description={t('terminalDesc')}
        />
        <InfoCard
          icon="🔑"
          title={t('account')}
          description={t('accountDesc')}
        />
        <InfoCard
          icon="📦"
          title={t('git')}
          description={t('gitDesc')}
        />
      </div>
    </section>
  );
}
