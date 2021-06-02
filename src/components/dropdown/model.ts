import { Ref } from 'react';

export type DropdownInput = {
  label: string;
  type?: 'text' | 'number' | 'password' | 'email' | 'date',
  testId?: string;
}

export interface DropdownProps extends DropdownStyleProps, ChevronProps {
  label?: string;
  helpLabel?: string;
  value?: string | number | string[] | number[];
  className?: string;
  options: DropdownOption[];
  testId?: string;
  onChange?(value: string | number | number[] | string[]): void;
  placeholder?: string;
  ref?: Ref<HTMLInputElement>;
  multiple?: boolean;
  overlay?: boolean;
  required?: boolean;
  input?: DropdownInput
}

export type DropdownStyleProps = {
  errorLabel?: string;
  disabled?: boolean;
};

export type ChevronProps = {
  open?: boolean;
};

export type DropdownOption = {
  name: string;
  value: number | string;
};
