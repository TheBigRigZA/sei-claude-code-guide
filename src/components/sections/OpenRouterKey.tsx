import { useTranslations } from 'next-intl';
import SectionHeading from '@/components/layout/SectionHeading';
import StepCard from '@/components/ui/StepCard';
import AlertBox from '@/components/ui/AlertBox';

export default function OpenRouterKey() {
  const t = useTranslations('key');

  const steps = [
    { number: 1, title: t('step1'), description: t('step1Note') },
    { number: 2, title: t('step2'), description: undefined },
    { number: 3, title: t('step3'), description: t('step3Note') },
    { number: 4, title: t('step4'), description: t('step4Note') },
    { number: 5, title: t('step5'), description: t('step5Note') },
  ];

  return (
    <section>
      <SectionHeading number={2} title={t('title')} id="api-key" />

      <div className="rounded-2xl bg-white shadow-sm border border-surface-200 divide-y divide-surface-100">
        {steps.map((step) => (
          <div key={step.number} className="p-4 sm:p-6">
            <StepCard
              number={step.number}
              title={step.title}
              description={step.description}
            />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <AlertBox variant="warning">
          {t('security')}
        </AlertBox>
      </div>
    </section>
  );
}
