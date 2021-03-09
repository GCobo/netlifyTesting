import { ReactNode } from 'react';
import { PositionMode } from '../portal';

export interface OptionMenuProps {
  children: ReactNode;
  testId?: string;
  position?: PositionMode;
  renderItem: ReactNode;
  widthAuto?: boolean;
  className?: string;
  open?: boolean;
  updateOpen?(open: boolean): void;
  offset?: number;
}

export interface ItemProps {
  active?: boolean;
  disabled?: boolean;
}

export interface OptionMenuItemProps extends ItemProps {
  id?: number;
  className?: string;
  children: ReactNode;
  onClick?(): void;
  href?: string;
  testId?: string;
}
