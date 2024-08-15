import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
// import ARViewer from '../../utils/Product/ARViewer'
// import ProductList from '../../utils/Product/ProductList'
import Marketplace from '../Home/Marketplace'

function VirtualTryOn() {
    return (
        <Container>
            <Typography variant="h2" component="h1" gutterBottom>
                Virtual Marketplace
            </Typography>
            {/* <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <ProductList />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ARViewer />
                </Grid>
            </Grid> */}
            <Marketplace />
        </Container>
    )
}

export default VirtualTryOn