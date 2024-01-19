import dynamic from 'next/dynamic';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TypedActionCreator } from '@reduxjs/toolkit/dist/mapBuilders';
import { HYDRATE } from 'next-redux-wrapper';
import Peer from 'peerjs';

import { EPlayerStatus } from '@common/enums/player.enum';
import { genId } from '@common/helpers';
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
    joinRoom: (state, { payload }: PayloadAction<string>) => {
      // state.connection = ;
    },
  },
  extraReducers: (builder) => {
    builder.addCase<TypedActionCreator<string>>(
      HYDRATE as unknown as TypedActionCreator<string>,
      (state, action: PayloadAction<Partial<TPeer>>) => {
        return { ...state, ...action.payload };
      },
    );
  },
});

export const { createRoom, joinRoom } = peerSlice.actions;
export default peerSlice.reducer;
