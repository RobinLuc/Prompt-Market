export type Locale = 'en' | 'zh';

export const dictionaries: Record<Locale, Record<string, string>> = {
  en: {
    app_title: 'Prompt Market',
    search_title: 'Browse Prompts',
    filters: 'Filters',
    theme: 'Theme',
    login: 'Login',
    register: 'Create account',
  },
  zh: {
    app_title: 'Prompt 市场',
    search_title: '浏览 Prompts',
    filters: '筛选',
    theme: '主题',
    login: '登录',
    register: '注册账号',
  },
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
