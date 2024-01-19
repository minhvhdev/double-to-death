import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';

import { createRoom } from '@common/redux/slices/peer.slice';
import { TRootState } from '@common/redux/store';

type IndexPageProps = {};

const BASE_URL = '/games/black-jack';

const IndexPage = (props: IndexPageProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { test } = useSelector((state: TRootState) => state.peer);

  const handleSinglePlay = () => {
    router.push(`${BASE_URL}/single-play`);
  };

  const handleCreateRoom = () => {
    dispatch(createRoom());
  };

  const handleJoinRoom = () => {
    router.push('/black-jack/single-play');
  };

  return (
    <div className="flex flex-col">
      <button onClick={handleSinglePlay} tabIndex={0}>
        Single Play
      </button>
      <button onClick={handleCreateRoom}>Create Room</button>
      <button onClick={handleJoinRoom}>Join Room</button>
      {test}
    </div>
  );
};

export default IndexPage;
