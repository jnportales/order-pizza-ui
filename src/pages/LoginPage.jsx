import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, getAccessToken } from '../api/auth';
import NavigationMenu from '../components/NavigationMenu.jsx';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [inform, setInform] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      setIsLoggedIn(true);
      setInform('You are already logged in.');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    setLoading(true);
    try {
      await login(username, password);
      navigate('/order');
    } catch (err) {
      setError('Invalid username or password.');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
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
      cursor: loading || isLoggedIn ? 'not-allowed' : 'pointer',
      fontSize: '1rem',
    },
    error: {
      color: 'red',
      marginBottom: '1rem',
      fontSize: '0.9rem',
    },
    inform: {
      color: '#4caf50',
      marginBottom: '1rem',
      fontSize: '0.9rem',
    }
  };

  return (
    <div>
      <NavigationMenu />
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 data-testid="login-heading" style={{ marginBottom: '1.5rem' }}>Login</h1>
          {error && <div data-testid="error-message" style={styles.error}>{error}</div>}
          {inform && <div style={styles.inform}>{inform}</div>}
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Username</label>
              <input
                data-testid="username-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
                placeholder="Enter username"
                disabled={loading || isLoggedIn}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <input
                data-testid="username-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                placeholder="Enter password"
                disabled={loading || isLoggedIn}
              />
            </div>
            <button
              data-testid="login-button"
              type="submit"
              style={styles.button}
              disabled={loading || isLoggedIn}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
