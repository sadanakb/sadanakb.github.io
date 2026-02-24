import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return defaultLang;
}

export function t(lang: Lang, key: string): string {
  return ui[lang][key] || ui[defaultLang][key] || key;
}

export function getLocalePath(lang: Lang, anchor: string = ''): string {
  const prefix = lang === defaultLang ? '' : '/en';
  return `${prefix}/${anchor}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'de' ? 'en' : 'de';
}
