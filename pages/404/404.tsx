import React from 'react';
import styles from './404.style';
import MainLayout from '../../components/MainLayout/MainLayout';
import { Box, Container, Typography, makeStyles } from '@material-ui/core';

export default function Custom404() {
  const _styles = makeStyles(styles())();

  return (
    <MainLayout>
      <Box
        className={_styles.root}
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography align="center" color="textPrimary" variant="h1">
            404: The page you are looking for isn’t here
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <Box textAlign="center">
            <img
              alt="Under development"
              className={_styles.image}
              src={`${GLOBALS.PATH.IMAGES}/404.svg`}
            />
          </Box>
        </Container>
      </Box>
    </MainLayout>
  );
}
