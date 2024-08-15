import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Profile = () => {
    const userProfile = {
        name: "ishu",
        email: "test@gmail.com",
        membershipLevel: "Gold Member"
    };

    return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        My Profile
      </Typography>
      <Box my={4}>
        <Typography variant="h6">Name:</Typography>
        <Typography variant="body1">{userProfile.name}</Typography>
        <Typography variant="h6" mt={2}>Email:</Typography>
        <Typography variant="body1">{userProfile.email}</Typography>
        <Typography variant="h6" mt={2}>Membership Level:</Typography>
        <Typography variant="body1">{userProfile.membershipLevel}</Typography>
      </Box>
    </Container >
  );
};

export default Profile;
