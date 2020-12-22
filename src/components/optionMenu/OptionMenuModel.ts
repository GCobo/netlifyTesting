import { ReactElement, ReactNode } from 'react';

import { ButtonIconProps } from '../buttonIcon/ButtonIcon';
import { PositionMode } from '../portal';

export interface IOptionMenuProps extends ButtonIconProps {
  children: ReactNode;
  testId?: string;
  position?: PositionMode;
}

export type IOptionMenuItem = {
  id?: number;
  icon?: ReactElement;
  className?: string;
  children: ReactNode;
  onClick?(): void;
  href?: string;
};
