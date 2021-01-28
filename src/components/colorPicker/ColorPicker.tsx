import React, { useState, forwardRef, FunctionComponent, Ref } from 'react';
import ColorPickerNative from 'rc-color-picker';

import {
  BoxColor,
  ColorPickerWrapper,
  InputColorPicker,
  GlobalColorPicker
} from './ColorPickerStyles';
import { JoinbleTheme } from '../../styles/Theme';

type IProps = {
  value?: string;
  name?: string;
  placeHolder?: string;
  label?: string;
  className?: string;
  testId?: string;
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  onChange?(color: string): void;
  disabled?: boolean;
  ref?: Ref<HTMLInputElement>;
};

export const ColorPicker: FunctionComponent<IProps> = forwardRef(
  (
    {
      value = JoinbleTheme.colors.primary.greenLight,
      name,
      label = 'Select color',
      className,
      testId,
      placement = 'bottomLeft',
      onChange,
      disabled = false
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const [open, setOpen] = useState<boolean>(false);
    const [innerValue, setInnerValue] = useState<string>(value);

    const handleChangeComplete = (color: any) => {
      setInnerValue(color.color);
      onChange && onChange(color.color);
    };

    const handleOpenColorPicker = () => {
      !disabled && setOpen(!open);
    };

    return (
      <ColorPickerWrapper className={className}>
        <GlobalColorPicker />
        <BoxColor
          style={{ backgroundColor: innerValue ? innerValue : value }}
        />
        <ColorPickerNative
          color={innerValue ? innerValue : ''}
          onChange={handleChangeComplete}
          placement={placement}
          animation='slide-up'
        >
          <InputColorPicker
            label={label}
            onClick={handleOpenColorPicker}
            value={innerValue ? innerValue : value}
            name={name}
            onChange={() => {}}
            ref={ref}
            data-test={testId}
            disabled={disabled}
          />
        </ColorPickerNative>
      </ColorPickerWrapper>
    );
  }
);
