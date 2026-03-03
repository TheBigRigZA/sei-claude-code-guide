'use client';

import { useChat } from 'ai/react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import SectionHeading from '@/components/layout/SectionHeading';

// ---------------------------------------------------------------------------
// Markdown component overrides for assistant messages
// ---------------------------------------------------------------------------
const markdownComponents: Components = {
  code({ className, children, ...rest }) {
    const isInline = !className;
    if (isInline) {
      return (
        <code
          className="bg-surface-200 px-1.5 py-0.5 rounded text-sm"
          {...rest}
        >
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
      <pre className="bg-surface-900 text-green-400 rounded-lg p-3 overflow-x-auto my-2 text-sm">
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
        className="text-brand-600 underline underline-offset-2 hover:text-brand-700"
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

// ---------------------------------------------------------------------------
// Typing indicator (3 bouncing dots)
// ---------------------------------------------------------------------------
function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 justify-start">
      <div
        className="max-w-[80%] rounded-[1rem_1rem_1rem_0.25rem] bg-surface-100 px-4 py-3 text-surface-800"
      >
        <div className="flex items-center gap-1">
          <span className="typing-dot" />
          <span className="typing-dot" />
          <span className="typing-dot" />
        </div>

        {/* Keyframes for bouncing animation */}
        <style>{`
          .typing-dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: var(--color-surface-400, #94a3b8);
            animation: bounce-dot 1.2s infinite ease-in-out;
          }
          .typing-dot:nth-child(2) { animation-delay: 0.15s; }
          .typing-dot:nth-child(3) { animation-delay: 0.3s; }
          @keyframes bounce-dot {
            0%, 60%, 100% {
              transform: translateY(0);
            }
            30% {
              transform: translateY(-6px);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// AiChat section component
// ---------------------------------------------------------------------------
export default function AiChat() {
  const t = useTranslations('ai');
  const locale = useLocale();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      api: '/api/chat',
      body: { locale },
    });

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <section>
      <SectionHeading number={8} title={t('title')} id="ai-chat" />

      <p className="mb-6 text-surface-600 leading-relaxed">{t('desc')}</p>

      {/* Chat container */}
      <div className="rounded-2xl border border-surface-200 bg-white overflow-hidden">
        {/* Messages area */}
        <div
          className="max-h-[500px] overflow-y-auto p-4 sm:p-6 space-y-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* Welcome message when empty */}
          {messages.length === 0 && (
            <div className="flex items-start gap-3 justify-start">
              <div className="max-w-[80%] rounded-[1rem_1rem_1rem_0.25rem] bg-surface-100 px-4 py-3 text-surface-800">
                <p className="leading-relaxed">{t('welcome')}</p>
              </div>
            </div>
          )}

          {/* Rendered messages */}
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${
                  isUser ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 ${
                    isUser
                      ? 'rounded-[1rem_1rem_0.25rem_1rem] bg-brand-600 text-white'
                      : 'rounded-[1rem_1rem_1rem_0.25rem] bg-surface-100 text-surface-800'
                  }`}
                >
                  {isUser ? (
                    <p className="leading-relaxed whitespace-pre-wrap">
                      {msg.content}
                    </p>
                  ) : (
                    <div className="prose-sm max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={markdownComponents}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Typing indicator */}
          {isLoading && <TypingIndicator />}

          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>

        {/* Error display */}
        {error && (
          <div className="mx-4 sm:mx-6 mb-2 rounded-lg bg-red-50 border border-red-200 px-4 py-2 text-sm text-red-700">
            {error.message || t('errorNetwork')}
          </div>
        )}

        {/* Input area */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-surface-200 p-3 sm:p-4"
        >
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder={t('placeholder')}
            className="flex-1 rounded-lg border border-surface-300 bg-white px-4 py-2.5 text-sm text-surface-900 placeholder:text-surface-400 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-colors"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="shrink-0 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {t('send')}
          </button>
        </form>
      </div>
    </section>
  );
}
