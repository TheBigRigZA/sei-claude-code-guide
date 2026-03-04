'use client';

import { useTranslations } from 'next-intl';
import Accordion from '@/components/ui/Accordion';
import { Link } from '@/i18n/navigation';

export default function Troubleshooting() {
  const t = useTranslations('trouble');

  const authItems = t.raw('authItems') as string[];
  const creditsItems = t.raw('creditsItems') as string[];
  const notfoundItems = t.raw('notfoundItems') as string[];
  const envItems = t.raw('envItems') as string[];
  const proxyItems = t.raw('proxyItems') as string[];

  return (
    <div className="rounded-2xl glass-strong divide-y divide-white/[0.04]">
      <Accordion title={t('auth')}>
        <ul className="list-disc pl-5 space-y-1">
          {authItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Accordion>

      <Accordion title={t('credits')}>
        <ul className="list-disc pl-5 space-y-1">
          {creditsItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Accordion>

      <Accordion title={t('notfound')}>
        <ul className="list-disc pl-5 space-y-1">
          {notfoundItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Accordion>

      <Accordion title={t('env')}>
        <ul className="list-disc pl-5 space-y-1">
          {envItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Accordion>

      <Accordion title={t('proxy')}>
        <ul className="list-disc pl-5 space-y-1">
          {proxyItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Accordion>

      <Accordion title={t('esafenet')}>
        <p className="mb-3">{t('esafenetDesc')}</p>
        <Link
          href="/esafenet"
          className="text-accent-400 hover:underline font-medium"
        >
          {t('esafenetLink')}
        </Link>
      </Accordion>
    </div>
  );
}
