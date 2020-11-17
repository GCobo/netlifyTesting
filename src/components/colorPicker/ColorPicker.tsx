import React, { useState } from 'react'
import { BlockPicker, ColorResult } from 'react-color'
import { JoinbleTheme } from '../../Theme'
import {
  BoxColor,
  ColorPickerWrapper,
  InputColorPicker,
  ModalColor
} from './ColorPickerStyles'

type IProps = {
  value?: string
  innerRef?: any
  name?: string
  placeHolder?: string
  label?: string
  className?: string
}

export const ColorPicker: React.FunctionComponent<IProps> = ({
  value = JoinbleTheme.primaryColor,
  innerRef,
  name,
  label = 'Select color',
  className
}) => {
  const [open, setOpen] = useState<boolean>(false)

  const [innerValue, setInnerValue] = useState(value)

  const handleChangeComplete = (color: ColorResult) => {
    setInnerValue(color.hex)
  }

  const handleOpenColorPicker = () => {
    setOpen(!open)
  }

  const optionColors = [
    '#FF4647',
    '#FF5DB3',
    '#BB31D1',
    '#673AB6',
    '#465BCD',
    '#00A2E1',
    '#1CB7FD',
    '#00CCFF',
    '#00BBD3',
    '#009BA7',
    '#4CAE50',
    '#8BC24A',
    '#CCDB39',
    '#F6E44B',
    '#FEC007',
    '#FF8200',
    '#FE5722',
    '#795548',
    '#000000',
    '#E5E5E5'
  ]
  return (
    <ColorPickerWrapper className={className}>
      <InputColorPicker
        label={label}
        onClick={handleOpenColorPicker}
        value={innerValue ? innerValue : value}
        name={name}
        ref={innerRef}
      />
      <BoxColor
        style={{ backgroundColor: innerValue ? innerValue : value }}
      ></BoxColor>
      {open && (
        <ModalColor>
          <BlockPicker
            width='100%'
            triangle='hide'
            color={innerValue ? innerValue : ''}
            colors={optionColors}
            onChangeComplete={handleChangeComplete}
          />
        </ModalColor>
      )}
    </ColorPickerWrapper>
  )
}
