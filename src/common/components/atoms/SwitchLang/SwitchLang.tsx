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
    <Button width={36} height={36} onClick={changeLanguage}>
      {i18n.language}
    </Button>
  );
};

export default SwitchLang;
