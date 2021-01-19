export interface DropdownProps extends DropdownStyleProps, ChevronProps {
  label?: string;
  helpLabel?: string;
  value?: string | number;
  className?: string;
  options: DropdownOption[];
  testId?: string;
  onChange?(value: string | number): void;
  placeholder?: string;
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
