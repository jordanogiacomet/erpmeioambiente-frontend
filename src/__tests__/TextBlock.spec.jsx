import React from 'react';
import { screen } from '@testing-library/react';
import renderTheme from '../styles/render-theme';
import { TextBlock } from '../components/TextBlock';
import theme from '../styles/theme';

describe('<TextBlock />', () => {
  it('should render all elements', () => {
    renderTheme(<TextBlock title="Title" subtitle="Subtitle">test</TextBlock>);

    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Subtitle' })).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<TextBlock title="Title" subtitle="Subtitle">Test</TextBlock>);

    expect(container).toMatchSnapshot();
  });
});