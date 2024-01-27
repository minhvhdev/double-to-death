import { TReactChild, TReactHTMLDiv } from '@common/types';
import styles from './Card.css';

type Props = TReactHTMLDiv & {
  children: TReactChild;
};

const Card = (props: Props) => {
  const { children, ...args } = props;
  return (
    <div className={styles.card} {...args}>
      {children}
    </div>
  );
};

export default Card;
