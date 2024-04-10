import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface DashboardType {
  dashboardId: string;
}

interface DashboardState {
  dashboardItems: DashboardType[];
}

const initialState: DashboardState = {
  dashboardItems: [{ dashboardId: 'first' }],
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addNewDashboard: (state, action: PayloadAction<DashboardType>) => {
      state.dashboardItems.push(action.payload);
    },
  },
});

export const { addNewDashboard } = dashboardSlice.actions;
export const selectDashboard = (state: RootState) =>
  state.dashboard.dashboardItems;
export default dashboardSlice.reducer;
