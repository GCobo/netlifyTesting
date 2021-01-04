import styled from '@emotion/styled/macro';
import { CheckboxContainer, LabelCheckbox } from '../checkbox/CheckboxStyles';
import { SwitchBoxProps, SwitchProps, DisabledProps } from './SwitchModel';

export const LabelSwitch = styled(LabelCheckbox)<DisabledProps>`
  margin-bottom: 0;
`;

export const SwitchBoxContainer = styled.div<SwitchBoxProps>`
  border: none;
  background-color: ${(props) =>
    props.checked
      ? props.theme.colors.primaryColor
      : props.theme.colors.lightestColor};
  width: 3.125rem;
  height: 1.625rem;
  border-radius: 100px;
  position: relative;
  border: 1px solid;
  border-color: ${(props) =>
    props.checked
      ? props.theme.colors.primaryColor
      : props.errorLabel
      ? props.theme.colors.errorColor
      : '#E1E4E8'};
  transition: all 0.2s ease-in-out;
`;

export const SwitchBoxBox = styled.div<SwitchBoxProps>`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  background-color: ${(props) =>
    props.checked ? props.theme.colors.lightestColor : '#ADB5BD'};
  position: absolute;
  margin: 0.125rem;
  left: ${(props) => (props.checked ? '1.5625rem' : 0)};
  transition: all 0.2s ease-in-out;
`;

export const SwitchContainer = styled(CheckboxContainer)<SwitchProps>`
  &:hover {
    ${LabelSwitch} {
      color: ${(props) =>
        props.disabled
          ? props.theme.colors.fontColor
          : props.theme.colors.primaryColor};
    }
    ${SwitchBoxContainer} {
      background-color: ${(props) =>
        props.checked
          ? props.theme.colors.primaryColor
          : props.disabled
          ? props.theme.colors.lightestColor
          : props.theme.colors.lightestColor};
      border-color: ${(props) => props.theme.colors.primaryColor};
    }
  }
`;
