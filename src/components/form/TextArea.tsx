import React, {
  forwardRef,
  Ref,
  ReactElement,
  FunctionComponent,
  ChangeEvent
} from 'react';
import { FormContainerProps } from './model';

import {
  ErrorLabelInput,
  HelpLabelInput,
  Wrapper,
  Label,
  TextAreaStyles
} from './Styles';

export interface TextAreaProps extends FormContainerProps {
  label?: string;
  helpLabel?: string;
  id?: string;
  placeHolder?: string;
  icon?: ReactElement;
  name?: string;
  ref?: Ref<HTMLTextAreaElement>;
  className?: string;
  value?: string | number | string[];
  testId?: string;
  onChange?(event: ChangeEvent<HTMLTextAreaElement>): void;
  rows?: number;
}

export const TextArea: FunctionComponent<TextAreaProps> = forwardRef(
  (
    {
      errorLabel,
      disabled,
      helpLabel,
      label,
      id,
      placeHolder,
      name,
      className,
      value,
      testId,
      onChange,
      rows = 4
    },
    ref: Ref<HTMLTextAreaElement>
  ) => {
    return (
      <Wrapper className={className} data-test={testId}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <TextAreaStyles
          errorLabel={errorLabel}
          ref={ref}
          placeholder={placeHolder}
          value={value}
          disabled={disabled}
          name={name}
          onChange={onChange}
          rows={rows}
        />
        {errorLabel && <ErrorLabelInput label={errorLabel} />}
        {helpLabel && <HelpLabelInput label={helpLabel} />}
      </Wrapper>
    );
  }
);
