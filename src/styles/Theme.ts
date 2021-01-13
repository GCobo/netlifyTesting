import '@emotion/react';
import { createFont, Font } from './fonts/font';

export type IThemeProps = {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    fontColor: string;
    successColor: string;
    warningColor: string;
    errorColor: string;
    infoColor: string;
    white: string;
    black: string;
    grey: string;
    greyLight: string;
    logoColor: string;
    focusShadow: string;
    titleColor: string;
    activeLink: string;
  };
  fonts: Font;
};

export const JoinbleTheme: IThemeProps = {
  colors: {
    primaryColor: '#0C66FF',
    secondaryColor: '#5bc0be',
    fontColor: '#6E768E',
    successColor: '#1ABC9C',
    warningColor: '#F7B84B',
    errorColor: '#F1556C',
    infoColor: '#4FC6E1',
    white: '#fff',
    black: '#000',
    grey: '#E1E4E8',
    greyLight: '#B0B7C3',
    logoColor: '#e6ec33',
    focusShadow: 'rgba(66, 153, 225, 0.6)',
    titleColor: '#323A46',
    activeLink: '#CDD31B'
  },
  fonts: createFont({
    headline: {
      L: 36,
      M: 22,
      S: 16,
      XS: 12
    },
    lineHeightHeadline: {
      L: 40,
      M: 28,
      S: 24,
      XS: 15
    },
    text: {
      XL: 18,
      L: 16,
      M: 14,
      S: 12,
      XS: 9
    },
    lineHeightText: {
      XL: 26,
      L: 24,
      M: 24,
      S: 20,
      XS: 12
    }
  })
};
