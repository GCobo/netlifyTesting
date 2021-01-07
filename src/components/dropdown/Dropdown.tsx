import React, { useRef, useState } from 'react';
import { ErrorLabelInput, HelpLabelInput, Label } from '../input/InputStyle';
import { OptionMenuItem } from '../optionMenu';
import { Portal, PositionMode } from '../portal';
import {
  AnimatedOptions,
  Chevron,
  DropdownOptions,
  DropdownStyle,
  Wrapper
} from './DropdownStyle';
import { DropdownProps } from './model';
import { Spring } from 'react-spring/renderprops.cjs';

export const Dropdown = ({
  label,
  errorLabel,
  helpLabel,
  value = 'Select option',
  className,
  options,
  testId
}: DropdownProps) => {
  const buttonMenuRef = useRef<HTMLInputElement>(null);
  const [innerValue, setInnerValue] = useState<string | undefined>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleInnerValue = (value: string) => {
    setInnerValue(value);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Wrapper className={className}>
      <Label as='p'>{label}</Label>
      <DropdownStyle
        as='button'
        onClick={handleOpen}
        errorLabel={errorLabel}
        data-test={testId}
        ref={buttonMenuRef}
      >
        <span>{innerValue ? innerValue : value}</span>
        <Chevron open={open} />
      </DropdownStyle>
      <Portal
        actionRef={buttonMenuRef}
        mode={PositionMode.left}
        show={true}
        onClickOutside={() => setOpen(false)}
      >
        <Spring native from={{ height: 0 }} to={{ height: open ? 'auto' : 0 }}>
          {({ height }) => (
            <AnimatedOptions style={{ height, overflow: 'hidden' }}>
              <DropdownOptions data-test={'dropdown-menu'}>
                {options.map((option: any) => (
                  <OptionMenuItem
                    onClick={() => handleInnerValue(option.children)}
                    key={option.id}
                    href={option.href}
                    testId={`dropdown-item-${option.id}`}
                  >
                    {option.children}
                  </OptionMenuItem>
                ))}
              </DropdownOptions>
            </AnimatedOptions>
          )}
        </Spring>
      </Portal>
      {errorLabel && <ErrorLabelInput label={errorLabel} />}
      {helpLabel && <HelpLabelInput label={helpLabel} />}
    </Wrapper>
  );
};
