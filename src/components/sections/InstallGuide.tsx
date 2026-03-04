'use client';

import { useTranslations } from 'next-intl';
import Tabs from '@/components/ui/Tabs';
import StepCard from '@/components/ui/StepCard';
import CodeBlock from '@/components/ui/CodeBlock';
import Badge from '@/components/ui/Badge';
import AlertBox from '@/components/ui/AlertBox';

const osTabs = [
  { id: 'mac', label: 'macOS' },
  { id: 'linux', label: 'Linux / WSL' },
  { id: 'windows', label: 'Windows' },
];

export default function InstallGuide() {
  const t = useTranslations('install');

  return (
    <Tabs tabs={osTabs} defaultTab="mac">
      {(activeTab) => {
        if (activeTab === 'mac') {
          return (
            <div className="space-y-6">
              <StepCard
                number={1}
                title={
                  <span className="flex items-center gap-2">
                    {t('macNativeTitle')}{' '}
                    <Badge variant="success">{t('macNativeRecommended')}</Badge>
                  </span>
                }
                description={t('macNativeDesc')}
              >
                <CodeBlock code={t('macNativeCmd')} language="bash" />
              </StepCard>

              <StepCard
                number={2}
                title={t('macBrewTitle')}
                description={t('macBrewDesc')}
              >
                <CodeBlock code={t('macBrewCmd')} language="bash" />
              </StepCard>
            </div>
          );
        }

        if (activeTab === 'linux') {
          return (
            <div className="space-y-6">
              <StepCard
                number={1}
                title={
                  <span className="flex items-center gap-2">
                    {t('linuxTitle')}{' '}
                    <Badge variant="success">{t('linuxRecommended')}</Badge>
                  </span>
                }
                description={t('linuxDesc')}
              >
                <CodeBlock code={t('linuxCmd')} language="bash" />
              </StepCard>
            </div>
          );
        }

        return (
          <div className="space-y-6">
            <AlertBox variant="info">
              {t('winPrereq')}
            </AlertBox>

            <StepCard
              number={1}
              title={
                <span className="flex items-center gap-2">
                  {t('winPsTitle')}{' '}
                  <Badge variant="success">{t('winPsRecommended')}</Badge>
                </span>
              }
            >
              <CodeBlock code={t('winPsCmd')} language="powershell" />
            </StepCard>

            <StepCard number={2} title={t('winCmdTitle')}>
              <CodeBlock code={t('winCmdCmd')} language="bash" />
            </StepCard>

            <StepCard
              number={3}
              title={t('winGetTitle')}
              description={t('winGetDesc')}
            >
              <CodeBlock code={t('winGetCmd')} language="powershell" />
            </StepCard>

            <StepCard
              number={4}
              title={t('winWslTitle')}
              description={t('winWslDesc')}
            />
          </div>
        );
      }}
    </Tabs>
  );
}
