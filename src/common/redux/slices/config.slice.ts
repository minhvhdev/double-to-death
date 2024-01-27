import { createSlice } from '@reduxjs/toolkit';

import { ETheme } from '@common/enums';
import { TReduxSystem } from '@common/types';

const initialState: TReduxSystem = {
  theme: ETheme.LIGHT,
};

const configSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    actSwitchTheme: (state) => {
      if (state.theme === ETheme.LIGHT) {
        state.theme = ETheme.DARK;
      } else {
        state.theme = ETheme.LIGHT;
      }
    },
  },
});

const configReducer = configSlice.reducer;
export const { actSwitchTheme } = configSlice.actions;
export default configReducer;
