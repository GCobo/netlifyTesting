import styled from '@emotion/styled';
import { darken } from 'polished';
import { Badgets } from '../badgets/Badgets';

type IProps = {
  badgetsNumber?: number;
  secondary?: boolean;
  negative?: boolean;
};

export const ButtonIconStyle = styled.button<IProps>`
  cursor: pointer;
  padding: 0;
  position: ${(props) => (props.badgetsNumber ? 'relative' : 'unset')};
  fill: ${(props) =>
    props.negative
      ? props.theme.colors.lightestColor
      : props.secondary
      ? props.theme.colors.fontColor
      : props.theme.colors.primaryColor};

  &:active,
  &:hover {
    outline: none;
    fill: ${(props) =>
      props.negative || props.secondary
        ? props.theme.colors.primaryColor
        : darken(0.1, props.theme.colors.primaryColor)};
  }

  &:focus {
    outline: none;
  }

  svg {
    fill: inherit;
    width: 1.25rem;
  }
`;

export const BadgetsStyles = styled(Badgets)`
  position: absolute;
  left: 1rem;
  bottom: 0;
`;
