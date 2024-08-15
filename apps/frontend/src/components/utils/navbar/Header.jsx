// src/components/utils/navbar/Header.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, CircularProgress, Collapse, ImageListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Stores', path: '/stores' },
    { label: 'AR/VR Experience', path: '/ar-vr' },
    { label: 'Inventory', path: '/inventory' },
    { label: 'Recommendations', path: '/recommendations' },
    ...(user
      ? [{ label: 'Logout', action: handleLogout }]
      : [
          { label: 'Login', path: '/login' },
          { label: 'Register', path: '/register' },
        ]),
  ];

  const renderNavItems = () => (
    <>
      {navItems.map((item, index) => (
        <Button
          key={index}
          color="inherit"
          component={item.path ? Link : 'button'}
          to={item.path}
          onClick={item.action || (() => setDropdownOpen(!dropdownOpen))}
        >
          {item.label}
        </Button>
      ))}
    </>
  );

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Retail Fusion
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {renderNavItems()}
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          <img src="logo.webp" className='w-32 m-auto' alt="" />
          {navItems.map((item, index) => (
            <ListItem
            button
            key={index}
              component={item.path ? Link : 'button'}
              to={item.path}
              onClick={() => {
                setDrawerOpen(false);
                if (item.action) item.action();
              }}
              >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/ar-vr">
                <ListItemText primary="AR/VR Experience" />
              </ListItem>
              <ListItem button component={Link} to="/inventory">
                <ListItemText primary="Inventory" />
              </ListItem>
              <ListItem button component={Link} to="/recommendations">
                <ListItemText primary="Recommendations" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
