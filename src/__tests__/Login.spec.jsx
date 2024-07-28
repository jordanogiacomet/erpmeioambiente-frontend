/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import api from '../services/api'; // Importando a instância configurada
import renderTheme from '../styles/render-theme';
import Login from '../features/Login/login';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../services/api');

describe('<Login />', () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render login form and handles login', async () => {
    // Mock resposta da API
    api.post.mockResolvedValueOnce({ data: { token: 'fake-token' } });

    // Renderiza o componente Login
    renderTheme(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const loginButton = screen.getByRole('button', { name: /login in/i });

    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('api/Auth/login', {
        email: 'user@example.com',
        password: 'password123',
      });
      expect(localStorage.setItem).toHaveBeenCalledWith('token', 'fake-token');
    });
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<MemoryRouter><Login /></MemoryRouter>);
    expect(container).toMatchSnapshot();
  });
});

