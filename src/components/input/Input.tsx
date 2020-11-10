import React from 'react'
import styled from '@emotion/styled'
import { JoinbleTheme } from '../../Theme'
import { AlertIcon } from '../icons'
import { ErrorLabel, HelpLabel } from '..'

type IProps = {
  errorLabel?: string
  inputType?: 'text' | 'number' | 'password' | 'email'
  disabled?: boolean
  label: string
  helpLabel?: string
  id?: string
  placeHolder?: string
  icon?: React.ReactElement
}

export const Input: React.FunctionComponent<IProps> = ({
  errorLabel,
  inputType = 'text',
  disabled,
  helpLabel,
  label,
  id,
  placeHolder,
  icon
}) => {
  const Wrapper = styled.section`
    display: flex;
    flex-flow: column;
    position: relative;

    svg {
      ${icon &&
      `
      position: absolute;
      right: 0.75rem;
      top: 2rem;
      stroke: ${JoinbleTheme.primaryColor};
    `}
    }
  `

  const ErrorInputLabel = styled(ErrorLabel)`
    margin-top: 0.25rem;
  `
  const IconError = styled(AlertIcon)`
    position: absolute;
    right: 0.75rem;
    top: 2rem;
    stroke: ${JoinbleTheme.errorColor};
  `

  const Input = styled.input`
    border: none;
    font-size: ${JoinbleTheme.fontSizeMedium};
    color: ${JoinbleTheme.fontColor};
    box-shadow: ${`inset 0px 0px 0px 1px ${
      errorLabel ? JoinbleTheme.errorColor : JoinbleTheme.grey
    } `};
    border-radius: 0.25rem;
    background-color: transparent;
    height: 2.5rem;
    padding: 0 0.75rem;
    padding-right: ${errorLabel || (icon && '40px')};
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

  const Label = styled.label`
    font-size: ${JoinbleTheme.fontSizeSmall};
    font-weight: 500;
    line-height: 1.25rem;
    margin-bottom: 0.25rem;
    color: ${JoinbleTheme.fontColor};

    &:first-letter {
      text-transform: capitalize;
    }
  `

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={inputType}
        id={id}
        disabled={disabled}
        placeholder={placeHolder}
      />
      {icon && React.cloneElement(icon)}
      {errorLabel && <IconError />}
      {errorLabel && <ErrorInputLabel>{errorLabel}</ErrorInputLabel>}
      {helpLabel && <HelpLabel>{helpLabel}</HelpLabel>}
    </Wrapper>
  )
}
