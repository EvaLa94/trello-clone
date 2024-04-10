import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface DashboardType {
  dashboardId: string;
}

interface DashboardState {
  dashboards: DashboardType[];
}

const initialState: DashboardState = {
  dashboards: [{ dashboardId: 'first' }],
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addNewDashboard: (state, action: PayloadAction<DashboardType>) => {
      state.dashboards.push(action.payload);
    },
  },
});

export const { addNewDashboard } = dashboardSlice.actions;
export const selectDashboard = (state: RootState) => state.dashboard.dashboards;
export default dashboardSlice.reducer;
