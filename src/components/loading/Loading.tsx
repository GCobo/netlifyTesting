import React, { Fragment } from 'react';
import { Overlay } from '../overlay/Overlay';
import { LoadingStyles, Dot1, Dot2 } from './LoadingStyles';

type IProps = {
  overlay?: boolean;
  className?: string;
  testId?: string;
};

export const Loading: React.FunctionComponent<IProps> = ({
  overlay,
  className,
  testId
}) => {
  const Loader = () => (
    <LoadingStyles className={className} data-test={testId}>
      <Dot1 />
      <Dot2 />
    </LoadingStyles>
  );

  return (
    <Fragment>
      {overlay ? (
        <Overlay>
          <Loader />
        </Overlay>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};
