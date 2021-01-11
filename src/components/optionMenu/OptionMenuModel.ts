import { ReactNode } from 'react';
import { PositionMode } from '../portal';

export interface OptionMenuProps {
  children: ReactNode;
  testId?: string;
  position?: PositionMode;
  renderItem: ReactNode;
  widthAuto?: boolean;
  className?: string;
}

export interface ActiveProp {
  active?: boolean;
}

export interface OptionMenuItemProps extends ActiveProp {
  id?: number;
  className?: string;
  children: ReactNode;
  onClick?(): void;
  href?: string;
  testId?: string;
}
