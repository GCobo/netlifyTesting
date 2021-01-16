import styled from '@emotion/styled';
import { Input, InputProps } from '../input/Input';

export const ModalColor = styled.div`
  position: absolute;
  box-shadow: 0 8px 20px 0 rgba(6, 62, 91, 0.2);
  margin-top: 0.25rem;

  input {
    border-radius: 0.25rem !important;
    height: 2.5rem !important;
    padding: 0 0.75rem !important;
    ${(props) => props.theme.fonts.regularText('M')};
  }

  .block-picker {
    box-shadow: none !important;
  }
`;

export const BoxColor = styled.span`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: 2rem;
  left: 0.75rem;
`;

export const ColorPickerWrapper = styled.div`
  position: relative;
`;

export const InputColorPicker = styled(Input)<InputProps>`
  input {
    padding-left: calc(0.75rem + 1.5rem + 0.5rem);
  }
`;
