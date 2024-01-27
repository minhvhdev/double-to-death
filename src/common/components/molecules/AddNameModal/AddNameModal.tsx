import React, {
  FocusEventHandler,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { useTranslation } from 'react-i18next';

import { Button, Input, Modal } from '@common/components/atoms';
import { doNothing } from '@common/helpers/other.helper';
import { actAddName } from '@common/redux/slices/player.slice';
import { useDispatch, useSelector } from '@common/redux/store';
import { TSetState } from '@common/types';
import styles from './AddNameModal.css';

type Props = {
  isEdit?: boolean;
  open?: boolean;
  setOpen?: TSetState<boolean>;
};

const AddNameModal = React.memo((props: Props) => {
  const { isEdit, open, setOpen } = props;
  const { name } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState('');

  const handleOnClose = useCallback(() => {
    setOpen?.(false);
  }, [setOpen]);

  const handleBlurInput: FocusEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = () => {
    dispatch(actAddName(inputValue));
    isEdit && setOpen && setOpen(false);
  };

  const condition = useMemo(() => {
    return isEdit
      ? {
          open: open as boolean,
          onClose: handleOnClose,
        }
      : {
          open: Boolean(!name),
          onClose: doNothing,
        };
  }, [isEdit, open, handleOnClose, name]);

  return (
    <Modal
      open={condition.open}
      onClose={condition.onClose}
      title={t('common.home.add_name_title')}
    >
      <div className={styles.addNameModal}>
        <Input
          placeholder={t('common.home.add_name_placeholder')}
          onBlur={handleBlurInput}
        />
        <Button onClick={handleSubmit}>{t('common.update_button')}</Button>
      </div>
    </Modal>
  );
});
AddNameModal.displayName = 'AddNameModal';

export default AddNameModal;
