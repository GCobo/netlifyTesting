import React, { ReactNode } from 'react';

import {
  CardBoxActions,
  CardBoxHeader,
  CardBoxLastUpdate,
  CardBoxLogo,
  CardBoxStyles,
  CardBoxTitle,
  CardBoxWrapper,
  CardBoxWrapperProps
} from './Styles';

export interface CardsProps extends CardBoxWrapperProps {
  title: string;
  lastUpdate: string;
  id?: string;
  actions: ReactNode;
  testId?: string;
  className?: string;
  image?: ReactNode;
}

export const Card = ({
  image,
  title,
  lastUpdate,
  actions,
  testId,
  className,
  imageBig,
  header
}: CardsProps) => {
  return (
    <CardBoxWrapper
      imageBig={imageBig}
      className={className}
      data-test={testId}
      header={header}
    >
      {header && <CardBoxHeader>{header}</CardBoxHeader>}
      <CardBoxStyles>
        <CardBoxLogo imageBig={imageBig}>{image}</CardBoxLogo>
        <div>
          <CardBoxTitle>{title}</CardBoxTitle>
          <CardBoxLastUpdate>{lastUpdate}</CardBoxLastUpdate>
        </div>
        <CardBoxActions>{actions}</CardBoxActions>
      </CardBoxStyles>
    </CardBoxWrapper>
  );
};
