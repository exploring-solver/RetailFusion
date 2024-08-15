import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Profile from './Profile'; 
import Rewards from './Rewards'; 

const User = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        User Dashboard
      </Typography>
      <Box display="flex" gap={4} justifyContent={'space-between'}>
      <Box my={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          Profile
        </Typography>
        <Profile />
      </Box>
      
      <Box my={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          Rewards
        </Typography>
        <Rewards />
      </Box>
      </Box>
    </Container>
  );
};

export default User;
