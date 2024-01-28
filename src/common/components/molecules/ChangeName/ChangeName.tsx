import { useState } from 'react';

import { Pencil } from '@phosphor-icons/react';

import { Button } from '@common/components/atoms';
import { useSelector } from '@common/redux/store';

import { AddNameModal } from '..';

const ChangeName = () => {
  const { name } = useSelector((state) => state.player);
  const [open, setOpen] = useState(false);

  const handleEdit = () => setOpen(true);

  return (
    <>
      <Button onClick={handleEdit}>
        {name}
        <Pencil />
      </Button>

      <AddNameModal open={open} setOpen={setOpen} />
    </>
  );
};

export default ChangeName;
