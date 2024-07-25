import React from 'react';
import Input from '../Form/Input';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <Story {...context} />
  </ThemeProvider>
);

export default {
  title: 'Form/Input',
  component: Input,
  decorators: [withThemeProvider],
};

export const Default = (args) => <Input {...args} />;

Default.args = {
  label: 'Default Input',
  placeholder: 'Enter text...',
};

export const DefaultWithoutLabel = (args) => <Input {...args} />;

DefaultWithoutLabel.args = {
  placeholder: 'Enter text...',
};


export const Email = (args) => <Input {...args} />;

Email.args = {
  label: 'Email Input',
  type: 'email',
  placeholder: 'Enter your email',
};

export const Password = (args) => <Input {...args} />;

Password.args = {
  label: 'Password Input',
  type: 'password',
  placeholder: 'Enter your password',
};