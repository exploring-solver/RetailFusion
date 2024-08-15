import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const Rewards = () => {
  const currentRewards = 1200; 

  const handleRedeem = () => {
    // console.log('Redeem points clicked!');
    alert('You have redeemed your points!');
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        My Rewards
      </Typography>
      <Box my={4}>
        <Typography variant="h6">Current Reward Points:</Typography>
        <Typography variant="h2" color="primary">{currentRewards}</Typography>
      </Box>
      <Box my={4}>
        <Typography variant="h6">Redemption Options:</Typography>
        <Typography variant="body1" gutterBottom>
          Redeem points for rewards
        </Typography>
        <Button variant="contained" color="primary" onClick={handleRedeem}>
          Redeem Points
        </Button>
      </Box>
    </Container>
  );
};

export default Rewards;
