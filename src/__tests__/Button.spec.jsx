import React from 'react';
import renderTheme from '../styles/render-theme';
import 'jest-styled-components';
import { theme } from '../styles/theme';
import { screen } from '@testing-library/react';
import Button from '../components/Button/Button';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it('should render with default props', () => {
    renderTheme(<Button text="Login In" />)
    expect(screen.getByText('Login In')).toBeInTheDocument();
  });
  it('should render as disabled when the disabled prop is passed', () => {
    renderTheme(<Button text="Login In" disabled />);
    expect(screen.getByText('Login In')).toBeDisabled();
  });
  /*
  it('should apply custom background color', () => {
    renderTheme(<Button text="Custom Color" backgroundColor="#4caf50" />);
    expect(screen.getByText('Custom Color')).toHaveStyle(`background-color: #4caf50`);
  });
  */
 /*
  it('should change background color on hover', () => {
    renderTheme(<Button text="Hover" hoverBackgroundColor="#45a049"/>);
    const button = screen.getByText('Hover');

    userEvent.hover(button);
    expect(button).toHaveStyle('background-color: #45a049');

    userEvent.unhover(button);
    expect(button).toHaveStyle(`background-color: ${theme.colors.secondary}`)
  });
  */
});