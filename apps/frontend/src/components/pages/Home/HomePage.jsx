import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handlePathSelection = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Retail Fusion
      </Typography>
      <Typography variant="h4" textAlign={'center'} marginBottom={4}>
        What would you like to do today?
      </Typography>
      <Box display="flex" flexDirection={'column'} gap={4} textAlign={'center'} justifyContent="space-around" marginBottom={4}>
        <Card onClick={() => handlePathSelection('/online')}>
          <CardContent>
            <Typography variant="h5">Online Shopping</Typography>
          </CardContent>
        </Card>
        <Card onClick={() => handlePathSelection('/instore')}>
          <CardContent>
            <Typography variant="h5">In-Store Assistance</Typography>
          </CardContent>
        </Card>
        <Card onClick={() => handlePathSelection('/stores')}>
          <CardContent>
            <Typography variant="h5">Takeaway from Nearby Store</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default HomePage;
