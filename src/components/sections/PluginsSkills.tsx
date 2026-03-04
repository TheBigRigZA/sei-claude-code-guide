'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type CategoryKey = 'catDev' | 'catQuality' | 'catResearch' | 'catGit' | 'catTest' | 'catPlan' | 'catLang';

interface Plugin {
  key: string;
  installName: string;
  category: CategoryKey;
}

const plugins: Plugin[] = [
  { key: 'featureDev', installName: 'feature-dev', category: 'catDev' },
  { key: 'frontendDesign', installName: 'frontend-design', category: 'catDev' },
  { key: 'playground', installName: 'playground', category: 'catDev' },
  { key: 'codeReview', installName: 'code-review', category: 'catQuality' },
  { key: 'prReviewToolkit', installName: 'pr-review-toolkit', category: 'catQuality' },
  { key: 'codeSimplifier', installName: 'code-simplifier', category: 'catQuality' },
  { key: 'context7', installName: 'context7', category: 'catResearch' },
  { key: 'firecrawl', installName: 'firecrawl', category: 'catResearch' },
  { key: 'claudeMd', installName: 'claude-md-management', category: 'catResearch' },
  { key: 'commitCommands', installName: 'commit-commands', category: 'catGit' },
  { key: 'github', installName: 'github', category: 'catGit' },
  { key: 'playwright', installName: 'playwright', category: 'catTest' },
  { key: 'superpowers', installName: 'superpowers', category: 'catPlan' },
  { key: 'typescriptLsp', installName: 'typescript-lsp', category: 'catLang' },
  { key: 'pyrightLsp', installName: 'pyright-lsp', category: 'catLang' },
];

const categories: CategoryKey[] = ['catDev', 'catQuality', 'catResearch', 'catGit', 'catTest', 'catPlan', 'catLang'];

const categoryIcons: Record<CategoryKey, string> = {
  catDev: '{ }',
  catQuality: '✓',
  catResearch: '◎',
  catGit: '⑂',
  catTest: '▶',
  catPlan: '◈',
  catLang: 'Ts',
};

export default function PluginsSkills() {
  const t = useTranslations('plugins');
  const [activeCategory, setActiveCategory] = useState<CategoryKey | 'all'>('all');

  const filteredPlugins = activeCategory === 'all'
    ? plugins
    : plugins.filter(p => p.category === activeCategory);

  return (
    <section id="plugins" className="scroll-mt-8">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-4 mx-auto max-w-3xl text-surface-300 leading-relaxed">
          {t('desc')}
        </p>
      </div>

      {/* Install hints */}
      <div className="mb-8 space-y-3">
        <div className="rounded-xl glass p-4 flex items-center gap-3 text-sm">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 font-mono text-xs font-bold">
            $
          </span>
          <span className="text-surface-400">
            {t('installHint')}{' '}
            <code className="text-accent-300 font-mono">claude plugin add &lt;plugin-name&gt;</code>
          </span>
        </div>
        <div className="rounded-xl glass p-4 flex items-start gap-3 text-sm">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-glow-500/10 text-glow-400 font-mono text-xs font-bold">
            ★
          </span>
          <div className="text-surface-400">
            <span>{t('marketplaceHint')}</span>
            <code className="block mt-2 text-accent-300 font-mono bg-surface-950/50 rounded-lg px-3 py-2 text-xs">
              /install-plugin marketplace add anthropics/claude-code
            </code>
          </div>
        </div>
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
            activeCategory === 'all'
              ? 'bg-accent-500/20 text-accent-300 ring-1 ring-accent-400/30'
              : 'bg-white/[0.03] text-surface-400 hover:bg-white/[0.06] hover:text-surface-300'
          }`}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-accent-500/20 text-accent-300 ring-1 ring-accent-400/30'
                : 'bg-white/[0.03] text-surface-400 hover:bg-white/[0.06] hover:text-surface-300'
            }`}
          >
            {t(cat)}
          </button>
        ))}
      </div>

      {/* Plugin cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPlugins.map(({ key, installName, category }) => (
          <div
            key={key}
            className="group rounded-xl glass-strong p-6 transition-all duration-300 hover:bg-white/[0.08] hover:glow-accent"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 font-mono text-xs font-bold transition-colors group-hover:bg-accent-500/20">
                  {categoryIcons[category]}
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">
                    {t(key)}
                  </h3>
                  <span className="text-[11px] font-mono text-surface-500">
                    {installName}
                  </span>
                </div>
              </div>
              <span className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-surface-500 uppercase tracking-wider">
                {t(category)}
              </span>
            </div>
            <p className="text-sm text-surface-400 leading-relaxed">
              {t(`${key}Desc`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
