import { nanoid } from '@reduxjs/toolkit';
import { InputButton } from '../shared/InputButton';
import './ListItem.css';
import '../../App.css';

interface ListItemProps {
  item: string;
}

export const ListItem = ({ item }: ListItemProps) => {
  return (
    <div className="container">
      <h2>{item}</h2>
      <InputButton
        target={'card'}
        callback={() => console.log('WORK IN PROGRESS')}
        data={{ dashboardId: 'first', listId: nanoid(), title: '' }}
      />
    </div>
  );
};
