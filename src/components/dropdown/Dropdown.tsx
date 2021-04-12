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
import { Portal } from '../portal';
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
      multiple = false,
      overlay = false
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const buttonMenuRef = useRef<HTMLInputElement>(null);
    const [innerValue, setInnerValue] = useState<
      string | number | string[] | number[] | undefined
    >(value);

    const [innerValues, setInnerValues] = useState<any>(value ? value : []);

    const [open, setOpen] = useState<boolean>(false);
    const [openContent, setOpenContent] = useState<boolean>(false);

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
      setOpenContent(true);
      setOpen(!open);
    };

    const handleClose = () => {
      setOpen(false);

      setTimeout(() => {
        setOpenContent(false);
      }, 300);
    };

    const innerPlaceholder = useMemo(() => {
      if (innerValues.length && multiple) {
        return options
          .filter((option: DropdownOption) =>
            innerValues.includes(option.value)
          )
          .map((item) => item.name)
          .join(',');
      }

      if (innerValue && !multiple) {
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
        {openContent && (
          <Portal
            actionRef={buttonMenuRef}
            show={true}
            onClickOutside={handleClose}
            overlay={overlay}
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
                          multiple
                            ? innerValues.includes(option.value)
                            : innerValue === option.value
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
        )}
        {errorLabel && <ErrorLabelInput label={errorLabel} />}
        {helpLabel && <HelpLabelInput label={helpLabel} />}
      </Wrapper>
    );
  }
);
