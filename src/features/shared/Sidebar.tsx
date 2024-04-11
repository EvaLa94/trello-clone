import React, { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { addNewDashboard, selectDashboard } from '../dashboard/dashboardSlice';
import '../../App.css';

import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { InputButton } from './InputButton';

import { nanoid } from '@reduxjs/toolkit';

interface SidebarProps {
  setCurrentDashboardId: React.Dispatch<React.SetStateAction<string>>;
}

export const Sidebar = ({ setCurrentDashboardId }: SidebarProps) => {
  const dashboards = useAppSelector(selectDashboard);
  const [isHidden, setIsHidden] = useState(false);

  const toggleHidden = () => setIsHidden(!isHidden);
  return (
    <>
      <div
        className={`dashboards-list-container ${
          isHidden ? 'close-menu' : 'open-menu'
        } `}
      >
        <div className="dashboards-list-title">
          <h2>Your boards</h2>
          <div onClick={toggleHidden} className={`icon-container`}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        {dashboards.map((dashboard) => (
          <div
            key={dashboard.dashboardId}
            className="dashboard-option"
            onClick={() => setCurrentDashboardId(dashboard.dashboardId)}
          >
            {dashboard.title}
          </div>
        ))}
        <div>
          <InputButton
            target="dashboard"
            callback={addNewDashboard}
            data={{ dashboardId: nanoid(), title: '' }}
          />
        </div>{' '}
      </div>
    </>
  );
};
