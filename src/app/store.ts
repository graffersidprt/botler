import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import BotlerUserReducer from '../features/Authentication/BotlerUserSlice';

export const store = configureStore({
    reducer: {
        BotlerUser: BotlerUserReducer,
    },
  });

  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >;
