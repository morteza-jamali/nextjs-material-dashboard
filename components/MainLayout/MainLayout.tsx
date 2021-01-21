import React from 'react';
import styles from './MainLayout.style';
import { makeStyles } from '@material-ui/core';
import TopBar from '../TopBar/TopBar';

export default function MainLayout(props: any) {
  const _styles = makeStyles(styles())();

  return (
    <div className={_styles.root}>
      <TopBar layout="MAIN" />
      <div className={_styles.wrapper}>
        <div className={_styles.contentContainer}>
          <div className={_styles.content}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}
