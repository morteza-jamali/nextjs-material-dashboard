import React from 'react';
import styles from './Dashboard.style';
import Budget from '../../components/Badget/Badget';
import LatestOrders from '../../components/LatestOrders/LatestOrders';
import LatestProducts from '../../components/LatestProducts/LatestProducts';
import Sales from '../../components/Sales/Sales';
import TasksProgress from '../../components/TasksProgress/Tasksprogress';
import TotalCustomers from '../../components/TotalCustomers/TotalCustomers';
import TotalProfit from '../../components/TotalProfit/TotalProfit';
import TrafficByDevice from '../../components/TrafficByDevice/TraficByDevice';
import { Container, Grid, makeStyles } from '@material-ui/core';

export default function Dashboard() {
  const _styles = makeStyles(styles())();

  return (
    <Container maxWidth={false} className={_styles.root}>
      <Grid container spacing={3}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Budget />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalCustomers />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TasksProgress />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalProfit />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <Sales />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <TrafficByDevice />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <LatestProducts />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestOrders />
        </Grid>
      </Grid>
    </Container>
  );
}
