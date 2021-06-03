import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { rem } from 'polished';
import { Button } from '../button';
import { ErrorLabel } from '../errorLabel/ErrorLabel';
import { HelpLabel } from '../helpLabel/HelpLabel';
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
  height: ${rem(40)};
  width: 100%;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: ${(props) => props.theme.colors.system.white};
  border-radius: ${rem(4)};
  padding: 0 ${rem(12)};
  column-gap: ${rem(8)};
  box-shadow: ${(props) => `
  inset 0px 0px 0px 1px ${
    props.errorLabel
      ? props.theme.colors.system.error
      : props.theme.colors.primary.greyLight
  }
`};

  &:hover,
  &:focus {
    box-shadow: ${(props) =>
      props.disabled
        ? `inset 0px 0px 0px 1px ${props.theme.colors.primary.greyLight}`
        : `inset 0px 0px 0px 1px ${props.theme.colors.primary.primary}`};
    border: none;
    outline: none;
  }
  svg {
    width: ${rem(20)};
    min-width: ${rem(20)};
    fill: ${(props) =>
      props.errorLabel
        ? props.theme.colors.system.error
        : props.theme.colors.primary.primary};
  }
`;

export const InputStyle = styled.input`
  border: none;
  ${(props) => props.theme.fonts.regularText('M')};
  color: ${(props) => props.theme.colors.primary.greyDark};
  background-color: transparent;
  height: ${rem(40)};
  width: 100%;
  padding: 0;

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
  margin-bottom: ${rem(4)};
  ${(props) => props.theme.fonts.regularText('S')};
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary.greyDark};

  &:first-letter {
    text-transform: capitalize;
  }
`;

export const HelpLabelInput = styled(HelpLabel)`
  margin-top: ${rem(8)};
`;
export const ErrorLabelInput = styled(ErrorLabel)`
  margin-top: ${rem(8)};
`;

export const TextAreaStyles = styled.textarea<{ errorLabel?: string }>`
  border-radius: ${rem(4)};
  background-color: ${(props) => props.theme.colors.system.white};
  box-shadow: ${(props) =>
    `inset 0px 0px 0px 1px ${
      props.errorLabel
        ? props.theme.colors.system.error
        : props.theme.colors.primary.greyLight
    }`};
  border: none;
  padding: ${rem(8)} ${rem(16)};
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
        : `inset 0px 0px 0px 1px ${props.theme.colors.primary.primary}`};
    border: none;
    outline: none;
  }
`;

export const EditorStyles = (props: any) => css`
  width: 100%;
  border: 0;
  padding: 0;
  min-height: 10rem;
  background-color: ${props.colors.system.white};
  ${props.fonts.regularText('M')};
  box-shadow: inset 0px 0px 0px 1px
    ${props.errorLabel
      ? props.colors.system.error
      : props.colors.primary.greyLight};

  > div {
    margin: 0;
    padding: ${rem(8)} ${rem(16)} 0.3rem ${rem(16)};
  }

  &::placeholder {
    color: ${props.colors.primary.greyLight};
  }

  &:hover,
  &:focus {
    box-shadow: ${props.disabled
      ? `inset 0px 0px 0px 1px ${props.colors.primary.greyLight}`
      : `inset 0px 0px 0px 1px ${props.colors.primary.primary}`};
    border: none;
    outline: none;
  }

  button {
    border: 0;
    background: transparent;
  }
`;

export const ButtonNumericContainer = styled(InputContainer)`
  padding: ${rem(2)};
`;

export const ButtonNumeric = styled(Button)`
  height: 100%;
  min-width: ${rem(42)};
  width: ${rem(42)};
  border-radius: ${rem(4)};

  svg {
    fill: ${(props) => props.theme.colors.system.white};
  }
`;

export const InputNumericStyles = styled(InputStyle)`
  text-align: center;
`;

export const InputRequired = styled.span`
  color: ${(props) => props.theme.colors.system.error};
`;
