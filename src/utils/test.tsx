import React from 'react';
import { JoinbleThemeProvider } from '../providers';

export const WrapperTheme = ({ children }: any) => (
  <JoinbleThemeProvider>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        maxWidth: '70vw',
        margin: '0 auto'
      }}
    >
      {children}
    </div>
  </JoinbleThemeProvider>
);
