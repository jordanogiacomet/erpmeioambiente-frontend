import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { render } from '@testing-library/react';
import { GlobalStyles } from './global-styles';

const renderTheme = (children) => {
  return render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
  );
};

export default renderTheme;