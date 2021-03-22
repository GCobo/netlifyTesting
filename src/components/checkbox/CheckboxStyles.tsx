import styled from '@emotion/styled/macro';
import { ErrorLabel } from '../errorLabel/ErrorLabel';

type ILabelProps = {
  disabled?: boolean;
};

export const HiddenCheckbox = styled.input`
  border: 0;
  position: absolute;
  width: 10px;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
`;

export const LabelCheckbox = styled.label<ILabelProps>`
  ${(props) => props.theme.fonts.regularText('S')};
  color: ${(props) => props.theme.colors.primary.greyDark};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  &:first-letter {
    text-transform: uppercase;
  }
`;

type ICcheckboxContainerProps = {
  disabled?: boolean;
  checked?: boolean;
  errorLabel?: string;
};

export const CheckboxContainer = styled.button<ICcheckboxContainerProps>`
  display: flex;
  flex-flow: ${(props) => (props.errorLabel ? 'column' : 'row')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.5' : 1)};

  > svg {
    fill: ${(props) =>
      props.checked
        ? props.theme.colors.system.white
        : props.errorLabel
        ? props.theme.colors.system.error
        : props.theme.colors.primary.greyDark};
  }

  &:hover {
    ${LabelCheckbox} {
      color: ${(props) =>
        !props.disabled
          ? props.theme.colors.primary.greenLight
          : props.theme.colors.primary.greyDark};
    }
    > svg {
      fill: ${(props) =>
        props.checked
          ? props.theme.colors.system.white
          : props.disabled
          ? props.theme.colors.primary.greyDark
          : props.theme.colors.primary.greenLight};
    }
  }
`;

export const CheckboxStyles = styled.div<{ checked: boolean }>`
  background-color: ${(props) =>
    props.checked ? props.theme.colors.primary.greenLight : 'transparent'};
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  box-shadow: ${(props) =>
    `inset 0px 0px 0px 1px ${
      props.checked
        ? props.theme.colors.primary.greenLight
        : props.theme.colors.primary.greyLight
    }`};
  svg {
    fill: ${(props) => props.theme.colors.system.white};
    width: 1rem;
    height: 0.75rem;
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: 0.5rem;
`;

export const ErrorLabelCheck = styled(ErrorLabel)`
  margin-top: 0.25rem;
`;
