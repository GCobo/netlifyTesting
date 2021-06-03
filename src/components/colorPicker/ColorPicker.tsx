import ColorPickerNative from 'rc-color-picker';
import React, {
  forwardRef,
  FunctionComponent,
  MouseEvent,
  Ref,
  useState
} from 'react';
import { JoinbleTheme } from '../../styles/Theme';
import {
  BoxColor,
  ColorPickerWrapper,
  GlobalColorPicker,
  InputColorPicker
} from './ColorPickerStyles';

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
      value = JoinbleTheme.colors.primary.primary,
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
        <div
          onMouseDown={(event: MouseEvent<HTMLDivElement>) =>
            event.stopPropagation()
          }
        >
          <ColorPickerNative
            color={innerValue ? innerValue : ''}
            onChange={handleChangeComplete}
            placement={placement}
            animation='slide-up'
            style={{ zIndex: '9999999' } as any}
          >
            <InputColorPicker
              label={label}
              onClick={handleOpenColorPicker}
              value={innerValue ? innerValue : value}
              name={name}
              onChange={() => {}}
              ref={ref}
              testId={testId}
              disabled={disabled}
            />
          </ColorPickerNative>
        </div>
      </ColorPickerWrapper>
    );
  }
);
