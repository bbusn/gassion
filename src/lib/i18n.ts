import { init, register, locale, t } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('fr', () => import('./locales/fr.json'));

let initialLocale: string;

if (typeof window !== 'undefined') {
    const userLocale = navigator.language.split('-')[0];
    const supportedLocales = ['en', 'fr'];
    initialLocale = supportedLocales.includes(userLocale) ? userLocale : 'fr';
} else {
    initialLocale = 'fr';
}

init({
    fallbackLocale: 'en',
    initialLocale,
});

locale.set(initialLocale);
  
export { t, locale };