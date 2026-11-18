import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SimpleInputBox from '../components/SimpleInputBox.jsx';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Mock success logic
    console.log('Logging in with:', { username, password });
    
    // Redirect to order page
    navigate('/order');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'black',
    },
    card: {
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      backgroundColor: '#222',
      width: '300px',
      textAlign: 'center',
    },
    inputGroup: {
      marginBottom: '1rem',
      textAlign: 'left',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '0.5rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    error: {
      color: 'red',
      marginBottom: '1rem',
      fontSize: '0.9rem',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={{ marginBottom: '1.5rem' }}>Login</h1>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              placeholder="Enter username"
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Enter password"
            />
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
