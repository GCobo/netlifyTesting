import styled from '@emotion/styled'
import { JoinbleTheme } from '../../Theme'

export const ButtonIconStyle = styled.button`
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  svg {
    stroke: ${JoinbleTheme.primaryColor};
  }
`
