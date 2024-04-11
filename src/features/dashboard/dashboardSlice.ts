import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export interface DashboardType {
  dashboardId: string;
  title: string;
}

interface DashboardState {
  dashboards: DashboardType[];
}

const initialState: DashboardState = {
  dashboards: [
    { dashboardId: 'first', title: 'My first dashboard' },
    { dashboardId: 'second', title: 'My second dashboard' },
  ],
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addNewDashboard: (state, action: PayloadAction<DashboardType>) => {
      state.dashboards.push(action.payload);
    },
    updateDashboardName: (state, action: PayloadAction<DashboardType>) => {
      state.dashboards.map((dashboard) => {
        if (dashboard.dashboardId === action.payload.dashboardId) {
          return (dashboard.title = action.payload.title);
        }
      });
    },
  },
});

export const { addNewDashboard, updateDashboardName } = dashboardSlice.actions;
export const selectDashboard = (state: RootState) => state.dashboard.dashboards;
export default dashboardSlice.reducer;
