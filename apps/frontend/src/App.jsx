import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Box, CssBaseline } from '@mui/material';
import Header from './components/utils/navbar/Header';
import Footer from './components/utils/Footer';
import Error404 from './components/utils/Error404';
import HomePage from './components/pages/Home/HomePage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import StoreLocator from './components/utils/Product/StoreLocator';
import SplitPayment from './components/pages/SplitPayment/SplitPayment';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/split-payment" element={<SplitPayment />} />
            <Route path="/stores" element={<StoreLocator />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;