'use client';

import { useTranslations } from 'next-intl';
import CodeBlock from '@/components/ui/CodeBlock';

export default function Recommendations() {
  const t = useTranslations('esafenet');

  return (
    <section>
      <div id="recommendations" className="flex items-center gap-4 scroll-mt-24 mb-8">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700 text-sm font-bold shadow-md shadow-green-500/10">
          &#10003;
        </span>
        <h2 className="text-2xl font-bold text-surface-900 sm:text-3xl">
          {t('s4.title')}
        </h2>
      </div>

      {/* Option A */}
      <div className="rounded-2xl border border-surface-200 bg-white shadow-sm overflow-hidden mb-6">
        <div className="bg-green-50 border-b border-green-200 px-6 py-4 flex items-center gap-3">
          <span className="text-xs text-green-700 bg-green-100 rounded-full px-2.5 py-0.5 font-bold">
            {t('s4.a.tag')}
          </span>
          <h3 className="font-bold text-surface-900">{t('s4.a.title')}</h3>
        </div>
        <div className="p-6 sm:p-8 space-y-4">
          <p className="text-sm text-surface-700">{t('s4.a.desc')}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-surface-200 rounded-lg overflow-hidden">
              <thead className="bg-surface-100">
                <tr>
                  <th className="text-left px-4 py-2.5 font-semibold text-surface-700">{t('s4.a.th1')}</th>
                  <th className="text-left px-4 py-2.5 font-semibold text-surface-700">{t('s4.a.th2')}</th>
                  <th className="text-left px-4 py-2.5 font-semibold text-surface-700">{t('s4.a.th3')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs font-semibold">node.exe</td>
                  <td className="px-4 py-2.5 text-surface-600 text-xs">{t('s4.a.node')}</td>
                  <td className="px-4 py-2.5 font-mono text-xs">{t('s4.a.nodeExt')}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs font-semibold">git.exe</td>
                  <td className="px-4 py-2.5 text-surface-600 text-xs">{t('s4.a.git')}</td>
                  <td className="px-4 py-2.5 font-mono text-xs">{t('s4.a.sameExt')}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs font-semibold">bash.exe / sh.exe</td>
                  <td className="px-4 py-2.5 text-surface-600 text-xs">{t('s4.a.bash')}</td>
                  <td className="px-4 py-2.5 font-mono text-xs">{t('s4.a.sameExt')}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs font-semibold">cmd.exe</td>
                  <td className="px-4 py-2.5 text-surface-600 text-xs">{t('s4.a.cmd')}</td>
                  <td className="px-4 py-2.5 font-mono text-xs">{t('s4.a.sameExt')}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs font-semibold">powershell.exe</td>
                  <td className="px-4 py-2.5 text-surface-600 text-xs">{t('s4.a.ps')}</td>
                  <td className="px-4 py-2.5 font-mono text-xs">{t('s4.a.sameExt')}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs font-semibold">python.exe / python3.exe</td>
                  <td className="px-4 py-2.5 text-surface-600 text-xs">{t('s4.a.py')}</td>
                  <td className="px-4 py-2.5 font-mono text-xs">{t('s4.a.pyExt')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Option B */}
      <div className="rounded-2xl border border-surface-200 bg-white shadow-sm overflow-hidden mb-6">
        <div className="bg-surface-50 border-b border-surface-200 px-6 py-4">
          <h3 className="font-bold text-surface-900">{t('s4.b.title')}</h3>
        </div>
        <div className="p-6 sm:p-8 space-y-4">
          <p className="text-sm text-surface-700">{t('s4.b.desc')}</p>
          <CodeBlock
            code={`# Directories to exclude from encryption
node_modules\\          # npm dependencies (thousands of files)
.git\\                  # Git internal data
.claude\\               # Claude Code config and cache
%APPDATA%\\claude\\      # Claude Code app data
%TEMP%\\                # Temporary files`}
          />
        </div>
      </div>

      {/* Option C */}
      <div className="rounded-2xl border border-surface-200 bg-white shadow-sm overflow-hidden mb-6">
        <div className="bg-surface-50 border-b border-surface-200 px-6 py-4">
          <h3 className="font-bold text-surface-900">{t('s4.c.title')}</h3>
        </div>
        <div className="p-6 sm:p-8 space-y-4">
          <p className="text-sm text-surface-700">{t('s4.c.desc')}</p>
          <ul className="text-sm text-surface-700 space-y-2 list-disc list-inside">
            <li>{t('s4.c.1')}</li>
            <li>{t('s4.c.2')}</li>
            <li>{t('s4.c.3')}</li>
            <li>{t('s4.c.4')}</li>
          </ul>
          <p className="text-sm text-surface-700">{t('s4.c.note')}</p>
        </div>
      </div>

      {/* Option D */}
      <div className="rounded-2xl border border-surface-200 bg-white shadow-sm overflow-hidden">
        <div className="bg-surface-50 border-b border-surface-200 px-6 py-4">
          <h3 className="font-bold text-surface-900">{t('s4.d.title')}</h3>
        </div>
        <div className="p-6 sm:p-8 space-y-4">
          <p className="text-sm text-surface-700">{t('s4.d.desc')}</p>
        </div>
      </div>
    </section>
  );
}
