import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Card } from '@common/components/atoms';
import { Navbar } from '@common/components/organisms';
import { ASSET_COMMON_IMG } from '@common/constants';
import { DATA_GAMES } from '@common/data/games.data';
import styles from './HomePage.css';

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [games, setGames] = useState(DATA_GAMES);

  const handleSearch = (searchText: string) => {
    setGames(
      DATA_GAMES.filter(({ name }) =>
        t(`common.${name}`).toLowerCase().includes(searchText.toLowerCase()),
      ),
    );
  };

  return (
    <div className={styles.wrapper}>
      <Navbar onSearch={handleSearch} />
      <div className={styles.games}>
        {games.map(({ name, url }) => (
          <Card
            onClick={() => navigate(`/games/${url}`)}
            key={name}
            className={styles.game}
          >
            <div>{t(`common.${name}`)}</div>

            <img src={`${ASSET_COMMON_IMG}/bj.png`} alt={name} height="100%" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
