import React from 'react';
import { ButtonStyles, IconButton, LoadingButton } from './ButtonStyles';

import { ButtonProps } from './ButtonModel';

export const Button = ({
  type = 'button',
  icon,
  loading,
  children,
  testId,
  ref,
  id,
  as,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonStyles
      type={type}
      {...rest}
      data-test={testId}
      ref={ref}
      id={id}
      as={as}
    >
      {loading && <LoadingButton {...rest} />}
      {!loading &&
        icon &&
        React.cloneElement(icon, {
          className: IconButton
        })}
      {children && children}
    </ButtonStyles>
  );
};
