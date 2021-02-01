import React, { useEffect, useRef, useState, useMemo } from 'react';
import {
  ErrorLabelInput,
  HelpLabelInput,
  Label,
  Wrapper
} from '../input/InputStyle';
import { OptionMenuItem } from '../optionMenu';
import { Portal, PositionMode } from '../portal';
import {
  AnimatedOptions,
  Chevron,
  DropdownOptions,
  DropdownStyle
} from './DropdownStyle';
import { DropdownOption, DropdownProps } from './model';
import { Spring } from 'react-spring/renderprops.cjs';

export const Dropdown = ({
  label,
  errorLabel,
  helpLabel,
  value,
  className,
  options,
  testId,
  disabled,
  onChange,
  placeholder
}: DropdownProps) => {
  const buttonMenuRef = useRef<HTMLInputElement>(null);
  const [innerValue, setInnerValue] = useState<string | number | undefined>(
    value
  );
  const [open, setOpen] = useState<boolean>(false);

  const handleInnerValue = (value: string | number) => {
    setInnerValue(value);
    setOpen(false);
  };

  useEffect(() => {
    onChange && innerValue && onChange(innerValue);
  }, [innerValue]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const innerPlaceholder = useMemo(() => {
    if (innerValue) {
      return options.find(
        (option: DropdownOption) => option.value === innerValue
      )?.name;
    }

    return placeholder;
  }, [innerValue]);

  return (
    <Wrapper className={className}>
      {label && <Label as='p'>{label}</Label>}
      <DropdownStyle
        as='button'
        onClick={handleOpen}
        errorLabel={errorLabel}
        data-test={testId}
        ref={buttonMenuRef}
        disabled={disabled}
      >
        <span>{innerPlaceholder && innerPlaceholder}</span>
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
                {options.map((option: DropdownOption) => (
                  <OptionMenuItem
                    onClick={() => handleInnerValue(option.value)}
                    key={option.value}
                    testId={`dropdown-item-${option.name}`}
                  >
                    {option.name}
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
