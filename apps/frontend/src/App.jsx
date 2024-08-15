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
import VirtualTryOn from './components/pages/OnlineShopping/VirtualTryOn';
import Inventory from './components/pages/Inventory/Inventory';
// import Profile from './components/pages/User/Profile';
import InStore from './components/pages/InStore/InStore';
import ScanToCart from './components/pages/InStore/ScanToCart';
import Navigation from './components/pages/InStore/Navigation';
import VRShopping from './components/pages/OnlineShopping/VRShopping';
import OnlineShopping from './components/pages/OnlineShopping/OnlineShopping';
import User from './components/pages/User/User';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/try-on" element={<VirtualTryOn />} />
            <Route path="/virtual" element={<VRShopping />} />
            <Route path="/online" element={<OnlineShopping />} />
            <Route path="/split-payment" element={<SplitPayment />} />
            <Route path="/stores" element={<StoreLocator />} />
            <Route path="/inventory" element={<Inventory/>} />
            <Route path="/instore" element={<InStore/>} />
            <Route path="/scan-to-cart" element={<ScanToCart/>} />
            <Route path="/navigate-store" element={<Navigation/>} />
            <Route path="/user" element={<User/>} />
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