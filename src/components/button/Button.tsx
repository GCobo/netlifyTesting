import React from 'react';
import { Loading } from '../loading/Loading';
import { ButtonStyles, IconButton } from './ButtonStyles';

import { ButtonProps } from './ButtonModel';

export const Button: React.FunctionComponent<ButtonProps> = ({
  type = 'button',
  icon,
  loading,
  children,
  testId,
  ...rest
}) => {
  return (
    <ButtonStyles type={type} {...rest} data-test={testId}>
      {!loading &&
        icon &&
        React.cloneElement(icon, {
          className: IconButton
        })}
      {!loading && children && children}
      {loading && <Loading />}
    </ButtonStyles>
  );
};
