import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles, JoinbleTheme } from '../styles';

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
