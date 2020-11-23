import React from 'react'
import styled from '@emotion/styled'
import { JoinbleTheme } from '../../Theme'
import { AlertIcon } from '../icons'
import { css } from '@emotion/css'
import { ButtonIcon } from '../button/ButtonIcon'
import { HelpLabel } from '../helpLabel/HelpLabel'
import { ErrorLabel } from '../errorLabel/ErrorLabel'

type IWrapperProps = {
  icon?: React.ReactElement
}

export const Wrapper = styled.section<IWrapperProps>`
  display: flex;
  flex-flow: column;
  position: relative;
  width: 100%;
  text-align: start;
`
type IInputProps = {
  errorLabel?: string
  icon?: React.ReactElement
  type?: 'text' | 'number' | 'password' | 'email'
  passwordShow?: boolean
}

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
    props.type === 'password' ||
    props.icon ||
    props.errorLabel ||
    props.passwordShow
      ? '2.5rem'
      : '0.75rem'};
  font-weight: 500;
  font-family: ${JoinbleTheme.fontPrimary};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-ms-reveal,
  &::-ms-clear {
    display: none;
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

export const ButtonPassword = styled(ButtonIcon)`
  svg {
    fill: ${JoinbleTheme.primaryColor};
    position: absolute;
    width: 1.25rem;
    right: 0.75rem;
    top: 2rem;
  }
`

export const IconError = styled(AlertIcon)`
  fill: ${JoinbleTheme.errorColor};
  position: absolute;
  width: 1.25rem;
  right: 0.75rem;
  top: 2rem;
`

export const InputIcon = css`
  position: absolute;
  width: 1.25rem;
  right: 0.75rem;
  top: 2rem;
  fill: ${JoinbleTheme.primaryColor};
`
export const HelpLabelInput = styled(HelpLabel)`
  margin-top: 0.25rem;
`
export const ErrorLabelInput = styled(ErrorLabel)`
  margin-top: 0.25rem;
`
