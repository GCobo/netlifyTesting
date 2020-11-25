import styled from '@emotion/styled'
import { darken } from 'polished'
import { JoinbleTheme } from '../../Theme'
import { Badgets } from '../badgets/Badgets'

type IProps = {
  badgetsNumber?: number
  secondary?: boolean
  negative?: boolean
}

export const ButtonIconStyle = styled.button<IProps>`
  cursor: pointer;
  padding: 0;
  position: ${(props) => (props.badgetsNumber ? 'relative' : 'unset')};
  fill: ${(props) =>
    props.negative
      ? JoinbleTheme.lightestColor
      : props.secondary
      ? JoinbleTheme.fontColor
      : JoinbleTheme.primaryColor};

  &:active,
  &:hover {
    outline: none;
    fill: ${(props) =>
      props.negative || props.secondary
        ? JoinbleTheme.primaryColor
        : darken(0.1, JoinbleTheme.primaryColor)};
  }

  &:focus {
    outline: none;
  }

  svg {
    fill: inherit;
    width: 1.25rem;
  }
`

export const BadgetsStyles = styled(Badgets)`
  position: absolute;
  left: 1rem;
  bottom: 0;
`
