import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export interface ListItemType {
  listId: string;
  dashboardId: string;
  title: string;
}

interface ListItemState {
  listItems: ListItemType[];
}

const initialState: ListItemState = {
  listItems: [
    { listId: '1', dashboardId: 'first', title: 'Hello world' },
    { listId: '2', dashboardId: 'first', title: 'Hello world * 2' },
    { listId: '3', dashboardId: 'second', title: 'Hello world' },
  ],
};

export const listItemSlice = createSlice({
  name: 'listItem',
  initialState,
  reducers: {
    addNewListItem: (state, action: PayloadAction<ListItemType>) => {
      state.listItems.push(action.payload);
    },
  },
});

export const { addNewListItem } = listItemSlice.actions;
export const selectListItems = (state: RootState) => state.listItem.listItems;
export default listItemSlice.reducer;
