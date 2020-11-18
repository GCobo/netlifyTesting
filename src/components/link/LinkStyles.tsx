import styled from '@emotion/styled'
import { JoinbleTheme } from '../../Theme'
import { darken } from 'polished'

export const LinkStyles = styled.a`
  color: ${JoinbleTheme.primaryColor};
  border-bottom: 1px solid ${JoinbleTheme.primaryColor};
  font-size: ${JoinbleTheme.fontSizeSmall};
  font-weight: 700;
  padding-bottom: 1px;
  cursor: pointer;
  display: block;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${darken(0.1, `${JoinbleTheme.primaryColor}`)};
    border-color: ${darken(0.1, `${JoinbleTheme.primaryColor}`)};
  }
`
