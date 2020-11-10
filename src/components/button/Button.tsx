import React from 'react'
import styled from '@emotion/styled'
import { JoinbleTheme } from '../../Theme'

type IProps = {
  secondary?: boolean
  disabled?: boolean
  children: string
  type?: 'button' | 'reset' | 'submit'
  icon?: React.ReactElement
  testId?: string
}

export const Button: React.FunctionComponent<IProps> = ({
  secondary,
  children,
  disabled,
  type = 'button',
  icon,

  testId
}) => {
  const Button = styled.button`
    background-color: ${secondary
      ? JoinbleTheme.lightestColor
      : JoinbleTheme.primaryColor};
    border: 1px solid ${secondary ? JoinbleTheme.primaryColor : 'transparent'};
    font-size: 1rem;
    min-width: 7rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    white-space: nowrap;
    color: ${secondary
      ? JoinbleTheme.primaryColor
      : JoinbleTheme.lightestColor};
    transition: 0.2s all ease-in-out;
    padding: ${icon ? '0 1rem 0 4.5rem' : '0 1rem'};
    position: relative;

    &:disabled {
      opacity: 0.5;
      cursor: default;

      &:hover {
        background-color: ${secondary
          ? JoinbleTheme.lightestColor
          : JoinbleTheme.primaryColor};
      }
    }
    &:hover {
      background-color: ${secondary
        ? JoinbleTheme.primaryLightColor
        : JoinbleTheme.primaryDarkColor};
      color: ${secondary
        ? JoinbleTheme.primaryColor
        : JoinbleTheme.lightestColor};
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

  const IconWrapper = styled.div`
    position: absolute;
    left: 0;
    padding: 0 1rem;
    background-color: ${secondary ? 'inherit' : JoinbleTheme.primaryDarkColor};
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

  return (
    <Button type={type} disabled={disabled} data-test={testId}>
      {icon && <IconWrapper>{React.cloneElement(icon)}</IconWrapper>}
      {children}
    </Button>
  )
}
