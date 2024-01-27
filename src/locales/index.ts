import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EN from './en.json';
import VI from './vi.json';

const resources = {
  en: {
    translation: EN,
  },
  vi: {
    translation: VI,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
