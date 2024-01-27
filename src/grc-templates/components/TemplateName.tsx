import styles from './TemplateName.css';

type Props = {
  edit?: string;
};

const TemplateName = (props: Props) => {
  const { edit } = props;

  return (
    <div className={styles.templateName}>
      <div>{edit}</div>
    </div>
  );
};

export default TemplateName;
