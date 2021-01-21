import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import TopBar from '../TopBar/TopBar';
import styles from './DashboardLayout.style';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

export default function DashboardLayout() {
  const _styles = makeStyles(styles())();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={_styles.root}>
      <TopBar
        layout="DASHBOARD"
        onMobileNavOpen={() => setMobileNavOpen(true)}
      />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={_styles.wrapper}>
        <div className={_styles.contentContainer}>
          <div className={_styles.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
