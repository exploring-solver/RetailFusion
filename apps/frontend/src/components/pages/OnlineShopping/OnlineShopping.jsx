import React from 'react';
import { Container, Typography, Box, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OnlineShopping = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Online Shopping
      </Typography>
      <Typography variant="h6" gutterBottom>
        Choose your online shopping experience:
      </Typography>
      <Box display="flex" justifyContent="space-around" mt={4}>
        <Card onClick={() => handleNavigation('/virtual')} sx={{ cursor: 'pointer', width: '45%' }}>
          <CardContent>
            <Typography variant="h6">Virtual Shopping in VR</Typography>
            <Typography variant="body2">
              Immerse yourself in a virtual reality shopping experience. Browse and interact with products as if you were in a real store.
            </Typography>
          </CardContent>
        </Card>
        <Card onClick={() => handleNavigation('/try-on')} sx={{ cursor: 'pointer', width: '45%' }}>
          <CardContent>
            <Typography variant="h6">AR Marketplace</Typography>
            <Typography variant="body2">
              Explore products in augmented reality. Visualize items in your own space before making a purchase.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default OnlineShopping;
