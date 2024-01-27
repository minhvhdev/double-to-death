import { Link } from 'react-router-dom';

import { ASSET_COMMON_IMG } from '@common/constants';
import styles from './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img
        className={styles.img}
        src={`${ASSET_COMMON_IMG}/logo.svg`}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
