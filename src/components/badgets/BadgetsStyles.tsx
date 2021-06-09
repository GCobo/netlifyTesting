import styled from '@emotion/styled';
import { rem } from 'polished';

type IProps = {
  number?: number;
};

export const BadgetsStyle = styled.div<IProps>`
  background-color: ${(props) => props.theme.colors.system.error};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${rem(16)};
  width: auto;
  height: ${rem(16)};
  padding: 0 ${rem(6)};
  border-radius: ${(props) =>
    props.number && props.number > 9 ? `${rem(10)}` : '100%'};

  span {
    color: ${(props) => props.theme.colors.system.white};
    font-size: ${rem(10)};
    display: block;
  }
`;
