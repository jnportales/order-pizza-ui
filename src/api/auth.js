import apiClient from './client';

export const login = async (username, password) => {
  try {
    const response = await apiClient.post('/auth', {
      username,
      password,
    });
    
    const { token } = response.data;
    if (token) {
      localStorage.setItem('authToken', token);
    }
    
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('authToken');
};

export const getToken = () => {
  return localStorage.getItem('authToken');
};
