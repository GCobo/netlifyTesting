import { OptionMenuItemProps } from '../optionMenu/OptionMenuModel';

export type DropdownProps = {
  label?: string;
  errorLabel?: string;
  helpLabel?: string;
  value?: string;
  className?: string;
  options: OptionMenuItemProps[];
  testId?: string;
};

export type DropdownStyleProps = {
  errorLabel?: string;
};

export type ChevronProps = {
  open?: boolean;
};
