import { ReactElement, ReactNode } from 'react';
import { ButtonIconProps } from '../buttonIcon/ButtonIcon';

export interface IOptionMenuProps extends ButtonIconProps {
  children: ReactNode;
}

export type IOptionMenuItem = {
  id?: number;
  icon?: ReactElement;
  className?: string;
  children: ReactNode;
  onClick?(): void;
  href?: string;
};
