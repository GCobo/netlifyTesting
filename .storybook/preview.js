import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { addDecorator } from '@storybook/react';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import { JoinbleTheme } from '../src/styles/Theme';

addDecorator((storyFn) => (
  <ThemeProvider theme={JoinbleTheme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
