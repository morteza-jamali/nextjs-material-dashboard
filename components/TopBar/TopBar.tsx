import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './TopBar.style';
import Logo from '../Logo/Logo';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Link from '../Link';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Badge,
  Box,
  Hidden,
  IconButton
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

let _styles: any;

declare interface ITopBarPropsType {
  layout: 'MAIN' | 'DASHBOARD';
  onMobileNavOpen?: any;
  className?: any;
}

const TopBarPropsDefaultValue: ITopBarPropsType = {
  layout: 'MAIN',
  onMobileNavOpen: () => {},
  className: ''
};

export default function TopBar(
  props: ITopBarPropsType = TopBarPropsDefaultValue,
  ...rest: any
) {
  _styles = makeStyles(styles(props.layout))();

  switch (props.layout) {
    case 'MAIN':
      return MainLayoutTopBar(props.className);
    case 'DASHBOARD':
      return DashboardLayoutTopBar(
        props.className,
        props.onMobileNavOpen,
        rest
      );
  }
}

const MainLayoutTopBar = (className: string) => (
  <AppBar className={clsx(_styles.root, className)} elevation={0}>
    <Toolbar className={_styles.toolbar}>
      <Link href="/">
        <Logo />
      </Link>
    </Toolbar>
  </AppBar>
);

const DashboardLayoutTopBar = (
  className: string,
  onMobileNavOpen: any,
  ...rest: any
) => {
  const [notifications] = useState([]);

  return (
    <AppBar className={clsx(_styles.root, className)} elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
