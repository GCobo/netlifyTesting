import React from 'react'
import styled from '@emotion/styled'
import { JoinbleTheme } from '../../Theme'

type IButtonProps = {
  secondary?: boolean
  icon?: React.ReactElement
}

export const ButtonStyles = styled.button<IButtonProps>`
  background-color: ${(props) =>
    props.secondary ? JoinbleTheme.lightestColor : JoinbleTheme.primaryColor};
  border: 1px solid
    ${(props) => (props.secondary ? JoinbleTheme.primaryColor : 'transparent')};
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
    props.secondary ? JoinbleTheme.primaryColor : JoinbleTheme.lightestColor};
  transition: 0.2s all ease-in-out;
  padding: ${(props) => (props.icon ? '0 1rem 0 4.5rem' : '0 1rem')};
  position: relative;

  &:disabled {
    opacity: 0.5;
    cursor: default;

    &:hover {
      background-color: ${(props) =>
        props.secondary
          ? JoinbleTheme.lightestColor
          : JoinbleTheme.primaryColor};
    }
  }
  &:hover {
    background-color: ${(props) =>
      props.secondary
        ? JoinbleTheme.primaryLightColor
        : JoinbleTheme.primaryDarkColor};
    color: ${(props) =>
      props.secondary ? JoinbleTheme.primaryColor : JoinbleTheme.lightestColor};
  }
  &:focus,
  &:active {
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
  }
  &:first-letter {
    text-transform: capitalize;
  }
`
type IIconProps = {
  secondary?: boolean
  icon?: React.ReactElement
}

export const IconWrapper = styled.div<IIconProps>`
  position: absolute;
  left: 0;
  padding: 0 1rem;
  background-color: ${(props) =>
    props.secondary ? 'inherit' : JoinbleTheme.primaryDarkColor};
  height: 100%;
  display: grid;
  place-items: center;
  border-radius: 0.25rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: transparent;
  }
`
