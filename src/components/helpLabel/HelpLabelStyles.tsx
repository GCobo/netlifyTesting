import styled from '@emotion/styled';
import { rem } from 'polished';

export const HelpLabelStyles = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: ${rem(8)};
    width: ${rem(24)};
    min-width: ${rem(24)};
    height: ${rem(24)};
    fill: ${(props) => props.theme.colors.primary.greyDark};
  }
  p {
    color: ${(props) => props.theme.colors.primary.greyDark};
    ${(props) => props.theme.fonts.regularText('S')};
    font-weight: 500;
    line-height: ${rem(12)};
  }
`;
