import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import axios from 'axios';

const StoreLocator = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchNearbyStores = async () => {
      // Use browser geolocation API to get user's location
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await axios.get(`http://localhost:3018/store/stores/nearby?latitude=${latitude}&longitude=${longitude}`);
        setStores(response.data);
      });
    };
    fetchNearbyStores();
  }, []);

  return (
    <Box>
      <Typography variant="h5">Nearby Stores</Typography>
      <List>
        {stores.map((store) => (
          <ListItem key={store._id}>{store.name}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default StoreLocator;