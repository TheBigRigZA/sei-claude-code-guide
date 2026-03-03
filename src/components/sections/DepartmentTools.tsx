'use client';

import { useTranslations, useLocale } from 'next-intl';
import SectionHeading from '@/components/layout/SectionHeading';
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
    <section>
      <SectionHeading number={7} title={t('title')} id="dept-tools" />

      <p className="text-surface-600 mb-6">{t('desc')}</p>

      <Tabs tabs={tabs} defaultTab="android">
        {(activeTab) => {
          const tools = departmentTools[activeTab as DepartmentId];
          if (!tools) return null;

          return (
            <div className="grid sm:grid-cols-2 gap-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-xl border border-surface-200 bg-surface-50 p-4 transition-all duration-200 hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
                >
                  <h4 className="font-semibold text-sm text-surface-900 mb-1">
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
