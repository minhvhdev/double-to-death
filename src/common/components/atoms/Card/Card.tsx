import React from 'react';

import { twMerge } from 'tailwind-merge';

import { TReactChild, TReactHTMLDiv } from '@common/types';
import styles from './Card.css';

type Props = TReactHTMLDiv & {
  children: TReactChild;
  title?: string;
};

const Card = React.memo((props: Props) => {
  const { children, className, title, ...args } = props;
  return (
    <div className={twMerge(styles.card, className)} {...args}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.content}>{children}</div>
    </div>
  );
});
Card.displayName = 'Card';

export default Card;
