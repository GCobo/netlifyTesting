import '@emotion/react';

export type IThemeProps = {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    fontColor: string;
    successColor: string;
    warningColor: string;
    errorColor: string;
    lightestColor: string;
    darkestColor: string;
    grey: string;
    greyLight: string;
    logoColor: string;
    focusShadow: string;
    titleColor: string;
  };
  fonts: {
    fontFamily: string;
    fontSizeSmall: string;
    fontSizeMedium: string;
    fontSizeBig: string;
  };
};

export const JoinbleTheme: IThemeProps = {
  colors: {
    primaryColor: '#0C66FF',
    secondaryColor: '#5bc0be',
    fontColor: '#6E768E',
    successColor: '#1ABC9C',
    warningColor: '#F7B84B',
    errorColor: '#F1556C',
    lightestColor: '#fff',
    darkestColor: '#000',
    grey: '#E1E4E8',
    greyLight: '#B0B7C3',
    logoColor: '#e6ec33',
    focusShadow: 'rgba(66, 153, 225, 0.6)',
    titleColor: '#323A46'
  },
  fonts: {
    fontFamily: 'Inter',
    fontSizeSmall: '0.75rem',
    fontSizeMedium: '0.875rem',
    fontSizeBig: '1rem'
  }
};
