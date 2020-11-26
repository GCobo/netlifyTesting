import styled from '@emotion/styled/macro'
import { JoinbleTheme } from '../../Theme'
import { darken } from 'polished'

export const CheckPlatformWrapper = styled.ul`
  display: flex;
  grid-column-gap: 1.25rem;
`

export const CheckPlatformOption = styled.li`
  svg {
    width: 2.25rem;
    height: 2.25rem;
    cursor: pointer;
  }
  > input:checked + button {
    svg {
      fill: ${JoinbleTheme.primaryColor};
    }
  }

  > input:checked + button:hover {
    svg {
      fill: ${darken(0.1, JoinbleTheme.primaryColor)};
    }
  }
`

export const CheckPlatformInput = styled.input`
  border: 0;
  position: absolute;
  width: 1px;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
`
