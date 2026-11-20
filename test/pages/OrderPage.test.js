import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import OrderPage from '../../src/pages/OrderPage.jsx';
import { ACCESS_TOKEN_KEY } from '../../src/api/config.js'

describe('OrderPage', () => {
    beforeEach(() => {
        localStorage.setItem(ACCESS_TOKEN_KEY, "Mock Access Token")
        render(
            <MemoryRouter>
                <OrderPage />
            </MemoryRouter>
        );
    });

    test('renders with "Place Your Order" header', () => {
        const heading = screen.getByTestId("order-heading");
        expect(heading).toBeInTheDocument();
    });

    test('renders with Crust input box', () => {
        const input = screen.getByTestId("crust-input");
        expect(input).toBeInTheDocument();
    });

    test('renders with Flavor input box', () => {
        const input = screen.getByTestId("flavor-input");
        expect(input).toBeInTheDocument();
    });

    test('renders with Size input box', () => {
        const input = screen.getByTestId("size-input");
        expect(input).toBeInTheDocument();
    });

    test('renders with Table Number input box', () => {
        const input = screen.getByTestId("table-no-input");
        expect(input).toBeInTheDocument();
    });

    test('renders with Submit Order button', () => {
        const button = screen.getByTestId("submit-button");
        expect(button).toBeInTheDocument();
    });
});
