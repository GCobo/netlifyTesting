import React, { useState, forwardRef, FunctionComponent, Ref } from 'react'
import ColorPickerNative from 'rc-color-picker'

import { JoinbleTheme } from '../../Theme'
import {
  BoxColor,
  ColorPickerWrapper,
  InputColorPicker
} from './ColorPickerStyles'

import './ColorPicker.css'

type IProps = {
  value?: string
  name?: string
  placeHolder?: string
  label?: string
  className?: string
  testId?: string
}

export const ColorPicker: FunctionComponent<IProps> = forwardRef(
  (
    {
      value = JoinbleTheme.primaryColor,
      name,
      label = 'Select color',
      className,
      testId
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const [open, setOpen] = useState<boolean>(false)
    const [innerValue, setInnerValue] = useState<string>(value)

    const handleChangeComplete = (color: any) => {
      setInnerValue(color.color)
    }

    const handleOpenColorPicker = () => {
      setOpen(!open)
    }

    return (
      <ColorPickerWrapper className={className}>
        <BoxColor
          style={{ backgroundColor: innerValue ? innerValue : value }}
        ></BoxColor>
        <ColorPickerNative
          color={innerValue ? innerValue : ''}
          onChange={handleChangeComplete}
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
    )
  }
)
