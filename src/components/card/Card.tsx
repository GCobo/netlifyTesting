import React, { ReactNode } from 'react';

import {
    CardBoxActions, CardBoxHeader, CardBoxLastUpdate, CardBoxLogo, CardBoxStyles, CardBoxTitle,
    CardBoxWrapper, CardBoxWrapperProps
} from './CardStyles';

export interface CardsProps extends CardBoxWrapperProps {
  lastUpdate: string;
  title: string;
  id?: string;
  actions: ReactNode;
  testId?: string;
  className?: string;
  image?: ReactNode;
  horizontal?: boolean;
}

export const Card = ({
  image,
  title,
  lastUpdate,
  actions,
  testId,
  className,
  imageBig,
  header,
  horizontal
}: CardsProps) => {
  return (
    <CardBoxWrapper
      imageBig={imageBig}
      className={className}
      data-test={testId}
      header={header}
      horizontal={horizontal}
    >
      {header && !horizontal && <CardBoxHeader>{header}</CardBoxHeader>}
      <CardBoxStyles header={header} horizontal={horizontal}>
        <CardBoxLogo imageBig={imageBig}>{image}</CardBoxLogo>
        <div>
          <CardBoxTitle>{title}</CardBoxTitle>
          <CardBoxLastUpdate>{lastUpdate}</CardBoxLastUpdate>
        </div>
        <CardBoxActions horizontal={horizontal}>{actions}</CardBoxActions>
      </CardBoxStyles>
    </CardBoxWrapper>
  );
};
