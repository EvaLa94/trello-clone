import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface DashboardState {
  list: string[];
}

const initialState: DashboardState = {
  list: [],
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addNewListItem: (state, action: PayloadAction<string>) => {
      state.list.push(action.payload);
    },
  },
});

export const { addNewListItem } = dashboardSlice.actions;
export const selectDashboard = (state: RootState) => state.dashboard.list;
export default dashboardSlice.reducer;
