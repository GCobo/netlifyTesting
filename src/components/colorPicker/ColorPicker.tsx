import React, { useState, forwardRef, FunctionComponent, Ref } from 'react';
import ColorPickerNative from 'rc-color-picker';
import {
  BoxColor,
  ColorPickerWrapper,
  InputColorPicker
} from './ColorPickerStyles';
import './colorpicker.css';
import { JoinbleTheme } from '../../styles/Theme';

type IProps = {
  value?: string;
  name?: string;
  placeHolder?: string;
  label?: string;
  className?: string;
  testId?: string;
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
};

export const ColorPicker: FunctionComponent<IProps> = forwardRef(
  (
    {
      value = JoinbleTheme.colors.primaryColor,
      name,
      label = 'Select color',
      className,
      testId,
      placement = 'bottomLeft'
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const [open, setOpen] = useState<boolean>(false);
    const [innerValue, setInnerValue] = useState<string>(value);

    const handleChangeComplete = (color: any) => {
      setInnerValue(color.color);
    };

    const handleOpenColorPicker = () => {
      setOpen(!open);
    };

    return (
      <ColorPickerWrapper className={className}>
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
            ref={ref}
            data-test={testId}
          />
        </ColorPickerNative>
      </ColorPickerWrapper>
    );
  }
);
