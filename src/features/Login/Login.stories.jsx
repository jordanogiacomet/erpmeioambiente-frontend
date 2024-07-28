// Login.stories.jsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Login from './Login';
import { theme } from '../../styles/theme';
import { MemoryRouter } from 'react-router-dom';

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <MemoryRouter><Login {...args} /></MemoryRouter>
  </ThemeProvider>
);

export default {
  title: 'Components/Login',
  component: Login,
  decorators: [withKnobs],
  argTypes: {
    email: { control: 'text' },
    password: { control: 'text' },
    rememberMe: { control: 'boolean' },
    loading: { control: 'boolean' },
    error: { control: 'text' },
  },
};

export const Default = Template.bind({});
Default.args = {
  email: '',
  password: '',
  rememberMe: false,
  loading: false,
  error: '',
};

export const Customizable = (args) => (
  <ThemeProvider theme={theme}>
    <MemoryRouter>
      <Login
        email={text('Email', '')}
        password={text('Password', '')}
        rememberMe={boolean('Remember Me', false)}
        loading={boolean('Loading', false)}
        error={text('Error', '')}
        {...args}
      />
    </MemoryRouter>
  </ThemeProvider>
);
