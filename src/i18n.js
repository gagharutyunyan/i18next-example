import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

import translationAM from "./locales/am/translation.json";
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";

const resources = {
    en: {
        translation: translationEN
    },
    am: {
        translation: translationAM
    },
    ru: {
        translation: translationRU
    }
}


export const languages = Object.entries(resources).map(([lang]) => lang)

export const removeLngPrefix = (pathname) => {
    for (let lang of languages) {
        if(pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`) {
            return pathname.replace(`/${lang}`, '')
        }
    }
    return pathname
}

export const getLngFromUrl = pathname => {
    for (let lang of languages) {
        if (pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`) {
            return lang;
        }
    }
    return null;
};

const lng = getLngFromUrl(window.location.pathname) || i18n.language;

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: "am",
    resources,
    detection: {
        caches: ['cookie']
    },
    lng
})

export default i18n;