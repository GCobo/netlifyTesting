import React from 'react';
import { CloseIcon } from '../icons';
import {
  AlertButtonClose,
  AlertMessage,
  AlertTitle,
  AlertWrapper
} from './Styles';

export type AlertStylesProps = {
  success?: boolean;
  error?: boolean;
  warning?: boolean;
};

export interface AlertProps extends AlertStylesProps {
  id: string;
  onClick?(): void;
  title: string;
  message?: string;
}

export const Alert = ({
  onClick,
  title,
  message,
  success,
  error,
  warning
}: AlertProps) => {
  return (
    <AlertWrapper success={success} error={error} warning={warning}>
      <AlertButtonClose onClick={onClick} icon={<CloseIcon />} negative />
      <AlertTitle>{title}</AlertTitle>
      <AlertMessage>{message}</AlertMessage>
    </AlertWrapper>
  );
};
