import styled from '@emotion/styled';
import { darken } from 'polished';
import { css } from '@emotion/css';

import { ButtonTypeProps } from './ButtonModel';

export const ButtonStyles = styled.button<ButtonTypeProps>`
  background-color: ${(props) =>
    props.secondary
      ? props.theme.colors.white
      : props.error
      ? props.theme.colors.errorColor
      : props.success
      ? props.theme.colors.successColor
      : props.warning
      ? props.theme.colors.warningColor
      : props.white
      ? props.theme.colors.white
      : props.theme.colors.primaryColor};
  border: 1px solid
    ${(props) =>
      props.secondary
        ? props.theme.colors.primaryColor
        : props.white
        ? props.theme.colors.greyLight
        : 'transparent'};
  font-size: 1rem;
  min-width: 7rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  white-space: nowrap;
  color: ${(props) =>
    props.secondary
      ? props.theme.colors.primaryColor
      : props.white
      ? props.theme.colors.titleColor
      : props.theme.colors.white};
  fill: ${(props) =>
    props.secondary
      ? props.theme.colors.primaryColor
      : props.theme.colors.white};
  transition: 0.2s all ease-in-out;
  padding: ${(props) => (props.icon ? '0 1rem 0 4.5rem' : '0 1rem')};
  position: relative;

  &:disabled {
    opacity: 0.5;
    cursor: default;

    &:hover {
      background-color: ${(props) =>
        props.secondary
          ? props.theme.colors.white
          : props.theme.colors.primaryColor};
      color: ${(props) =>
        props.secondary
          ? props.theme.colors.primaryColor
          : props.theme.colors.white};
      fill: ${(props) =>
        props.secondary
          ? props.theme.colors.primaryColor
          : props.theme.colors.white};
    }
  }

  &:hover {
    background-color: ${(props) =>
      props.secondary
        ? props.theme.colors.primaryColor
        : props.error
        ? darken(0.1, props.theme.colors.errorColor)
        : props.success
        ? darken(0.1, props.theme.colors.successColor)
        : props.warning
        ? darken(0.1, props.theme.colors.warningColor)
        : props.white
        ? props.theme.colors.greyLight
        : darken(0.1, props.theme.colors.primaryColor)};
    color: ${(props) =>
      props.white ? props.theme.colors.titleColor : props.theme.colors.white};
    fill: ${(props) => props.theme.colors.white};
  }

  &:focus,
  &:active {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.focusShadow};
  }
  &:first-letter {
    text-transform: capitalize;
  }
`;

export const IconButton = css`
  width: 1rem;
  margin-right: 1rem;
  fill: inherit;
`;
