import React from 'react';
import { CardsProps } from './model';

import {
  ApplicationBoxActions,
  ApplicationBoxLastUpdate,
  ApplicationBoxLogo,
  ApplicationBoxStyles,
  ApplicationBoxTitle
} from './Styles';

export const Card = ({
  logo,
  title,
  lastUpdate,
  actions,
  testId,
  className,
  imageBig
}: CardsProps) => {
  return (
    <ApplicationBoxStyles
      className={className}
      data-test={testId}
      imageBig={imageBig}
    >
      <ApplicationBoxLogo
        imageBig={imageBig}
        src={logo}
        as={logo ? 'img' : 'div'}
      />
      <div>
        <ApplicationBoxTitle>{title}</ApplicationBoxTitle>
        <ApplicationBoxLastUpdate>{lastUpdate}</ApplicationBoxLastUpdate>
      </div>
      <ApplicationBoxActions>{actions}</ApplicationBoxActions>
    </ApplicationBoxStyles>
  );
};
