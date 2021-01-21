import React, { useState } from 'react';
import styles from './CustomerList.style';
import Results from '../../components/Result/Result';
import Toolbar from '../../components/ToolBar/ToolBar';
import data from '../../data/data';
import { Box, Container, makeStyles } from '@material-ui/core';

export default function CustomerListView() {
  const _styles = makeStyles(styles())();
  const [customers] = useState(data);

  return (
    <Container maxWidth={false} className={_styles.root}>
      <Toolbar page="CUSTOMER" />
      <Box mt={3}>
        <Results customers={customers} />
      </Box>
    </Container>
  );
}
