'use client';

import { useState, useCallback } from 'react';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export default function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 bg-surface-700 hover:bg-surface-600 text-white rounded-md px-2.5 py-1.5 text-xs font-medium transition-all active:scale-[0.92] ${className}`}
      title="Copy to clipboard"
      type="button"
    >
      {/* Copy icon */}
      <svg
        className={`w-3.5 h-3.5 absolute transition-opacity duration-150 ${copied ? 'opacity-0' : 'opacity-100'}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2" />
        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeWidth="2" />
      </svg>

      {/* Check icon */}
      <svg
        className={`w-3.5 h-3.5 absolute text-green-400 transition-opacity duration-150 ${copied ? 'opacity-100' : 'opacity-0'}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
      </svg>

      <span className="ml-5">{copied ? 'Copied!' : 'Copy'}</span>
    </button>
  );
}
