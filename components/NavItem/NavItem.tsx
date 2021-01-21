import React from 'react';
import clsx from 'clsx';
import styles from './NavItem.style';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import { Button, ListItem, makeStyles, Icon } from '@material-ui/core';

export default function NavItem(
  href: any,
  title: typeof PropTypes.string,
  icon: any = Icon,
  className?: typeof PropTypes.string,
  ...rest: any
) {
  const _styles = makeStyles(styles())();

  return (
    <ListItem
      className={clsx(_styles.item, className)}
      disableGutters
      {...rest}
    >
      <Button
        activeClassName={_styles.active}
        className={_styles.button}
        component={RouterLink}
        to={href}
      >
        {Icon && <Icon className={_styles.icon} />}
        <span className={_styles.title}>{title}</span>
      </Button>
    </ListItem>
  );
}
