import styled from '@emotion/styled';
import { darken } from 'polished';
import { Badgets } from '../badgets/Badgets';

type IProps = {
  badgetsNumber?: number;
  secondary?: boolean;
  negative?: boolean;
  bigIcon?: boolean;
};

export const ButtonIconStyle = styled.button<IProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: ${(props) => (props.badgetsNumber ? 'relative' : 'unset')};
  fill: ${(props) =>
    props.negative
      ? props.theme.colors.system.white
      : props.secondary
      ? props.theme.colors.primary.greyDark
      : props.theme.colors.primary.greenLight};

  &:active,
  &:hover {
    outline: none;
    fill: ${(props) =>
      props.negative || props.secondary
        ? props.theme.colors.primary.greenLight
        : darken(0.1, props.theme.colors.primary.greenLight)};
  }

  &:focus {
    outline: none;
  }

  svg {
    fill: inherit;
    width: ${(props) => (props.bigIcon ? '2.25rem' : ' 1.25rem')};
    height: ${(props) => (props.bigIcon ? '2.25rem' : ' 1.25rem')};
  }
`;

export const BadgetsStyles = styled(Badgets)`
  position: absolute;
  left: 1rem;
  bottom: 0;
`;
