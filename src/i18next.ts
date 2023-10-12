import i18next from 'i18next';
import en_language from './constants/locals/en.json';
import fn_language from './constants/locals/fr.json';

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: en_language,
    },
    fr: {
      translation: fn_language,
    },
  },
  interpolation: {
    escapeValue: false, // React already does escaping
    format: function (value, format, lng) {
      if (format === 'translate') {
        // Extract the language tag from the value (e.g., "(FR) Bonjour")
        const languageTag = value.match(/^\((\w+)\)\s(.+)$/);
        if (languageTag && languageTag[1] && languageTag[2]) {
          const language = languageTag[1].toLowerCase();
          const textToTranslate = languageTag[2];
          // Translate the text based on the detected language tag
          return i18next.t(textToTranslate, { lng: language });
        }
      }
      return value;
    },
  },
});

export default i18next;
