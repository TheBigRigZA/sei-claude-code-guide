import { useTranslations } from 'next-intl';
import SectionHeading from '@/components/layout/SectionHeading';
import StepCard from '@/components/ui/StepCard';
import CodeBlock from '@/components/ui/CodeBlock';
import AlertBox from '@/components/ui/AlertBox';

export default function LaunchVerify() {
  const t = useTranslations('verify');

  return (
    <section>
      <SectionHeading number={5} title={t('title')} id="verify" />

      <div className="rounded-2xl bg-white shadow-sm border border-surface-200 divide-y divide-surface-100">
        {/* Step 1 */}
        <div className="p-4 sm:p-6">
          <StepCard
            number={1}
            title={t('step1')}
            description={t('step1Note')}
          />
        </div>

        {/* Step 2 */}
        <div className="p-4 sm:p-6">
          <StepCard
            number={2}
            title={t('step2')}
          >
            <CodeBlock code={`cd your-project-folder\nclaude`} language="bash" />
          </StepCard>
        </div>

        {/* Step 3 */}
        <div className="p-4 sm:p-6">
          <StepCard
            number={3}
            title={t('step3')}
            description={t('step3Note')}
          >
            <CodeBlock code="/logout" />
          </StepCard>
        </div>

        {/* Step 4 */}
        <div className="p-4 sm:p-6">
          <StepCard
            number={4}
            title={t('step4')}
            description={t('step4Note')}
          >
            <CodeBlock code="/status" />
          </StepCard>
        </div>

        {/* Step 5 */}
        <div className="p-4 sm:p-6">
          <StepCard
            number={5}
            title={t('step5')}
            description={t('step5Note')}
          >
            <CodeBlock code="What files are in this directory?" />
          </StepCard>
        </div>
      </div>

      <div className="mt-6">
        <AlertBox variant="success">
          {t('success')}
        </AlertBox>
      </div>
    </section>
  );
}
