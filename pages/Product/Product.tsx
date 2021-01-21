import React, { useState } from 'react';
import styles from './Product.style';
import Toolbar from '../../components/ToolBar/ToolBar';
import ProductCard from '../../components/ProductCard/ProductCard';
import data from '../../data/product_data';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

export default function ProductList() {
  const _styles = makeStyles(styles())();
  const [products] = useState(data);

  return (
    <Container maxWidth={false} className={_styles.root}>
      <Toolbar page="PRODUCT" />
      <Box mt={3}>
        <Grid container spacing={3}>
          {products.map((product: any) => (
            <Grid item key={product.id} lg={4} md={6} xs={12}>
              <ProductCard className={_styles.productCard} product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box mt={3} display="flex" justifyContent="center">
        <Pagination color="primary" count={3} size="small" />
      </Box>
    </Container>
  );
}
