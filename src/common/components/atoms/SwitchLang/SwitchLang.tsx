import { useTranslation } from 'react-i18next';

import { LANGUAGE } from '@common/constants';

import { Button } from '..';

const SwitchLang = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === LANGUAGE.EN) {
      i18n.changeLanguage(LANGUAGE.VI);
    } else {
      i18n.changeLanguage(LANGUAGE.EN);
    }
  };

  return (
    <Button aria-label="Change language" onClick={changeLanguage}>
      {i18n.language}
    </Button>
  );
};

export default SwitchLang;
