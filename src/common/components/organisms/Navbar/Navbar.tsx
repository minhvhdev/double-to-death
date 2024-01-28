import { t } from 'i18next';

import { Logo, SwitchLang, SwitchTheme, Input } from '@common/components/atoms';
import { ChangeName } from '@common/components/molecules';
import { debounce } from '@common/helpers';
import { TEventInput } from '@common/types';
import styles from './Navbar.css';

type Props = {
  onSearch: (searchText: string) => void;
};

const Navbar = (props: Props) => {
  const { onSearch } = props;

  const handleSearch = debounce<TEventInput>((e) => {
    const searchText = e.target.value;
    onSearch(searchText);
  });

  return (
    <div className={styles.navbar}>
      <div className={styles.logoName}>
        <Logo />
      </div>
      <Input
        onChange={handleSearch}
        placeholder={t('common.home.search_placeholder')}
        width={360}
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
