import { MouseEvent, ReactElement, ReactNode } from 'react';

export type ButtonTypeProps = {
  outline?: boolean;
  icon?: ReactElement;
  warning?: boolean;
  error?: boolean;
  success?: boolean;
};

export interface ButtonProps extends ButtonTypeProps {
  disabled?: boolean;
  children?: ReactNode;
  type?: 'button' | 'reset' | 'submit';
  testId?: string;
  loading?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}
