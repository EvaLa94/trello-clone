import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export interface CardType {
  cardId: string;
  listId: string;
  title: string;
}

interface CardState {
  cards: CardType[];
}

const initialState: CardState = {
  cards: [
    { cardId: '1', listId: '1', title: 'First card' },
    { cardId: '2', listId: '1', title: 'Second card' },
    { cardId: '3', listId: '2', title: 'First card - second List' },
  ],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addNewCard: (state, action: PayloadAction<CardType>) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addNewCard } = cardSlice.actions;
export const selectCards = (state: RootState) => state.card.cards;
export default cardSlice.reducer;
