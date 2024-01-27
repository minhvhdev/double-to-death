import { useEffect, useRef } from 'react';

import { PlayingCard } from '@common/components/atoms';
import { DISPLAY_RATIO_CARD } from '@common/constants';
import { TPlayingCard } from '@common/types';
import styles from './RowCards.css';

type Props = {
  cards: TPlayingCard[];
  review: boolean;
  showCards?: number[];
};

const RowCards = (props: Props) => {
  const { cards, review, showCards } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const height = containerRef.current.clientHeight;
    const width = (height / DISPLAY_RATIO_CARD) * cards.length;
    containerRef.current.style.width = `${width}px`;
  }, [cards]);

  return (
    <div className={styles.container}>
      <div
        className={styles.rowCards}
        ref={containerRef}
      >
        {cards.map((card, index) => (
          <div
            key={card.name}
            className={styles.card}
          >
            <PlayingCard
              name={card.name}
              review={review || showCards?.includes(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RowCards;
