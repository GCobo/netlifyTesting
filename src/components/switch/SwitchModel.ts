import { Ref, ChangeEvent } from 'react';

export type DisabledProps = {
  disabled?: boolean;
};

export interface LabelProps extends DisabledProps {
  labelLeft?: string;
  labelRight?: string;
  id: string;
}

export interface SwitchBoxProps extends DisabledProps {
  checked?: boolean;
  errorLabel?: string;
}

export interface SwitchProps extends SwitchBoxProps, LabelProps {
  className?: string;
  testId?: string;
  ref?: Ref<HTMLInputElement>;
  name?: string;
  value?: number | string;
  onChange?(value: boolean): void;
}
