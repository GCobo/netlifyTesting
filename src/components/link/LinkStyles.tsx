import styled from '@emotion/styled';
import { darken } from 'polished';

export const LinkStyles = styled.a`
  color: ${(props) => props.theme.colors.primary.greenLight};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary.greenLight};
  ${(props) => props.theme.fonts.regularText('S')};
  font-weight: 700;
  padding-bottom: 1px;
  cursor: pointer;
  display: block;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${(props) =>
      darken(0.1, `${props.theme.colors.primary.greenLight}`)};
    border-color: ${(props) =>
      darken(0.1, `${props.theme.colors.primary.greenLight}`)};
  }
`;
