import {
  Action,
  Reducer,
  ThunkAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';

import { encryptTransform } from '@common/helpers/redux.helper';
import blackJackReducer from '@bj/redux/blackJackReducer';
import { peerReducer, playerReducer } from './slices';

const persistConfig = {
  key: 'root',
  storage,
  // transforms: [encryptTransform()],
};

//Add Reducers here
const rootReducer = combineReducers({
  peer: peerReducer,
  player: playerReducer,
  blackJack: blackJackReducer,
});

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer as Reducer<unknown, Action>,
);

const makeStore = () => {
  if (typeof window === 'undefined') {
    const emptyStore = configureStore({
      reducer: combineReducers({}),
    });
    return {
      ...emptyStore,
      persistor: persistStore(emptyStore),
    };
  }
  const storeWithOutPersistor = {
    ...configureStore({
      reducer: persistedReducer,
    }),
    // __persistor: persistStore(store),
  };
  const store = {
    ...storeWithOutPersistor,
    persistor: persistStore(storeWithOutPersistor),
  };
  return store;
};

const rootStore = configureStore({
  reducer: rootReducer,
});

export type TRootState = ReturnType<typeof rootStore.getState>;
export type AppStore = ReturnType<typeof makeStore>;

const storeWrapper = createWrapper<AppStore>(makeStore);

export default storeWrapper;
