import styled from '@emotion/styled'
import { darken } from 'polished'
import { JoinbleTheme } from '../../Theme'
import { Badgets } from '../badgets/Badgets'

type IProps = {
  badgetsNumber?: number
  secondary?: boolean
}

export const ButtonIconStyle = styled.button<IProps>`
  cursor: pointer;
  padding: 0;
  position: ${(props) => (props.badgetsNumber ? 'relative' : 'unset')};
  fill: ${(props) =>
    props.secondary ? JoinbleTheme.lightestColor : JoinbleTheme.primaryColor};

  &:focus,
  &:hover {
    outline: none;
    fill: ${darken(0.1, JoinbleTheme.primaryColor)};
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
