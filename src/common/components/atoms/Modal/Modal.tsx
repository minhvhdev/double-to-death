import React, { useEffect, useMemo, useState } from 'react';

import { X } from '@phosphor-icons/react';

import { TReactChild } from '@common/types';
import styles from './Modal.css';

import { Button } from '..';

type Props = {
  children: TReactChild;
  open: boolean;
  onClose: () => void;
  title?: TReactChild;
  showClose?: boolean;
};

const Modal = React.memo((props: Props) => {
  const { children, open, onClose, title, showClose = true } = props;
  const [isOpen, setIsOpen] = useState(false);

  const openClass = useMemo(() => (isOpen ? '' : styles.close), [isOpen]);

  const handleOnClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    if (open) {
      setIsOpen(open);
    }
  }, [open]);

  return (
    <>
      {open && (
        <div className={`${styles.modal} ${openClass}`}>
          <button
            type="button"
            title="backdrop"
            className="backdrop"
            onClick={handleOnClose}
            onKeyDown={handleOnClose}
          />
          <div className={`${styles.modalContent} `}>
            <div className={styles.title}>{title}</div>
            {showClose && (
              <Button
                className={styles.closeButton}
                title="close"
                color="transparent"
                onClick={handleOnClose}
              >
                <X />
              </Button>
            )}
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
});
Modal.displayName = 'Modal';

export default Modal;
