import React from 'react';

import { ButtonIcon } from '../buttonIcon/ButtonIcon';
import { SearchIcon } from '../icons';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {}
};

export const CardBase = (args: any) => {
  return (
    <Card
      {...args}
      lastUpdate='25/7/2001'
      title='card '
      actions={<ButtonIcon icon={<SearchIcon />} />}
    />
  );
};

export const CardImage = (args: any) => {
  return (
    <Card
      {...args}
      lastUpdate='25/7/2001'
      image='https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg'
      title='card image'
      actions={<ButtonIcon icon={<SearchIcon />} />}
    />
  );
};

export const CardBigImage = (args: any) => {
  return (
    <Card
      {...args}
      imageBig
      lastUpdate='25/7/2001'
      image='https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg'
      title='card image'
      actions={<ButtonIcon icon={<SearchIcon />} />}
    />
  );
};

export const CardHorizontal = (args: any) => {
  return (
    <Card
      {...args}
      horizontal
      lastUpdate='25/7/2001'
      title='card horizontal'
      actions={<ButtonIcon icon={<SearchIcon />} />}
    />
  );
};
