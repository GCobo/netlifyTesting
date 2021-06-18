import React, {
    ChangeEvent, forwardRef, FunctionComponent, Ref, useEffect, useMemo, useRef, useState
} from 'react';
import { Spring } from 'react-spring/renderprops.cjs';

import { ButtonIcon } from '../buttonIcon/ButtonIcon';
import { Input } from '../form/Input';
import { ErrorLabelInput, HelpLabelInput, InputRequired, Label, Wrapper } from '../form/Styles';
import { CloseIcon } from '../icons';
import { OptionMenuItem } from '../optionMenu';
import { Portal } from '../portal';
import {
    AnimatedOptions, Chevron, DropdownActionsRow, DropdownOptions, DropdownStyle
} from './DropdownStyle';
import { DropdownOption, DropdownProps } from './model';

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
      overlay = false,
      required = false,
      input
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const buttonMenuRef = useRef<HTMLInputElement>(null);
    const [innerValue, setInnerValue] = useState<
      string | number | string[] | number[] | undefined
    >(value);

    const [innerInputValue, setInnerInputValue] = useState<string | null>(
      value as string
    );

    const [innerValues, setInnerValues] = useState<any>(value ? value : []);

    const [open, setOpen] = useState<boolean>(false);
    const [openContent, setOpenContent] = useState<boolean>(false);

    const handleInnerValue = (value: any) => {
      setInnerInputValue(null);
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

    const handlerInputValue = (value: string) => {
      setInnerInputValue(value);
      setInnerValue(value);
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
      if (innerInputValue && input) {
        return innerInputValue;
      }

      if (innerValues.length && multiple) {
        return options
          .filter((option: DropdownOption) =>
            innerValues.includes(option.value)
          )
          .map((item) => item.name)
          .join(', ');
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
          .join(', ');
      }

      return placeholder;
    }, [innerValue, multiple, innerValues]);

    const removeSelectedValues = () => {
      const valueReset = multiple ? [] : undefined;
      onChange && onChange(valueReset);
      multiple ? setInnerValues(valueReset) : setInnerValue(valueReset);
    };

    return (
      <Wrapper className={className}>
        {label && (
          <Label as='label'>
            {label} {required && <InputRequired>*</InputRequired>}
          </Label>
        )}
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
          <DropdownActionsRow>
            {(innerValues.length > 0 || innerValue) && (
              <ButtonIcon
                icon={<CloseIcon />}
                size='S'
                secondary
                testId='dropdown-delete-value'
                onClick={removeSelectedValues}
              />
            )}
            <Chevron open={open} />
          </DropdownActionsRow>
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
                    {input && (
                      <OptionMenuItem>
                        {input.label}
                        <Input
                          type={input.type}
                          onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            handlerInputValue(event.target.value)
                          }
                          value={innerInputValue as string}
                          testId={input.testId}
                        />
                      </OptionMenuItem>
                    )}
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
