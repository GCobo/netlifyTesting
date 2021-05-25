import styled from '@emotion/styled';
import { darken, rem } from 'polished';

type IProps = {
  badgets?: boolean;
  secondary?: boolean;
  negative?: boolean;
  bigIcon?: boolean;
  size?: 'XL' | 'L' | 'M' | 'S';
};

export const ButtonIconStyle = styled.button<IProps>`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  fill: ${(props) =>
    props.negative
      ? props.theme.colors.system.white
      : props.secondary
      ? props.theme.colors.primary.greyDark
      : props.theme.colors.primary.greenLight};
  width: ${(props) =>
    props.size === 'XL'
      ? `${rem(36)}`
      : props.size === 'L'
      ? `${rem(24)} `
      : props.size === 'M'
      ? `${rem(20)}`
      : `${rem(16)}`};
  min-width: ${(props) =>
    props.size === 'XL'
      ? `${rem(36)}`
      : props.size === 'L'
      ? `${rem(24)} `
      : props.size === 'M'
      ? `${rem(20)}`
      : `${rem(16)}`};
  height: ${(props) =>
    props.size === 'XL'
      ? `${rem(36)}`
      : props.size === 'L'
      ? `${rem(24)} `
      : props.size === 'M'
      ? `${rem(20)}`
      : `${rem(16)}`};

  ${(props) => props.badgets && `position: relative`};

  &:active,
  &:hover {
    outline: none;
    fill: ${(props) =>
      props.disabled
        ? 'auto'
        : props.negative || props.secondary
        ? props.theme.colors.primary.greenLight
        : darken(0.1, props.theme.colors.primary.greenLight)};
  }

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:focus {
    outline: none;
  }

  svg {
    fill: inherit;
    width: inherit;
    min-width: inherit;
    height: inherit;
  }
`;

export const ButtonIconBadget = styled.span`
  width: ${rem(8)};
  height: ${rem(8)};
  background-color: ${(props) => props.theme.colors.system.error};
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 100%;
`;
