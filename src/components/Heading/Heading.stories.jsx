import React from 'react';
import Heading from './Heading';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

export default {
  title: 'Components/Heading',
  component: Heading,
  decorators: [(Story) => <ThemeProvider theme={theme}><Story /></ThemeProvider>],
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'big'],
      },
    },
    uppercase: {
      control: {
        type: 'boolean',
      },
    },
    colorDark: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Heading',
  size: 'big',
  as: 'h1',
};

export const Uppercase = Template.bind({});
Uppercase.args = {
  children: 'Uppercase Heading',
  uppercase: true,
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  children: 'Dark Theme Heading',
  colorDark: true,
};


