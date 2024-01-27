import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { EPlayerStatus } from '@common/enums/player.enum';
import { TReduxPlayer } from '@common/types';

const initialState: TReduxPlayer = {
  name: '',
  status: EPlayerStatus.IDLE,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    actInitPlayerInfo: (state) => {
      state.name = '';
    },
    actAddName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
  },
});

const playerReducer = playerSlice.reducer;
export const { actInitPlayerInfo, actAddName } = playerSlice.actions;
export default playerReducer;
