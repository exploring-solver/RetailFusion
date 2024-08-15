import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const ScanToCart = () => {

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Scan and Add to Cart
            </Typography>
            <Typography variant="h5" component="h1" gutterBottom>
            Fucntionality to be added
            </Typography>

            <Button
                variant="contained"
                color="primary"
                onClick={() => alert('Permission to open camera')}
            >
                Scan
            </Button>
        </Container>
    );
};

export default ScanToCart;
