'use client';

import { useTranslations } from 'next-intl';
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
    <div className="space-y-4">
      {steps.map((step) => (
        <StepCard
          key={step.number}
          number={step.number}
          title={step.title}
          description={step.description}
        />
      ))}

      <AlertBox variant="warning">
        {t('security')}
      </AlertBox>
    </div>
  );
}
