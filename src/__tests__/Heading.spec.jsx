/* eslint-disable testing-library/no-node-access */
import React from 'react';
import renderTheme from '../styles/render-theme';
import 'jest-styled-components';
import Heading from '../components/Heading/Heading';
import { theme } from '../styles/theme';
import { screen } from '@testing-library/react';

describe('<Heading />', () => {
  it('should render with default props', () => {
    const { container } = renderTheme(<Heading>Test</Heading>);

    expect(container.firstChild).toHaveStyleRule('font-size', theme.font.sizes.xhuge);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render with uppercase text', () => {
    renderTheme(<Heading uppercase>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle('text-transform: uppercase');
  });
  it('should render with different sizes', () => {
    renderTheme(
      <>
        <Heading size="small">small</Heading>
        <Heading size="medium">medium</Heading>
        <Heading size="big">big</Heading>
      </>
    );
    expect(screen.getByRole('heading', { name: 'small' })).toHaveStyle(`font-size: ${theme.font.sizes.xlarge}`);
    expect(screen.getByRole('heading', { name: 'medium' })).toHaveStyle(`font-size: ${theme.font.sizes.huge}`);
    expect(screen.getByRole('heading', { name: 'big' })).toHaveStyle(`font-size: ${theme.font.sizes.xhuge}`);
  });
  it('should render with color based on colorDark prop', () => {
    renderTheme(
      <>
        <Heading colorDark={false}>light</Heading>
        <Heading colorDark={true}>dark</Heading>
      </>
    );
    expect(screen.getByRole('heading', { name: 'light' })).toHaveStyle(`color: ${theme.colors.secondary}`);
    expect(screen.getByRole('heading', { name: 'dark' })).toHaveStyle(`color: ${theme.colors.primary}`);
  });
});