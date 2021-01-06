import '@emotion/react';
import { IThemeProps } from './styles';

declare module '@emotion/react' {
  export interface Theme extends IThemeProps {}
}
