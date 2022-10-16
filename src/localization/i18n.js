import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './enTranslation.json'
import bnTranslation from './bnTranslation.json'
// import { getDefaultLang } from '../utils/functions'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {}
}

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    // init with resources
    resources: {
      en: {
        translations: enTranslation
      },
      bn: {
        translations: bnTranslation
      }
    },
    fallbackLng: 'en',
    debug: true,

    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
      format: function (value, format, lng) {
        if (format === 'number') {
          return new Intl.NumberFormat(lng).format(value)
        }
      }
    },
    lng: 'en'
  })

export default i18n