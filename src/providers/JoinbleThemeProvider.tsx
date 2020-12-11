import React from 'react';
import { ThemeProvider } from '@emotion/react';

import { JoinbleTheme } from '../Theme';
import { GlobalStyles } from '../GlobalStyles';

type IProps = {
  children: React.ReactNode;
};

export const JoinbleThemeProvider = ({ children }: IProps) => {
  return (
    <ThemeProvider theme={JoinbleTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
