import styled from '@emotion/styled'
import { darken } from 'polished'

export const LinkStyles = styled.a`
  color: ${(props) => props.theme.colors.primaryColor};
  border-bottom: 1px solid ${(props) => props.theme.colors.primaryColor};
  font-size: ${(props) => props.theme.fonts.fontSizeSmall};
  font-weight: 700;
  padding-bottom: 1px;
  cursor: pointer;
  display: block;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${(props) => darken(0.1, `${props.theme.colors.primaryColor}`)};
    border-color: ${(props) =>
      darken(0.1, `${props.theme.colors.primaryColor}`)};
  }
`
