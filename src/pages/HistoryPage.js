import React, { useState, useEffect, useCallback } from 'react';
import apiClient from '../api/client';

const HistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true);
      const response = await apiClient.get('/orders');
      setOrders(response.data);
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError('Failed to fetch orders.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleDelete = async (orderId) => {
    const confirmed = window.confirm('Are you sure you want to cancel this order?');
    if (confirmed) {
      try {
        await apiClient.delete(`/orders/${orderId}`);
        fetchOrders();
      } catch (err) {
        console.error('Error deleting order:', err);
        setError('Failed to delete order.');
        setTimeout(() => setError(null), 3000);
      }
    }
  };

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Order History</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>
              <th style={{ padding: '8px' }}>Order_ID</th>
              <th style={{ padding: '8px' }}>Crust</th>
              <th style={{ padding: '8px' }}>Flavor</th>
              <th style={{ padding: '8px' }}>Size</th>
              <th style={{ padding: '8px' }}>Table_No</th>
              <th style={{ padding: '8px' }}>Timestamp</th>
              <th style={{ padding: '8px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.Order_ID || index} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '8px' }}>{order.Order_ID}</td>
                <td style={{ padding: '8px' }}>{order.Crust}</td>
                <td style={{ padding: '8px' }}>{order.Flavor}</td>
                <td style={{ padding: '8px' }}>{order.Size}</td>
                <td style={{ padding: '8px' }}>{order.Table_No}</td>
                <td style={{ padding: '8px' }}>{new Date(order.Timestamp).toLocaleString()}</td>
                <td style={{ padding: '8px' }}>
                  <button
                    onClick={() => handleDelete(order.Order_ID)}
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '5px 10px',
                      cursor: 'pointer'
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HistoryPage;
