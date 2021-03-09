import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  forwardRef,
  Ref,
  FunctionComponent
} from 'react';
import {
  ErrorLabelInput,
  HelpLabelInput,
  Label,
  Wrapper
} from '../form/Styles';
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

export const Dropdown: FunctionComponent<DropdownProps> = forwardRef(
  (
    {
      label,
      errorLabel,
      helpLabel,
      value,
      className,
      options = [],
      testId,
      disabled,
      onChange,
      placeholder,
      multiple = false
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const buttonMenuRef = useRef<HTMLInputElement>(null);
    const [innerValue, setInnerValue] = useState<string | number | undefined>(
      value
    );
    const [innerValues, setInnerValues] = useState<any>([]);

    const [open, setOpen] = useState<boolean>(false);

    const handleInnerValue = (value: any) => {
      if (multiple) {
        setInnerValues((values: any) =>
          values.includes(value)
            ? values.filter((v: any) => v !== value)
            : [...values, value]
        );
      } else {
        setInnerValue(value);
        setOpen(false);
      }
    };

    useEffect(() => {
      onChange && innerValue && onChange(innerValues);
    }, [innerValues]);

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

      if (multiple && innerValues.length) {
        return options
          .filter((option: DropdownOption) =>
            innerValues.includes(option.value)
          )
          .map((item) => item.name)
          .join(',');
      }

      return placeholder;
    }, [innerValue, multiple, innerValues]);

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
          type='button'
        >
          <span>{innerPlaceholder && innerPlaceholder}</span>
          <Chevron open={open} />
          <input
            type='hidden'
            value={innerValue as string}
            readOnly
            ref={ref}
          />
        </DropdownStyle>
        <Portal
          actionRef={buttonMenuRef}
          mode={PositionMode.left}
          show={true}
          onClickOutside={() => setOpen(false)}
        >
          <Spring
            native
            from={{ height: 0 }}
            to={{ height: open ? 'auto' : 0 }}
          >
            {({ height }) => (
              <AnimatedOptions style={{ height, overflow: 'hidden' }}>
                <DropdownOptions data-test={'dropdown-menu'}>
                  {options.map((option: DropdownOption) => (
                    <OptionMenuItem
                      onClick={() => handleInnerValue(option.value)}
                      key={option.value}
                      testId={`dropdown-item-${option.name}`}
                      active={
                        multiple ? innerValues.includes(option.value) : false
                      }
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
  }
);
