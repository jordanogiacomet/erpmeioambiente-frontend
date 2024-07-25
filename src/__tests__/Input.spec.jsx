// Input.spec.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from '../components/Form/Input';
import renderTheme from '../styles/render-theme';


describe('<Input />', () => {
  it('renders correctly with a label', () => {
    renderTheme(<Input label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('passes other props to the input element', () => {
    renderTheme(<Input label="Email" type="email" placeholder="Enter your email" />);
    const inputElement = screen.getByPlaceholderText('Enter your email');
    expect(inputElement).toHaveAttribute('type', 'email');
  });

  it('should display the input value correctly', () => {
    renderTheme(<Input label="Name" value="Jordano" />);
    const inputElement = screen.getByDisplayValue('Jordano');
    expect(inputElement).toBeInTheDocument();
  });
});