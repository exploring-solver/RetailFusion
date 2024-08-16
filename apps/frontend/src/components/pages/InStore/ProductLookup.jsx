//not working at the moment

import React, { useState } from 'react';
import { Button, CircularProgress, Typography, Card, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';
import {BarcodeScanner} from 'react-barcode-scanner';
import "react-barcode-scanner/polyfill";

const ProductLookup = () => {
    const [ean, setEAN] = useState('');
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    const handleScan = (data) => {
        if (data) {
            setEAN(data);
            fetchProductDetails(data);
        }
    };

    const handleError = (err) => {
        console.error('Error scanning barcode:', err);
    };

    const fetchProductDetails = async (ean) => {
        setLoading(true);
        try {
            const response = await axios.get(`${baseURL}/api/product/${ean}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product details', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <BarcodeScanner
                onScan={handleScan}
                onError={handleError}
                style={{ width: '100%' }}
            />
            {loading && <CircularProgress />}
            {product && (
                <Card style={{ maxWidth: 600, marginTop: '20px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={product.product_image_1}
                        alt={product.product_name}
                    />
                    <CardContent>
                        <Typography variant="h5">{product.product_name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                            {product.description}
                        </Typography>
                        <Typography variant="body1" color="textPrimary">
                            MRP: ${product.mrp}
                        </Typography>
                        <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                            Add to Cart
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default ProductLookup;
