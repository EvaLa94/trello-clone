import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addNewListItem } from './dashboardSlice';

export const Dashboard = () => {
  const [listItem, setListItem] = useState('');
  const list = useAppSelector((state) => state.dashboard.list);
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(addNewListItem(listItem));
    setListItem('');
  };

  return (
    <div>
      <h1>Items</h1>
      {list.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <h2>Add new</h2>
      <input value={listItem} onChange={(e) => setListItem(e.target.value)} />
      <button onClick={onClick}>Add new</button>
    </div>
  );
};
