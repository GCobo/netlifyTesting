import { Ref } from 'react';

export type DisabledProps = {
  disabled?: boolean;
};

export type LabelProps = DisabledProps & {
  labelLeft?: string;
  labelRight?: string;
  label?: string;
  id: string;
};

export type SwitchBoxProps = DisabledProps & {
  checked?: boolean;
  errorLabel?: string;
};

export type SwitchProps = SwitchBoxProps &
  LabelProps & {
    className?: string;
    testId?: string;
    ref?: Ref<HTMLInputElement>;
    name?: string;
    value?: number | string;
    onChange?(value: boolean): void;
    helpLabel?: string;
    required?: boolean;
  };
