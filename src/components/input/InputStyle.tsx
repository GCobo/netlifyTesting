import React from 'react'
import styled from '@emotion/styled'
import { JoinbleTheme } from '../../Theme'
import { ErrorLabel } from '../errorLabel/ErrorLabel'
import { AlertIcon } from '../icons'

type IInputProps = {
  errorLabel?: string
  icon?: React.ReactElement
}

type IWrapperProps = {
  icon?: React.ReactElement
}

export const Wrapper = styled.section<IWrapperProps>`
  display: flex;
  flex-flow: column;
  position: relative;
  width: 100%;

  svg {
    ${(props) =>
      props.icon &&
      `
      position: absolute;
      right: 0.75rem;
      top: 2rem;
      fill: ${JoinbleTheme.primaryColor};
    `}
  }
`
export const InputStyle = styled.input<IInputProps>`
  border: none;
  font-size: ${JoinbleTheme.fontSizeMedium};
  color: ${JoinbleTheme.fontColor};
  box-shadow: ${(props) => `
  inset 0px 0px 0px 1px ${
    props.errorLabel ? JoinbleTheme.errorColor : JoinbleTheme.grey
  }
`};
  border-radius: 0.25rem;
  background-color: transparent;
  height: 2.5rem;
  width: 100%;
  padding: 0 0.75rem;
  padding-right: ${(props) =>
    props.errorLabel ? '2.5rem' : props.icon && '2.5rem'};
  font-weight: 500;
  font-family: ${JoinbleTheme.fontPrimary};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${JoinbleTheme.greyLight};
  }

  &:disabled {
    opacity: 0.5;
    &:hover,
    &:focus {
      box-shadow: ${`inset 0px 0px 0px 1px ${JoinbleTheme.grey}`};
      border: none;
      outline: none;
    }
  }

  &:hover,
  &:focus {
    box-shadow: ${`inset 0px 0px 0px 1px ${JoinbleTheme.primaryColor}`};
    border: none;
    outline: none;
  }
`

export const Label = styled.label`
  font-size: ${JoinbleTheme.fontSizeSmall};
  font-weight: 500;
  line-height: 1.25rem;
  margin-bottom: 0.25rem;
  color: ${JoinbleTheme.fontColor};
  font-family: ${JoinbleTheme.fontPrimary};

  &:first-letter {
    text-transform: capitalize;
  }
`

export const ErrorInputLabel = styled(ErrorLabel)`
  margin-top: 0.25rem;
`
export const IconError = styled(AlertIcon)`
  position: absolute;
  right: 0.75rem;
  top: 2rem;
  fill: ${JoinbleTheme.errorColor};
`
