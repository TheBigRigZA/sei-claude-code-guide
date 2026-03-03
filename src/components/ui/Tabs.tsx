'use client';

import { useState, type ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  children: (activeTab: string) => ReactNode;
}

export default function Tabs({ tabs, defaultTab, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0]?.id ?? '');

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex border-b border-surface-200 mb-0 gap-1" role="tablist">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={isActive}
              className={`rounded-t-lg border border-b-0 px-5 py-2.5 text-sm font-semibold transition ${
                isActive
                  ? 'border-surface-200 bg-brand-50 text-brand-500'
                  : 'border-transparent text-surface-500 hover:text-surface-700'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="rounded-b-2xl rounded-tr-2xl border border-surface-200 bg-white shadow-sm p-6 sm:p-8">
        {children(activeTab)}
      </div>
    </div>
  );
}
