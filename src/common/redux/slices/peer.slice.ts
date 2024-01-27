import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Peer from 'peerjs';

import { TPeer } from '@common/types/peer.type';

const initialState: TPeer = {
  peer: null,
  connection: null,
  test: 0,
};

const peerSlice = createSlice({
  name: 'game-play',
  initialState,
  reducers: {
    createRoom: (state) => {
      // import('peerjs').then(({ default: Peer }) => {
      //   state.peer = new Peer();
      // });
      state.peer = new Peer();
      console.log(123);
      state.test = state.test + 1;
    },
    joinRoom: (state, { payload }: PayloadAction<null>) => {
      state.connection = payload;
    },
  },
});

export const { createRoom, joinRoom } = peerSlice.actions;
export default peerSlice.reducer;
