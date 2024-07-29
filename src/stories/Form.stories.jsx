import React from 'react';
import { ThemeProvider } from 'styled-components';
import Form from '../components/Form/Form';
import Input from '../components/Form/Input';
import { theme } from '../styles/theme';

export default {
  title: 'Login/Form',
  component: Form,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Form {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Input label="Nome" />
      <Input label="Email" type="email" />
      <button type="submit">Registrar</button>
    </>
  ),
};