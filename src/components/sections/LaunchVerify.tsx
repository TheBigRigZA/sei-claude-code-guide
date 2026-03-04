'use client';

import { useTranslations } from 'next-intl';
import StepCard from '@/components/ui/StepCard';
import CodeBlock from '@/components/ui/CodeBlock';
import AlertBox from '@/components/ui/AlertBox';

export default function LaunchVerify() {
  const t = useTranslations('verify');

  return (
    <div className="space-y-4">
      <StepCard number={1} title={t('step1')} description={t('step1Note')} />

      <StepCard number={2} title={t('step2')}>
        <CodeBlock code={`cd your-project-folder\nclaude`} language="bash" />
      </StepCard>

      <StepCard number={3} title={t('step3')} description={t('step3Note')}>
        <CodeBlock code="/logout" />
      </StepCard>

      <StepCard number={4} title={t('step4')} description={t('step4Note')}>
        <CodeBlock code="/status" />
      </StepCard>

      <StepCard number={5} title={t('step5')} description={t('step5Note')}>
        <CodeBlock code="What files are in this directory?" />
      </StepCard>

      <AlertBox variant="success">
        {t('success')}
      </AlertBox>
    </div>
  );
}
