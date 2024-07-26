import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from './Button';
import { theme } from '../../styles/theme';


export default {
  title: 'Components/Button',
  component: Button,
  decorators: [(Story) => <ThemeProvider theme={theme}><Story /></ThemeProvider>],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    hoverBackgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Login In',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Login In',
  disabled: true,
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  text: 'Custom Colors',
  backgroundColor: '#4caf50',
  color: '#fff',
  hoverBackgroundColor: '#45a049',
};
