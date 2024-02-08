import { LANGUAGE } from '@common/constants';
import i18n from '@locales/index';

import { Button } from '..';

const SwitchLang = () => {
  const changeLanguage = () => {
    if (i18n.language === LANGUAGE.EN) {
      i18n.changeLanguage(LANGUAGE.VI);
    } else {
      i18n.changeLanguage(LANGUAGE.EN);
    }
  };

  return (
    <Button w={36} h={36} onClick={changeLanguage}>
      {i18n.language}
    </Button>
  );
};

export default SwitchLang;
