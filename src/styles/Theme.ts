import '@emotion/react';
import { createFont, Font } from './fonts/font';

export type IThemeProps = {
  colors: {
    primary: {
      greenLight: string;
      greenDark: string;
      greyDarkest: string;
      greyDark: string;
      greyLight: string;
      greyLighest: string;
    };
    system: {
      success: string;
      warning: string;
      error: string;
      info: string;
      white: string;
      black: string;
    };
  };
  mainShadow: string;
  fonts: Font;
};

export const JoinbleTheme: IThemeProps = {
  colors: {
    primary: {
      greenLight: '#1CD8D2',
      greenDark: '#0D837F',
      greyDarkest: '#021514',
      greyDark: '#6E768E',
      greyLight: '#B0B7C3',
      greyLighest: '#F3F7F9'
    },
    system: {
      success: '#1ABC9C',
      warning: '#F7B84B',
      error: '#F1556C',
      info: '#4FC6E1',
      white: '#fff',
      black: '#000'
    }
  },
  mainShadow: '0 0.75rem 6rem rgb(17 17 18 / 3%)',
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
