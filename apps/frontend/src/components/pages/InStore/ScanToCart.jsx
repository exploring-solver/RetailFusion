import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import ProductLookup from './ProductLookup';

const ScanToCart = () => {

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Scan and Add to Cart
            </Typography>
            <ProductLookup/>
        </Container>
    );
};

export default ScanToCart;
