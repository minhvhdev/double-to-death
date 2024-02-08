import { BJ_ROUTERS } from '@routers/game-routers/bj.router';
import { t } from 'i18next';

import { Button, Input } from '@common/components/atoms';
import styles from './BjLobbyPage.css';

const BjLobbyPage = () => {
  return (
    <div className={styles.wrapper}>
      <Button to={BJ_ROUTERS.SINGLE} w="100%" h={100}>
        {t('common.single_player')}
      </Button>
      <Button to={BJ_ROUTERS.CREATE} w="100%" h={100}>
        {t('common.create_room')}
      </Button>
      <Button w="100%" h={100}>
        {t('common.join_room')}
      </Button>
    </div>
  );
};

export default BjLobbyPage;
