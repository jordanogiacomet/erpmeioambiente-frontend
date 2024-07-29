// CheckboxInput.stories.jsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import CheckboxInput from '../components/Form/CheckboxInput';
import { theme } from '../styles/theme';

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <CheckboxInput {...args} />
  </ThemeProvider>
);

export default {
  title: 'Form/CheckboxInput',
  component: CheckboxInput,
  decorators: [withKnobs],
  argTypes: {
    label: { control: 'text' },
    id: { control: 'text' },
    checked: { control: 'boolean' },
  },
};

export const Default = Template.bind({});
Default.args = {
  label: 'Remember Me',
  id: 'rememberMe',
  checked: false,
};

export const Customizable = (args) => (
  <ThemeProvider theme={theme}>
    <CheckboxInput
      label={text('Label', 'Remember Me')}
      id={text('ID', 'rememberMe')}
      checked={boolean('Checked', false)}
      {...args}
    />
  </ThemeProvider>
);
