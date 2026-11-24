import React from 'react';
import { logout } from '../api/auth';

const NavigationMenu = () => {

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const styles = {
    banner: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#333',
      padding: '1rem 0',
      color: 'white',
      position: 'relative',
      zIndex: 1000,
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };

  return (
    <nav style={styles.banner}>
      <a href="/login" style={styles.link}>Login</a>
      <a href="/order" style={styles.link}>New Order</a>
      <a href="/history" style={styles.link}>All Orders</a>
      <span style={styles.link} onClick={handleLogout}>Logout</span>
    </nav>
  );
};

export default NavigationMenu;
