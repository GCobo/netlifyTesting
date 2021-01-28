import styled from '@emotion/styled';

export const OptionMenuHeader = styled.h6`
  ${(props) => props.theme.fonts.regularText('M')};
  color: ${(props) => props.theme.colors.primary.greyDark};
  font-weight: 700;
  margin-bottom: 0.5rem;
  &:first-letter {
    text-transform: capitalize;
  }
`;
