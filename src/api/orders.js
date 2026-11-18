import apiClient from './client';

export const fetchOrders = async () => {
  try {
    const response = await apiClient.get('/orders');
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await apiClient.post('/orders', orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const deleteOrder = async (orderId) => {
  try {
    await apiClient.delete(`/orders/${orderId}`);
    return true;
  } catch (error) {
    console.error('Error deleting order:', error);
    throw error;
  }
};
