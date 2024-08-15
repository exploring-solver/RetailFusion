import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ProductList from '../../utils/Product/ProductList';
import ARViewer from '../../utils/Product/ARViewer';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Retail Fusion
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <ProductList />
        </Grid>
        <Grid item xs={12} md={4}>
          <ARViewer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
