import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-surface-200 bg-surface-50 py-8">
      <p className="text-center text-sm text-surface-400">
        {t('updated')}
      </p>
    </footer>
  );
}
