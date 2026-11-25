import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAccessToken } from '../api/auth';
import apiClient from '../api/client';
import NavigationMenu from '../components/NavigationMenu.jsx';

const OrderPage = () => {
  const access_token = getAccessToken();

  if (!access_token) {
    return <Navigate to="/login" replace />;
  }

  const [formData, setFormData] = useState({
    Crust: '',
    Flavor: '',
    Size: '',
    Table_No: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    // Basic Validation
    if (!formData.Crust || !formData.Flavor || !formData.Size || !formData.Table_No) {
      setError('All fields are required.');
      return;
    }

    // Prepare payload with correct types
    const payload = {
      Crust: formData.Crust,
      Flavor: formData.Flavor,
      Size: formData.Size,
      Table_No: parseInt(formData.Table_No, 10),
    };

    try {
      const response = await apiClient.post('/orders', payload);
      if (response.status === 200 || response.status === 201) {
        setMessage('Order placed successfully!');
        setFormData({
          Crust: '',
          Flavor: '',
          Size: '',
          Table_No: '',
        });
      }
    } catch (err) {
      console.error('Error submitting order:', err);
      setError(err.response?.data?.message || 'Failed to submit order. Please try again.');
    }
  };

  return (
    <div>
      <NavigationMenu />
      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h1 data-testid="order-heading">Place Your Order</h1>

        {message && <p data-testid="success-message" style={{ color: 'green' }}>{message}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div>
            <label htmlFor="Crust">Crust:</label>
            <input
              data-testid="crust-input"
              type="text"
              id="Crust"
              name="Crust"
              value={formData.Crust}
              onChange={handleChange}
              style={{ width: '100%' }}
              placeholder="e.g. Thin, Stuffed"
            />
          </div>
          <div>
            <label htmlFor="Flavor">Flavor:</label>
            <input
              data-testid="flavor-input"
              type="text"
              id="Flavor"
              name="Flavor"
              value={formData.Flavor}
              onChange={handleChange}
              style={{ width: '100%' }}
              placeholder="e.g. Pepperoni, Margherita"
            />
          </div>
          <div>
            <label htmlFor="Size">Size:</label>
            <input
              data-testid="size-input"
              type="text"
              id="Size"
              name="Size"
              value={formData.Size}
              onChange={handleChange}
              style={{ width: '100%' }}
              placeholder="e.g. Small, Medium, Large"
            />
          </div>
          <div>
            <label htmlFor="Table_No">Table Number:</label>
            <input
              data-testid="table-no-input"
              type="number"
              id="Table_No"
              name="Table_No"
              value={formData.Table_No}
              onChange={handleChange}
              style={{ width: '100%' }}
              placeholder="Enter table number"
            />
          </div>
          <button data-testid="submit-button" type="submit" style={{ padding: '10px', cursor: 'pointer' }}>
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
