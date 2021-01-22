import React from 'react';
import { CloseIcon } from '../icons';
import {
  AlertButtonClose,
  AlertMessage,
  AlertTitle,
  AlertWrapper
} from './Styles';

export type AlertStylesProps = {
  type?: StateAlert;
};

export enum StateAlert {
  warning = 'warning',
  error = 'error',
  success = 'success',
  info = 'info'
}
export interface AlertProps extends AlertStylesProps {
  id: string;
  onClick?(): void;
  title: string;
  message?: string;
  testId?: string;
}

export const Alert = ({
  onClick,
  title,
  message,
  type,
  testId
}: AlertProps) => {
  return (
    <AlertWrapper type={type} data-test={testId}>
      <AlertButtonClose
        onClick={onClick}
        icon={<CloseIcon />}
        negative
        testId='alert-close'
      />
      <AlertTitle>{title}</AlertTitle>
      <AlertMessage>{message}</AlertMessage>
    </AlertWrapper>
  );
};
