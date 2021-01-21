import React from 'react';
import clsx from 'clsx';
import styles from './NavItem.style';
import PropTypes from 'prop-types';
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
      <div>ButtonIcon</div>
    </ListItem>
  );
}
