'use client';

import { useChat } from 'ai/react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

const markdownComponents: Components = {
  code({ className, children, ...rest }) {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm" {...rest}>
          {children}
        </code>
      );
    }
    return (
      <code className={`${className ?? ''}`} {...rest}>
        {children}
      </code>
    );
  },
  pre({ children }) {
    return (
      <pre className="bg-surface-950 text-green-400 rounded-lg p-3 overflow-x-auto my-2 text-sm border border-white/[0.06]">
        {children}
      </pre>
    );
  },
  ul({ children }) {
    return <ul className="list-disc pl-5 space-y-1 my-2">{children}</ul>;
  },
  ol({ children }) {
    return <ol className="list-decimal pl-5 space-y-1 my-2">{children}</ol>;
  },
  a({ href, children }) {
    return (
      <a
        href={href}
        className="text-accent-400 underline underline-offset-2 hover:text-accent-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  },
  p({ children }) {
    return <p className="my-1.5 leading-relaxed">{children}</p>;
  },
};

function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 justify-start">
      <div className="max-w-[80%] rounded-[1rem_1rem_1rem_0.25rem] bg-white/[0.06] px-4 py-3 text-surface-200">
        <div className="flex items-center gap-1">
          <span className="typing-dot" />
          <span className="typing-dot" />
          <span className="typing-dot" />
        </div>
        <style>{`
          .typing-dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: var(--color-surface-500, #64748b);
            animation: bounce-dot 1.2s infinite ease-in-out;
          }
          .typing-dot:nth-child(2) { animation-delay: 0.15s; }
          .typing-dot:nth-child(3) { animation-delay: 0.3s; }
          @keyframes bounce-dot {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-6px); }
          }
        `}</style>
      </div>
    </div>
  );
}

export default function AiChat() {
  const t = useTranslations('ai');
  const locale = useLocale();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      api: '/api/chat',
      body: { locale },
    });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <section id="ai-tools" className="scroll-mt-8">
      <div className="flex items-center gap-4 mb-8">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-sm font-bold text-accent-400 font-mono">
          06
        </span>
        <h2 className="text-2xl font-display font-bold text-white sm:text-3xl">
          {t('title')}
        </h2>
      </div>

      <p className="mb-6 text-surface-400 leading-relaxed">{t('desc')}</p>

      <div className="rounded-2xl glass-strong overflow-hidden">
        <div
          className="max-h-[500px] overflow-y-auto p-4 sm:p-6 space-y-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {messages.length === 0 && (
            <div className="flex items-start gap-3 justify-start">
              <div className="max-w-[80%] rounded-[1rem_1rem_1rem_0.25rem] bg-white/[0.06] px-4 py-3 text-surface-200">
                <p className="leading-relaxed">{t('welcome')}</p>
              </div>
            </div>
          )}

          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 ${
                    isUser
                      ? 'rounded-[1rem_1rem_0.25rem_1rem] bg-accent-600 text-white'
                      : 'rounded-[1rem_1rem_1rem_0.25rem] bg-white/[0.06] text-surface-200'
                  }`}
                >
                  {isUser ? (
                    <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  ) : (
                    <div className="prose-sm max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        {error && (
          <div className="mx-4 sm:mx-6 mb-2 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2 text-sm text-red-400">
            {error.message || t('errorNetwork')}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-white/[0.06] p-3 sm:p-4"
        >
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder={t('placeholder')}
            className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-surface-500 outline-none focus:border-accent-500/40 focus:ring-2 focus:ring-accent-500/10 transition-colors"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="shrink-0 rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {t('send')}
          </button>
        </form>
      </div>
    </section>
  );
}
