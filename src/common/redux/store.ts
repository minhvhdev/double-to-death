import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as useOriginalDispatch,
  useSelector as useOriginalSelector,
} from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { encryptTransform } from '@common/helpers/redux.helper';
import blackJackReducer from '@bj/redux/blackJackReducer';
import { peerReducer, playerReducer, configReducer } from './slices';

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptTransform()],
};

//Add Reducers here
const rootReducer = combineReducers({
  config: configReducer,
  peer: peerReducer,
  player: playerReducer,
  blackJack: blackJackReducer,
});
type RootReducer = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer<RootReducer>(
  persistConfig,
  rootReducer,
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

type TRootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
const useDispatch: DispatchFunc = useOriginalDispatch;
const useSelector: TypedUseSelectorHook<TRootState> = useOriginalSelector;

export { store, persistor, useDispatch, useSelector };
