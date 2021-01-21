import React from 'react';
import styles from './Settings.style';
import Notifications from '../../components/Notifications/Notifications';
import Password from '../../components/Password/Password';
import { Box, Container, makeStyles } from '@material-ui/core';

export default function SettingsView() {
  const _styles = makeStyles(styles())();

  return (
    <Container maxWidth="lg" className={_styles.root}>
      <Notifications />
      <Box mt={3}>
        <Password />
      </Box>
    </Container>
  );
}
