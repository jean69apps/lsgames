import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pt from './locales/pt.json'
import en from './locales/en.json'
import es from './locales/es.json'

const getSavedLanguage = () => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('language') || 'pt-BR'
    }
  } catch (error) {
    console.warn('Erro ao acessar localStorage:', error)
  }
  return 'pt-BR'
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'pt-BR': { translation: pt },
      'en': { translation: en },
      'es': { translation: es },
    },
    lng: getSavedLanguage(),
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
