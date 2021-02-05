import styled from '@emotion/styled';

export const LinkStyles = styled.a`
  color: ${(props) => props.theme.colors.primary.greenDark};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary.greenDark};
  ${(props) => props.theme.fonts.regularText('S')};
  font-weight: 700;
  cursor: pointer;
  display: block;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary.greyDarkest};
    border-color: ${(props) => props.theme.colors.primary.greyDarkest};
  }
`;
