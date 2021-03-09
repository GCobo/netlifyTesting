import styled from '@emotion/styled';
import { HelpLabel } from '../helpLabel/HelpLabel';
import { ErrorLabel } from '../errorLabel/ErrorLabel';
import { FormContainerProps } from './model';

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column;
  width: 100%;
  text-align: start;
  position: relative;
`;

export const InputContainer = styled.div<FormContainerProps>`
  display: flex;
  align-items: center;
  height: 2.5rem;
  width: 100%;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: ${(props) => props.theme.colors.system.white};
  border-radius: 0.25rem;

  &:before {
    content: '';
    width: 100%;
    height: 2.5rem;
    border-radius: 0.25rem;
    position: absolute;
    pointer-events: none;
    box-shadow: ${(props) => `
  inset 0px 0px 0px 1px ${
    props.errorLabel
      ? props.theme.colors.system.error
      : props.theme.colors.primary.greyLight
  }
`};
  }
  &:hover,
  &:focus {
    :before {
      box-shadow: ${(props) =>
        props.disabled
          ? `inset 0px 0px 0px 1px ${props.theme.colors.primary.greyLight}`
          : `inset 0px 0px 0px 1px ${props.theme.colors.primary.greenLight}`};
      border: none;
      outline: none;
    }
  }
  svg {
    width: 1.25rem;
    min-width: 1.25rem;
    fill: ${(props) =>
      props.errorLabel
        ? props.theme.colors.system.error
        : props.theme.colors.primary.greenLight};
    margin-right: 0.75rem;
  }
`;

export const InputStyle = styled.input`
  border: none;
  ${(props) => props.theme.fonts.regularText('M')};
  color: ${(props) => props.theme.colors.primary.greyDark};
  background-color: transparent;
  height: 2.5rem;
  width: 100%;
  padding: 0 0.75rem;

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
    color: ${(props) => props.theme.colors.primary.greyLight};
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.25rem;
  ${(props) => props.theme.fonts.regularText('S')};
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary.greyDark};

  &:first-letter {
    text-transform: capitalize;
  }
`;

export const HelpLabelInput = styled(HelpLabel)`
  margin-top: 0.25rem;
`;
export const ErrorLabelInput = styled(ErrorLabel)`
  margin-top: 0.25rem;
`;

export const TextAreaStyles = styled.textarea<{ errorLabel?: string }>`
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.colors.system.white};
  box-shadow: ${(props) =>
    `inset 0px 0px 0px 1px ${
      props.errorLabel
        ? props.theme.colors.system.error
        : props.theme.colors.primary.greyLight
    }`};
  border: none;
  padding: 0.5rem 1rem;
  ${(props) => props.theme.fonts.regularText('M')};
  resize: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.primary.greyLight};
  }

  &:hover,
  &:focus {
    box-shadow: ${(props) =>
      props.disabled
        ? `inset 0px 0px 0px 1px ${props.theme.colors.primary.greyLight}`
        : `inset 0px 0px 0px 1px ${props.theme.colors.primary.greenLight}`};
    border: none;
    outline: none;
  }
`;
