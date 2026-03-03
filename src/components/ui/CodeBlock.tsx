'use client';

import CopyButton from './CopyButton';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="group relative cursor-pointer">
      <pre
        className="bg-surface-900 text-green-400 rounded-lg p-4 pr-16 text-sm leading-relaxed overflow-x-auto border border-transparent transition-all duration-150 group-hover:shadow-[0_0_0_2px_rgba(59,108,255,0.25)] group-hover:border-brand-500/30"
      >
        <code className={language ? `language-${language}` : undefined}>
          {code}
        </code>
      </pre>
      <CopyButton
        text={code}
        className="absolute top-2.5 right-2.5"
      />
    </div>
  );
}
