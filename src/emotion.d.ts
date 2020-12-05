import '@emotion/react'
import { IThemeProps } from './Theme'

declare module '@emotion/react' {
  export interface Theme extends IThemeProps {}
}
