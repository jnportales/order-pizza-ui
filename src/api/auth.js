import apiClient from './client';

/**
 * SECURITY NOTE:
 * This application uses `localStorage` to store the authentication token for simplicity 
 * in this demo project. We acknowledge that `localStorage` is not secure against 
 * Cross-Site Scripting (XSS) attacks. 
 * 
 * For a production-ready implementation, enterprise-grade security measures 
 * (such as `HttpOnly` cookies) would be required to secure the authentication token.
 */

const ACCESS_TOKEN_KEY = 'access_token';

export const login = async (username, password) => {
  try {
    const response = await apiClient.post('/auth', {
      username,
      password,
    });

    const { access_token } = response.data;
    if (access_token) {
      localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
    }

    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};
