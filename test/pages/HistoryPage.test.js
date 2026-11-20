import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HistoryPage from '../../src/pages/HistoryPage.jsx';
import * as ordersApi from '../../src/api/orders';

// Mock the api/orders module
jest.mock('../../src/api/orders', () => ({
  fetchOrders: jest.fn(),
}));

describe('HistoryPage', () => {
  beforeEach(async () => {
    jest.clearAllMocks();
    // Mock fetchOrders to return an empty array so we don't have to worry about table data
    ordersApi.fetchOrders.mockResolvedValue([]);
    render(
      <MemoryRouter>
        <HistoryPage />
      </MemoryRouter>
    );

    // waiting for at least one of the elements to show up.
    await waitFor(() => {
      const heading = screen.getByTestId("history-heading");
      expect(heading).toBeInTheDocument();
    },{timeout:1000});
  });
  
  test('renders with "Order History" header', async () => {
      const heading = screen.getByTestId("history-heading");
      expect(heading).toBeInTheDocument();
  });

  test('renders with Crust filter dropdown', () => {
    const input = screen.getByTestId("crust-select");
    expect(input).toBeInTheDocument();
  });

  test('renders with Flavor filter dropdown', () => {
    const input = screen.getByTestId("flavor-select");
    expect(input).toBeInTheDocument();
  });

  test('renders with Size filter dropdown', () => {
    const input = screen.getByTestId("size-select");
    expect(input).toBeInTheDocument();
  });

  test('renders with Table_No filter dropdown', () => {
    const input = screen.getByTestId("table_no-select");
    expect(input).toBeInTheDocument();
  });

  test('renders with Clear button', () => {
    const button = screen.getByTestId("clear-button");
    expect(button).toBeInTheDocument();
  });
});
