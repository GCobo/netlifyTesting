import styled from '@emotion/styled'
import { JoinbleTheme } from '../../Theme'
import { Badgets } from '../badgets/Badgets'

type IProps = {
  badgetsNumber?: number
}

export const ButtonIconStyle = styled.button<IProps>`
  cursor: pointer;
  padding: 0;
  position: ${(props) => props.badgetsNumber && 'relative'};

  &:focus {
    outline: none;
  }

  svg {
    stroke: ${JoinbleTheme.primaryColor};
  }
`

export const BadgetsStyles = styled(Badgets)`
  position: absolute;
  left: 1rem;
  bottom: 0;
`
