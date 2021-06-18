import { darken, rem } from 'polished';

import { css } from '@emotion/css';
import styled from '@emotion/styled/macro';

import { Loading } from '../loading/Loading';
import { ButtonTypeProps } from './ButtonModel';

const TRANSITION = 'all 0.3s ease-in-out';
const BUTTON_SIZE = `${rem(24)}`;

export const LoadingButton = styled(Loading)<ButtonTypeProps>`
  width: ${BUTTON_SIZE};
  min-width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
  min-height: ${BUTTON_SIZE};

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
      : props.theme.colors.primary.primary};
  ${(props) =>
    props.outline &&
    `box-shadow:  inset 0px 0px 0px 1px ${props.theme.colors.primary.greyLight}`};
  ${(props) => props.theme.fonts.regularText('M')};
  min-width: ${rem(110)};
  height: ${rem(40)};
  border-radius: ${rem(4)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: ${rem(10)};
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
  padding: ${(props) =>
    props.icon ? `0 ${rem(16)} 0 ${rem(72)}` : `0 ${rem(16)}`};
  position: relative;
  overflow: hidden;
  z-index: 2;
  border: none;

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
            : props.theme.colors.primary.primary};
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
          : darken(0.1, props.theme.colors.primary.primary)};
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
  width: ${rem(14)};
  min-width: ${rem(14)};
  height: ${rem(14)};
  fill: inherit;
`;
