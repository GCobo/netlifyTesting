import styled from '@emotion/styled/macro';
import { darken } from 'polished';
import { css } from '@emotion/css';

import { ButtonTypeProps } from './ButtonModel';
import { Loading } from '../loading/Loading';

const TRANSITION = 'all 0.3s ease-in-out';

export const LoadingButton = styled(Loading)<ButtonTypeProps>`
  width: 1.5rem;
  min-width: 1.5rem;
  height: 1.5rem;

  div {
    position: unset;
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
    transition: ${TRANSITION};
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
  box-shadow: ${(props) =>
    props.outline &&
    ` inset 0px 0px 0px 1px ${props.theme.colors.primary.greyLight}`};
  ${(props) => props.theme.fonts.regularText('L')};
  min-width: 7rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
  cursor: pointer;
  white-space: nowrap;
  color: ${(props) =>
    props.outline
      ? props.theme.colors.primary.greyDark
      : props.theme.colors.system.white};
  fill: ${(props) =>
    props.outline
      ? props.theme.colors.primary.greyDark
      : props.theme.colors.system.white};
  transition: 0.2s all ease-in-out;
  padding: ${(props) => (props.icon ? '0 1rem 0 4.5rem' : '0 1rem')};
  position: relative;
  overflow: hidden;
  z-index: 2;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    transition: ${TRANSITION};
    z-index: -1;
    border-radius: inherit;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;

    &:hover {
      color: ${(props) =>
        props.outline
          ? props.theme.colors.primary.greyDark
          : props.theme.colors.system.white};
      fill: ${(props) =>
        props.outline
          ? props.theme.colors.primary.greyDark
          : props.theme.colors.system.white};
      &:before {
        background: ${(props) =>
          props.outline
            ? 'transparent'
            : props.error
            ? props.theme.colors.system.error
            : props.success
            ? props.theme.colors.system.success
            : props.warning
            ? props.theme.colors.system.warning
            : props.theme.colors.primary.greenLight};
      }
    }
  }

  &:hover {
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
          `inset 0px 0px 0px 1px ${props.theme.colors.system.white} `};
        background-color: ${(props) =>
          props.outline
            ? props.theme.colors.primary.greyDark
            : props.theme.colors.system.white};
      }
    }
    &:before {
      width: 100%;
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
