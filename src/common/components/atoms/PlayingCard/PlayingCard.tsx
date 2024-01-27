import { ASSET_PLAYING_CARDS } from '@common/constants';
import styles from './PlayingCard.css';

type Props = {
  name: string;
  review?: boolean;
};

const PlayingCard = (props: Props) => {
  const { name, review = true } = props;
  return (
    <div className={styles.playingCard}>
      {review ? (
        <img src={`${ASSET_PLAYING_CARDS}/${name}.svg`} alt={name} />
      ) : (
        <img src={`${ASSET_PLAYING_CARDS}/back_card.svg`} alt={name} />
      )}
    </div>
  );
};

export default PlayingCard;
