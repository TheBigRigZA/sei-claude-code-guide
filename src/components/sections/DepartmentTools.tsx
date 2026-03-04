'use client';

import { useTranslations, useLocale } from 'next-intl';
import Tabs from '@/components/ui/Tabs';
import CodeBlock from '@/components/ui/CodeBlock';
import { departmentTools, type DepartmentId } from '@/data/department-tools';

export default function DepartmentTools() {
  const t = useTranslations('dept');
  const locale = useLocale();

  const tabs = [
    { id: 'android', label: t('tabAndroid') },
    { id: 'apk', label: t('tabApk') },
    { id: 'embedded', label: t('tabEmbedded') },
    { id: 'smart', label: t('tabSmart') },
    { id: 'cloud', label: t('tabCloud') },
  ];

  return (
    <section id="dept-tools" className="scroll-mt-8">
      <div className="flex items-center gap-4 mb-8">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-sm font-bold text-accent-400 font-mono">
          04
        </span>
        <h2 className="text-2xl font-display font-bold text-white sm:text-3xl">
          {t('title')}
        </h2>
      </div>

      <p className="text-surface-400 mb-6">{t('desc')}</p>

      <Tabs tabs={tabs} defaultTab="android">
        {(activeTab) => {
          const tools = departmentTools[activeTab as DepartmentId];
          if (!tools) return null;

          return (
            <div className="grid sm:grid-cols-2 gap-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-200 hover:bg-white/[0.05]"
                >
                  <h4 className="font-semibold text-sm text-white mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-surface-500 mb-3">
                    {tool.desc[locale as 'en' | 'zh']}
                  </p>
                  <CodeBlock code={tool.cmd} language="bash" />
                </div>
              ))}
            </div>
          );
        }}
      </Tabs>
    </section>
  );
}
