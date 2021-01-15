import { OptionMenuItemProps } from '../optionMenu/OptionMenuModel';

export interface DropdownProps extends DropdownStyleProps, ChevronProps {
  label?: string;
  helpLabel?: string;
  value?: string;
  className?: string;
  options: OptionMenuItemProps[];
  testId?: string;
}

export type DropdownStyleProps = {
  errorLabel?: string;
  disabled?: boolean;
};

export type ChevronProps = {
  open?: boolean;
};
