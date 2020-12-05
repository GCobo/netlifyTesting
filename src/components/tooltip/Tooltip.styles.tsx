import { css } from '@emotion/css'
import { lighten } from 'polished'
import { JoinbleTheme } from '../../Theme'

const BACKGROUND_COLOR = lighten(0.3, '#111112')

export const TooltipStyles = css`
  background: ${BACKGROUND_COLOR} !important;
  font-size: ${JoinbleTheme.fonts.fontSizeSmall} !important;
  color: ${JoinbleTheme.colors.lightestColor} !important;
  &.show {
    opacity: 1 !important;
  }
  &.place-top {
    &:after {
      border-top-color: ${BACKGROUND_COLOR} !important;
    }
  }
  &.place-bottom {
    &:after {
      border-bottom-color: ${BACKGROUND_COLOR} !important;
    }
  }
  &.place-left {
    &:after {
      border-left-color: ${BACKGROUND_COLOR} !important;
    }
  }
  &.place-right {
    &:after {
      border-right-color: ${BACKGROUND_COLOR} !important;
    }
  }
`
