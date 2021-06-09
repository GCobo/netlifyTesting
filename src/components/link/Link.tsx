import React from 'react';
import { LinkStyles } from './LinkStyles';

type IProps = {
  href: string;
  children?: React.ReactNode;
  testId?: string;
  className?: string;
};

export const Link: React.FunctionComponent<IProps> = ({
  href,
  children,
  testId,
  className
}) => {
  return (
    <LinkStyles href={href} data-test={testId} className={className}>
      {children}
    </LinkStyles>
  );
};
