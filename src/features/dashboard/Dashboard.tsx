import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ListItem } from '../listItem/ListItem';
import { selectListItems, addNewListItem } from '../listItem/listItemSlice';
import { InputButton } from '../shared/InputButton';

import './Dashboard.css';
import '../../App.css';

interface dashboardProps {
  dashboardId: string;
}

export const Dashboard = ({ dashboardId }: dashboardProps) => {
  const listItems = useAppSelector(selectListItems).filter(
    (listItem) => listItem.dashboardId === dashboardId
  );
  const dispatch = useAppDispatch();

  return (
    <main className="main-dashboard">
      <header className="title">
        <h1>Items</h1>
      </header>
      <div className="list-item-container">
        {listItems.map((item) => (
          <ListItem item={item.title} />
        ))}
        <div className="container">
          <InputButton
            target={'list'}
            callback={addNewListItem}
            data={{ dashboardId, listId: nanoid(), title: '' }}
          />
        </div>
      </div>
    </main>
  );
};
