import React, { useCallback, useMemo, useState } from 'react';

import { t } from 'i18next';

import { Input } from '@common/components/atoms';
import { debounce } from '@common/helpers';
import { actAddName } from '@common/redux/slices/player.slice';
import { useDispatch, useSelector } from '@common/redux/store';
import { TEventInput, TSetState } from '@common/types';

import { Modal } from '..';

type Props = {
  open?: boolean;
  setOpen?: TSetState<boolean>;
};

const AddNameModal = React.memo((props: Props) => {
  const { open, setOpen } = props;
  const { name } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleOnClose = useCallback(() => {
    setOpen?.(false);
  }, [setOpen]);

  const handleInput = debounce<TEventInput>((e) => {
    const value = e.target.value;
    setInputValue(value);
  });

  const handleSubmit = () => {
    dispatch(actAddName(inputValue));
  };

  const condition = useMemo(() => {
    return open !== undefined
      ? {
          open,
          onClose: handleOnClose,
        }
      : {
          open: Boolean(!name),
          onClose: undefined,
        };
  }, [open, handleOnClose, name]);

  return (
    <Modal
      open={condition.open}
      onClose={condition.onClose}
      onSubmit={handleSubmit}
      title={t('common.home.add_name_title')}
    >
      <Input
        autoFocus
        placeholder={t('common.home.add_name_placeholder')}
        onChange={handleInput}
        defaultValue={name}
      />
    </Modal>
  );
});
AddNameModal.displayName = 'AddNameModal';

export default AddNameModal;
