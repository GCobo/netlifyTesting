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
  ${(props) => props.theme.fonts.regularText('M')};
  color: ${(props) => props.theme.colors.fontColor};
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

  svg {
    fill: ${(props) =>
      props.checked
        ? props.theme.colors.white
        : props.errorLabel
        ? props.theme.colors.errorColor
        : props.theme.colors.fontColor};
  }

  &:hover {
    ${LabelCheckbox} {
      color: ${(props) =>
        !props.disabled
          ? props.theme.colors.primaryColor
          : props.theme.colors.fontColor};
    }
    svg {
      fill: ${(props) =>
        props.checked
          ? props.theme.colors.white
          : props.disabled
          ? props.theme.colors.fontColor
          : props.theme.colors.primaryColor};
    }
  }
`;

export const CheckedBoxChecked = styled.div`
  background-color: ${(props) => props.theme.colors.primaryColor};
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;

  svg {
    fill: ${(props) => props.theme.colors.white};
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
