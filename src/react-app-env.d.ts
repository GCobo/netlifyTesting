/// <reference types="react-scripts" />

declare module 'rc-color-picker' {
  export default class ColorPickerNative extends React.Component<{
    defaultColor?: string
    defaultAlpha?: number
    alpha?: number
    className?: string
    color?: string
    enableAlpha?: boolean
    mode?: 'RGB' | 'HSL' | 'HSB'
    onChange?: (values: { color: string; alpha?: number }) => void
    onClose?: () => void
    onOpen?: () => void
    placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
    prefixCls?: string
    style?: CSSStyleDeclaration
    animation?: string
  }> {}
}
