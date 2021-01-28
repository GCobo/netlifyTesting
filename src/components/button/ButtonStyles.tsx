import styled from '@emotion/styled/macro';
import { darken } from 'polished';
import { css } from '@emotion/css';

import { ButtonTypeProps } from './ButtonModel';
import { Loading } from '../loading/Loading';

export const LoadingButton = styled(Loading)<ButtonTypeProps>`
  width: 1.5rem;
  min-width: 1.5rem;
  height: 1.5rem;

  div {
    position: unset;
    box-shadow: ${(props) =>
      `inset 0px 0px 0px 1px ${
        !props.outline && !props.success && !props.error && !props.warning
          ? props.theme.colors.primary.greenDark
          : props.outline
          ? props.theme.colors.primary.greyDark
          : props.theme.colors.system.white
      } `};
    background-color: ${(props) =>
      !props.outline && !props.success && !props.error && !props.warning
        ? props.theme.colors.primary.greenDark
        : props.outline
        ? props.theme.colors.primary.greyDark
        : props.theme.colors.system.white};
  }
`;

export const ButtonStyles = styled.button<ButtonTypeProps>`
  background-color: ${(props) =>
    props.outline
      ? 'transparent'
      : props.error
      ? props.theme.colors.system.error
      : props.success
      ? props.theme.colors.system.success
      : props.warning
      ? props.theme.colors.system.warning
      : props.theme.colors.primary.greenLight};
  border: 1px solid
    ${(props) =>
      props.outline ? props.theme.colors.primary.greyLight : 'transparent'};
  font-size: 1rem;
  min-width: 7rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  grid-column-gap: 1rem;
  cursor: pointer;
  white-space: nowrap;
  color: ${(props) =>
    !props.outline && !props.success && !props.error && !props.warning
      ? props.theme.colors.primary.greenDark
      : props.outline
      ? props.theme.colors.primary.greyDark
      : props.theme.colors.system.white};
  fill: ${(props) =>
    !props.outline && !props.success && !props.error && !props.warning
      ? props.theme.colors.primary.greenDark
      : props.outline
      ? props.theme.colors.primary.greyDark
      : props.theme.colors.system.white};
  transition: 0.2s all ease-in-out;
  padding: ${(props) => (props.icon ? '0 1rem 0 4.5rem' : '0 1rem')};
  position: relative;

  &:disabled {
    opacity: 0.5;
    cursor: default;

    &:hover {
      background-color: ${(props) =>
        props.outline
          ? 'transparent'
          : props.error
          ? props.theme.colors.system.error
          : props.success
          ? props.theme.colors.system.success
          : props.warning
          ? props.theme.colors.system.warning
          : props.theme.colors.primary.greenLight};
      color: ${(props) =>
        !props.outline && !props.success && !props.error && !props.warning
          ? props.theme.colors.primary.greenDark
          : props.outline
          ? props.theme.colors.primary.greyDark
          : props.theme.colors.system.white};
      fill: ${(props) =>
        !props.outline && !props.success && !props.error && !props.warning
          ? props.theme.colors.primary.greenDark
          : props.outline
          ? props.theme.colors.primary.greyDark
          : props.theme.colors.system.white};
    }
  }

  &:hover {
    background-color: ${(props) =>
      props.outline
        ? props.theme.colors.primary.greyLight
        : props.error
        ? darken(0.1, props.theme.colors.system.error)
        : props.success
        ? darken(0.1, props.theme.colors.system.success)
        : props.warning
        ? darken(0.1, props.theme.colors.system.warning)
        : darken(0.1, props.theme.colors.primary.greenLight)};
    color: ${(props) =>
      props.outline
        ? props.theme.colors.primary.greyDark
        : props.theme.colors.system.white};
    fill: ${(props) =>
      props.outline
        ? props.theme.colors.primary.greyDark
        : props.theme.colors.system.white};

    ${LoadingButton} {
      div {
        box-shadow: ${(props) =>
          `inset 0px 0px 0px 1px ${
            props.outline
              ? props.theme.colors.primary.greyDark
              : props.theme.colors.system.white
          } `};
        background-color: ${(props) =>
          props.outline
            ? props.theme.colors.primary.greyDark
            : props.theme.colors.system.white};
      }
    }
  }

  &:focus,
  &:active {
    outline: none;
  }

  &:first-letter {
    text-transform: capitalize;
  }
`;

export const IconButton = css`
  width: 1.25rem;
  min-width: 1.25rem;
  fill: inherit;
`;
