// Dependencies
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Locales
import en from './locales/en.json'

// Interfaces
import { Language } from '../interfaces';

const resources = {
  en: { translation: en },
}

const language = localStorage.getItem('language') || Language.En

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: Language.En,
  interpolation: {
    escapeValue: false
  }
})

export const setLanguage = (lang: Language): void => {
  i18n.changeLanguage(lang)
  localStorage.setItem('language', lang)
}

export default i18n
