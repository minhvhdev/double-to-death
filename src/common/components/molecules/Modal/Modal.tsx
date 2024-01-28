import React, { useEffect, useMemo, useState } from 'react';

import { X } from '@phosphor-icons/react';
import { t } from 'i18next';

import { TIME_OUT } from '@common/constants';
import { KEY_ENTER, KEY_ESC } from '@common/constants/keyboard.constant';
import { withConditionRender } from '@common/HOCs';
import { useKeyboard } from '@common/hooks';
import { TReactChild } from '@common/types';
import styles from './Modal.css';

import { Button } from '../../atoms';

type Props = {
  title?: TReactChild;
  children: TReactChild;
  open: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  onCancel?: () => void;
};

const ModalMemo = React.memo((props: Props) => {
  const { children, open, onClose, title, onSubmit, onCancel } = props;
  const [isOpen, setIsOpen] = useState(false);

  const openClass = useMemo(() => (isOpen ? '' : styles.close), [isOpen]);

  const closeModalWithEffectTimeout = () => {
    if (!onClose) return;
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, TIME_OUT.TRANSITION);
  };

  const handleSubmit = () => {
    onSubmit?.();
    closeModalWithEffectTimeout();
  };

  const handleCancel = () => {
    onCancel?.();
    closeModalWithEffectTimeout();
  };

  useEffect(() => {
    if (open) {
      setIsOpen(open);
    }
  }, [open]);

  useKeyboard(KEY_ESC, () => {
    closeModalWithEffectTimeout();
  });
  useKeyboard(KEY_ENTER, handleSubmit, true);

  return (
    <div className={`${styles.modal} ${openClass}`}>
      <button
        type="button"
        title="backdrop"
        className="backdrop"
        onClick={closeModalWithEffectTimeout}
        onKeyDown={closeModalWithEffectTimeout}
      />
      <div className={`${styles.modalContent} `}>
        <div className={styles.title}>{title}</div>
        {onClose && (
          <Button
            className={styles.closeButton}
            title="close"
            color="transparent"
            onClick={closeModalWithEffectTimeout}
          >
            <X />
          </Button>
        )}
        <div>{children}</div>
        <div className={styles.footer}>
          {onSubmit && (
            <Button onClick={handleSubmit} id="modal-confirm">
              {t('common.confirm_button')}
            </Button>
          )}
          {onCancel && (
            <Button onClick={handleCancel}>{t('common.cancel_button')}</Button>
          )}
        </div>
      </div>
    </div>
  );
});
ModalMemo.displayName = 'Modal';

const Modal = withConditionRender(ModalMemo);

export default Modal;
