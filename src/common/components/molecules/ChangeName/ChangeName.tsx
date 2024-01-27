import { useState } from 'react';

import { Pencil } from '@phosphor-icons/react';

import { Button } from '@common/components/atoms';
import { useSelector } from '@common/redux/store';
import styles from './ChangeName.css';

import { AddNameModal } from '..';

const ChangeName = () => {
  const { name } = useSelector((state) => state.player);
  const [open, setOpen] = useState(false);

  const handleEdit = () => setOpen(true);

  return (
    <>
      <div className={styles.changeName}>
        <Button>
          {name}
          <Pencil onClick={handleEdit} />
        </Button>
      </div>

      <AddNameModal isEdit open={open} setOpen={setOpen} />
    </>
  );
};

export default ChangeName;
