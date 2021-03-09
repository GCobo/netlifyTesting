import styled from '@emotion/styled/macro';
import { CheckboxContainer, LabelCheckbox } from '../checkbox/CheckboxStyles';
import { SwitchBoxProps, SwitchProps, DisabledProps } from './SwitchModel';
import { HelpLabel } from '../helpLabel/HelpLabel';

export const LabelSwitch = styled(LabelCheckbox)<DisabledProps>`
  margin-bottom: 0;
`;

export const SwitchBoxContainer = styled.div<SwitchBoxProps>`
  border: none;
  background-color: ${(props) =>
    props.checked
      ? props.theme.colors.primary.greenLight
      : props.theme.colors.system.white};
  width: 3.125rem;
  height: 1.625rem;
  border-radius: 100px;
  position: relative;
  border: 1px solid;
  border-color: ${(props) =>
    props.checked
      ? props.theme.colors.primary.greenLight
      : props.errorLabel
      ? props.theme.colors.system.error
      : props.theme.colors.primary.greyLight};
  transition: all 0.2s ease-in-out;
`;

export const SwitchBoxBox = styled.div<SwitchBoxProps>`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  background-color: ${(props) =>
    props.checked
      ? props.theme.colors.system.white
      : props.theme.colors.primary.greyLight};
  position: absolute;
  margin: 0.125rem;
  left: ${(props) => (props.checked ? '1.5625rem' : 0)};
  transition: all 0.2s ease-in-out;
`;

export const SwitchContainer = styled(CheckboxContainer)<SwitchProps>`
  display: flex;
  flex-direction: column;
  &:hover {
    ${LabelSwitch} {
      color: ${(props) =>
        props.disabled
          ? props.theme.colors.primary.greyDark
          : props.theme.colors.primary.greenLight};
    }
    ${SwitchBoxContainer} {
      background-color: ${(props) =>
        props.checked
          ? props.theme.colors.primary.greenLight
          : props.disabled
          ? props.theme.colors.system.white
          : props.theme.colors.system.white};
      border-color: ${(props) => props.theme.colors.primary.greenLight};
    }
  }
`;

export const HelpLabelInput = styled(HelpLabel)`
  margin-top: 0.68rem;
  display: flex;
  flex: 1;
`;
