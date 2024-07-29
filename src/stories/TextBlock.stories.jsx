// TextBlock.stories.jsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, text, color } from '@storybook/addon-knobs';
import TextBlock from '../components/TextBlock/TextBlock';
import { theme } from '../styles/theme';

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <TextBlock {...args} />
  </ThemeProvider>
);

export default {
  title: 'Components/TextBlock',
  component: TextBlock,
  decorators: [withKnobs],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    children: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
};

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome',
  subtitle: 'ERPMeioAmbiente',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Distinctio accusamus optio aliquid sed laboriosam aliquam itaque quas soluta, nobis officia cum sint perspiciatis. Quo praesentium delectus quod maxime iste numquam.',
  backgroundColor: theme.colors.primary,
};

export const Customizable = (args) => (
  <ThemeProvider theme={theme}>
    <TextBlock
      title={text('Title', 'Welcome')}
      subtitle={text('Subtitle', 'ERPMeioAmbiente')}
      children={text(
        'Content',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Distinctio accusamus optio aliquid sed laboriosam aliquam itaque quas soluta, nobis officia cum sint perspiciatis. Quo praesentium delectus quod maxime iste numquam.'
      )}
      backgroundColor={color('Background Color', theme.colors.primary)}
    />
  </ThemeProvider>
);
