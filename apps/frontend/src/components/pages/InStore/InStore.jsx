import React from 'react';
import { Container, Typography, Box, Button, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const InStore = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        In-Store Options
      </Typography>
      <Typography variant="h6" gutterBottom>
        Choose what you would like to do:
      </Typography>
      <Box display="flex" justifyContent="space-around" mt={4}>
        <Card onClick={() => handleNavigation('/scan-to-cart')} sx={{ cursor: 'pointer', width: '30%' }}>
          <CardContent>
            <Typography variant="h6">Scan to Cart</Typography>
            <Typography variant="body2">
              Scan items as you shop and add them directly to your cart.
            </Typography>
          </CardContent>
        </Card>
        <Card onClick={() => handleNavigation('/navigate-store')} sx={{ cursor: 'pointer', width: '30%' }}>
          <CardContent>
            <Typography variant="h6">Navigate in Store</Typography>
            <Typography variant="body2">
              Find your way around the store with our in-store navigation feature.
            </Typography>
          </CardContent>
        </Card>
        Rest features to be added
      </Box>
    </Container>
  );
};

export default InStore;
