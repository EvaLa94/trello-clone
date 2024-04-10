import { configureStore } from '@reduxjs/toolkit';

import dashboardReducer from '../features/dashboard/dashboardSlice';
import listItemReducer from '../features/listItem/listItemSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    listItem: listItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
