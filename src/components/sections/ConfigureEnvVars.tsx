'use client';

import { useTranslations } from 'next-intl';
import Tabs from '@/components/ui/Tabs';
import StepCard from '@/components/ui/StepCard';
import CodeBlock from '@/components/ui/CodeBlock';
import Badge from '@/components/ui/Badge';
import AlertBox from '@/components/ui/AlertBox';

const envTabs = [
  { id: 'unix', label: 'macOS / Linux / WSL' },
  { id: 'win', label: 'Windows' },
];

const unixExportLines = `# Claude Code — OpenRouter Configuration
export OPENROUTER_API_KEY="sk-or-v1-YOUR_KEY_HERE"
export ANTHROPIC_BASE_URL="https://openrouter.ai/api"
export ANTHROPIC_AUTH_TOKEN="$OPENROUTER_API_KEY"
export ANTHROPIC_API_KEY=""`;

const winPsLines = `[System.Environment]::SetEnvironmentVariable("OPENROUTER_API_KEY", "sk-or-v1-YOUR_KEY_HERE", "User")
[System.Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "https://openrouter.ai/api", "User")
[System.Environment]::SetEnvironmentVariable("ANTHROPIC_AUTH_TOKEN", "sk-or-v1-YOUR_KEY_HERE", "User")
[System.Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", "", "User")`;

const envVarRows = [
  { name: 'OPENROUTER_API_KEY', value: 'sk-or-v1-YOUR_KEY_HERE' },
  { name: 'ANTHROPIC_BASE_URL', value: 'https://openrouter.ai/api' },
  { name: 'ANTHROPIC_AUTH_TOKEN', value: 'sk-or-v1-YOUR_KEY_HERE' },
  { name: 'ANTHROPIC_API_KEY', value: '(empty string)' },
];

export default function ConfigureEnvVars() {
  const t = useTranslations('config');

  return (
    <div>
      <p className="text-surface-400 mb-8">{t('desc')}</p>

      <Tabs tabs={envTabs} defaultTab="unix">
        {(activeTab) => {
          if (activeTab === 'unix') {
            return (
              <div className="space-y-8">
                <StepCard number={1} title={t('unixStep1')}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-medium text-surface-500 mb-2">{t('zshLabel')}</p>
                      <CodeBlock code="nano ~/.zshrc" language="bash" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-surface-500 mb-2">{t('bashLabel')}</p>
                      <CodeBlock code="nano ~/.bashrc" language="bash" />
                    </div>
                  </div>
                </StepCard>

                <StepCard number={2} title={t('unixStep2')}>
                  <p className="text-sm text-glow-400 font-medium mb-3">
                    Replace <code className="bg-glow-500/10 px-1.5 py-0.5 rounded text-glow-300">sk-or-v1-YOUR_KEY_HERE</code> with your actual API key.
                  </p>
                  <CodeBlock code={unixExportLines} language="bash" />
                </StepCard>

                <StepCard number={3} title={t('unixStep3')} />

                <StepCard number={4} title={t('unixStep4')}>
                  <CodeBlock code="source ~/.zshrc    # or: source ~/.bashrc" language="bash" />
                </StepCard>
              </div>
            );
          }

          return (
            <div className="space-y-8">
              <StepCard
                number={1}
                title={
                  <span className="flex items-center gap-2">
                    {t('winPsTitle')}{' '}
                    <Badge variant="success">{t('winPsRecommended')}</Badge>
                  </span>
                }
              >
                <p className="text-sm text-glow-400 font-medium mb-3">
                  Replace <code className="bg-glow-500/10 px-1.5 py-0.5 rounded text-glow-300">sk-or-v1-YOUR_KEY_HERE</code> with your actual API key.
                </p>
                <CodeBlock code={winPsLines} language="powershell" />
                <p className="text-sm text-surface-400 mt-3">{t('winPsAfter')}</p>
              </StepCard>

              <hr className="border-white/[0.06]" />

              <StepCard number={2} title={t('winGuiTitle')}>
                <ol className="list-decimal list-inside text-sm text-surface-300 space-y-2 mb-4">
                  <li>{t('winGuiStep1')}</li>
                  <li>{t('winGuiStep2')}</li>
                  <li>{t('winGuiStep3')}</li>
                </ol>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-white/[0.06] rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-white/[0.03]">
                        <th className="text-left px-4 py-2 font-semibold text-surface-300 border-b border-white/[0.06]">Variable Name</th>
                        <th className="text-left px-4 py-2 font-semibold text-surface-300 border-b border-white/[0.06]">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {envVarRows.map((row) => (
                        <tr key={row.name} className="border-b border-white/[0.04] last:border-b-0">
                          <td className="px-4 py-2 font-mono text-xs text-white">{row.name}</td>
                          <td className="px-4 py-2 font-mono text-xs text-surface-400">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-surface-400 mt-3">{t('winGuiAfter')}</p>
              </StepCard>
            </div>
          );
        }}
      </Tabs>

      <div className="mt-6">
        <AlertBox variant="error">
          {t('warning')}
        </AlertBox>
      </div>
    </div>
  );
}
