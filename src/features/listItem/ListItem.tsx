import { nanoid } from '@reduxjs/toolkit';
import { InputButton } from '../shared/InputButton';
import { selectListItems } from './listItemSlice';
import { useAppSelector } from '../../app/hooks';
import './ListItem.css';
import '../../App.css';
import { addNewCard, selectCards } from '../card/cardSlice';
import { Card } from '../card/Card';

interface ListItemProps {
  listId: string;
}

export const ListItem = ({ listId }: ListItemProps) => {
  const currentListItem = useAppSelector(selectListItems).filter(
    (listItem) => listItem.listId === listId
  )[0];
  const cards = useAppSelector(selectCards).filter(
    (cardItem) => cardItem.listId === listId
  );
  return (
    <div className="dark-container">
      <h2>{currentListItem.title}</h2>
      {cards.map((card) => (
        <Card cardId={card.cardId} />
      ))}
      <div className="input-button-container">
        <InputButton
          target={'card'}
          callback={addNewCard}
          data={{ listId: listId, cardId: nanoid(), title: '' }}
        />
      </div>
    </div>
  );
};
