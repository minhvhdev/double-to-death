import { IconButton } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { LANGUAGE } from '@common/constants';

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
    <IconButton
      aria-label="Change language"
      onClick={changeLanguage}
      icon={<span>{i18n.language}</span>}
      fontSize={'1rem'}
    />
  );
};

export default SwitchLang;
