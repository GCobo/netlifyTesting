import styled from '@emotion/styled'
import { JoinbleTheme } from '../../Theme'
import { darken } from 'polished'

type IProps = {
  hRef: string
}

export const LinkStyles = styled.a<IProps>`
  color: ${JoinbleTheme.primaryColor};
  border-bottom: 1px solid ${JoinbleTheme.primaryColor};
  font-size: ${JoinbleTheme.fontSizeSmall};
  font-weight: 700;
  padding-bottom: 1px;
  cursor: pointer;
  display: block;

  &:hover,
  &:focus {
    color: ${darken(0.1, `${JoinbleTheme.primaryColor}`)};
    border-color: ${darken(0.1, `${JoinbleTheme.primaryColor}`)};
  }
`
