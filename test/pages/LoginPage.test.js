import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LoginPage from '../../src/pages/LoginPage.jsx';
import OrderPage from '../../src/pages/OrderPage.jsx';

describe('LoginPage', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <LoginPage />
            </MemoryRouter>
        );
    });
    test('renders with "Login" header', () => {
        const heading = screen.getByTestId("login-heading");
        expect(heading).toBeInTheDocument();
    });

    test('renders with username input box', () => {
        const input = screen.getByTestId("username-input");
        expect(input).toBeInTheDocument();
    });

    test('renders with password input box', () => {
        const input = screen.getByTestId("username-password");
        expect(input).toBeInTheDocument();
    });
    
    test('renders with Login button', () => {
        const button = screen.getByTestId("login-button");
        expect(button).toBeInTheDocument();
    });
});