import { ReactElement, ReactNode } from 'react';
import { ButtonIconProps } from '../buttonIcon/ButtonIcon';
import { PositionMode } from '../portal';

export interface OptionMenuProps extends ButtonIconProps {
  children: ReactElement<OptionMenuItemProps>;
  testId?: string;
  position?: PositionMode;
  renderItem: ReactNode;
  widthAuto?: boolean;
}

export type OptionMenuItemProps = {
  id?: number;
  className?: string;
  children: ReactNode;
  onClick?(): void;
  href?: string;
};
