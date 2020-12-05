import React from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'
import { css } from '@emotion/css'

type IButtonProps = {
  secondary?: boolean
  icon?: React.ReactElement
  warning?: boolean
  error?: boolean
  success?: boolean
}

export const ButtonStyles = styled.button<IButtonProps>`
  background-color: ${(props) =>
    props.secondary
      ? props.theme.colors.lightestColor
      : props.error
      ? props.theme.colors.errorColor
      : props.success
      ? props.theme.colors.successColor
      : props.warning
      ? props.theme.colors.warningColor
      : props.theme.colors.primaryColor};
  border: 1px solid
    ${(props) =>
      props.secondary ? props.theme.colors.primaryColor : 'transparent'};
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
      : props.theme.colors.lightestColor};
  fill: ${(props) =>
    props.secondary
      ? props.theme.colors.primaryColor
      : props.theme.colors.lightestColor};
  transition: 0.2s all ease-in-out;
  padding: ${(props) => (props.icon ? '0 1rem 0 4.5rem' : '0 1rem')};
  position: relative;

  &:disabled {
    opacity: 0.5;
    cursor: default;

    &:hover {
      background-color: ${(props) =>
        props.secondary
          ? props.theme.colors.lightestColor
          : props.theme.colors.primaryColor};
      color: ${(props) =>
        props.secondary
          ? props.theme.colors.primaryColor
          : props.theme.colors.lightestColor};
      fill: ${(props) =>
        props.secondary
          ? props.theme.colors.primaryColor
          : props.theme.colors.lightestColor};
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
        : darken(0.1, props.theme.colors.primaryColor)};
    color: ${(props) => props.theme.colors.lightestColor};
    fill: ${(props) => props.theme.colors.lightestColor};
  }

  &:focus,
  &:active {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.focusShadow};
  }
  &:first-letter {
    text-transform: capitalize;
  }
`

export const IconButton = css`
  width: 1rem;
  margin-right: 1rem;
  fill: inherit;
`
