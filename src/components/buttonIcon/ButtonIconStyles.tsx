import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { darken, rem } from 'polished';

type IProps = {
  badgets?: boolean;
  secondary?: boolean;
  negative?: boolean;
  bigIcon?: boolean;
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
    width: ${(props) => (props.bigIcon ? `${rem(36)}` : `${rem(20)}`)};
    height: ${(props) => (props.bigIcon ? `${rem(36)}` : `${rem(20)}`)};
  }
`;

const scale = keyframes`
  0% {
      transform: scale(1);
      opacity: 0.5;
    }

  100% {
      transform: scale(1.25);
      opacity: 1;
    }
`;

export const ButtonIconBadget = styled.span`
  width: ${rem(6)};
  height: ${rem(6)};
  background-color: ${(props) => props.theme.colors.system.error};
  position: absolute;

  right: 0;
  top: 0;
  animation: ${scale} 0.5s ease-in-out infinite;
  border-radius: 100%;
`;
