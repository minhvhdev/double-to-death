import { ArrowDownLeft, Skull } from '@phosphor-icons/react';

import { ASSET_COMMON_IMG } from '@common/constants';
import styles from './Logo.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img
        className={styles.img}
        src={`${ASSET_COMMON_IMG}//logo.svg`}
        alt="logo"
      />
      <span className={styles.text}>
        <span>Double</span>
        <span className={styles.toWord}>
          To <ArrowDownLeft />
        </span>
        <Skull className={styles.skullIcon} />
      </span>
    </div>
  );
};

export default Logo;
