/* eslint-disable testing-library/no-node-access */
import React from 'react';
import renderTheme from '../styles/render-theme';
import { screen } from '@testing-library/react';
import 'jest-styled-components';
import CheckboxInput from '../components/Form/CheckboxInput';

describe('<CheckboxInput />', () => {
  it('should renders correctly with a label', () => {
    renderTheme(<CheckboxInput label="remember me"/>);
    expect(screen.getByText('remember me')).toBeInTheDocument();
  });
  it('should render with input type checkbox', () => {
    renderTheme(<CheckboxInput label="remember me" id="remember-me" />);
    const input = screen.getByRole('checkbox');
    expect(input).toHaveAttribute('type', 'checkbox');
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<CheckboxInput label="remember me" id="remember me"/>);
    expect(container).toMatchSnapshot();
  })
});