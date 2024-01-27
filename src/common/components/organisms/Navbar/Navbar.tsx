import { useTranslation } from 'react-i18next';

import { Logo, SwitchLang, SwitchTheme, Input } from '@common/components/atoms';
import { ChangeName } from '@common/components/molecules';
import { TBlurInput } from '@common/types';
import styles from './Navbar.css';

type Props = {
  onSearch: (searchText: string) => void;
};

const Navbar = (props: Props) => {
  const { onSearch } = props;
  const { t } = useTranslation();

  const handleSearch: TBlurInput = (e) => {
    const searchText = e.target.value;
    onSearch(searchText);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logoName}>
        <Logo />
      </div>
      <Input
        onBlur={handleSearch}
        placeholder={t('common.home.search_placeholder')}
        width={22}
      />
      <div className={styles.switch}>
        <SwitchLang />
        <SwitchTheme />
        <ChangeName />
      </div>
    </div>
  );
};

export default Navbar;
