'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? (localStorage.getItem('theme') as 'light' | 'dark' | null) : null;
    if (stored) {
      setTheme(stored);
      applyTheme(stored);
      return;
    }
    setTheme('system');
    applyTheme('system');
  }, []);

  function applyTheme(next: 'light' | 'dark' | 'system') {
    const root = document.documentElement;
    if (next === 'system') {
      root.removeAttribute('data-theme');
    } else if (next === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
  }

  function onChange(next: 'light' | 'dark' | 'system') {
    setTheme(next);
    if (next === 'system') localStorage.removeItem('theme');
    else localStorage.setItem('theme', next);
    applyTheme(next);
  }

  return (
    <div className="inline-flex items-center gap-2 text-sm">
      <label className="text-neutral-600">Theme</label>
      <select
        value={theme}
        onChange={(e) => onChange(e.target.value as 'light' | 'dark' | 'system')}
        className="rounded border px-2 py-1"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
