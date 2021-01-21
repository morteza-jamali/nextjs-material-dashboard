import React from 'react';
import styles from './Account.style';
import Profile from '../../components/Profile/Profile';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails';
import { Container, Grid, makeStyles } from '@material-ui/core';

export default function Account() {
  const _styles = makeStyles(styles())();

  return (
    <Container maxWidth="lg" className={_styles.root}>
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <Profile />
        </Grid>
        <Grid item lg={8} md={6} xs={12}>
          <ProfileDetails />
        </Grid>
      </Grid>
    </Container>
  );
}
