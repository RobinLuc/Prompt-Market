'use client';
import { useI18n } from '@/components/I18nProvider';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as any)}
      className="rounded border px-2 py-1"
      aria-label="Language"
    >
      <option value="en">EN</option>
      <option value="zh">中文</option>
    </select>
  );
}
