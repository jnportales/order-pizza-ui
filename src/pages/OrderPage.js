import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAccessToken } from '../api/auth';

const OrderPage = () => {
  const access_token = getAccessToken();

  if (!access_token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1>Order Page</h1>
      <p>Placeholder for Order UI</p>
    </div>
  );
};

export default OrderPage;
