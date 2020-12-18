import styled from '@emotion/styled';

export const OptionMenuHeader = styled.h6`
  font-size: ${(props) => props.theme.fonts.fontSizeMedium};
  color: ${(props) => props.theme.colors.fontColor};
  font-weight: 700;
  margin-bottom: 0.5rem;
  &:first-letter {
    text-transform: capitalize;
  }
`;
