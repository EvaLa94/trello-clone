import { nanoid } from '@reduxjs/toolkit';
import { useAppSelector } from '../../app/hooks';
import { ListItem } from '../listItem/ListItem';
import { selectListItems, addNewListItem } from '../listItem/listItemSlice';
import { InputButton } from '../shared/InputButton';

import './Dashboard.css';
import '../../App.css';
import { selectDashboard } from './dashboardSlice';

interface dashboardProps {
  dashboardId: string;
}

export const Dashboard = ({ dashboardId }: dashboardProps) => {
  const listItems = useAppSelector(selectListItems).filter(
    (listItem) => listItem.dashboardId === dashboardId
  );
  const currentDashboard = useAppSelector(selectDashboard).filter(
    (dashboard) => dashboard.dashboardId === dashboardId
  )[0];

  return (
    <main className="main-dashboard">
      <header className="title">
        <h1>{currentDashboard.title}</h1>
      </header>
      <div className="list-item-container">
        {listItems.map((listItem) => (
          <ListItem key={listItem.listId} listId={listItem.listId} />
        ))}
        <div className="light-container">
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
