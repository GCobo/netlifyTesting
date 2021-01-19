import React from 'react';
import { JoinbleThemeProvider } from '../providers';

export const WrapperTheme = ({ children }: any) => (
  <JoinbleThemeProvider>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '500px'
      }}
    >
      {children}
    </div>
  </JoinbleThemeProvider>
);
