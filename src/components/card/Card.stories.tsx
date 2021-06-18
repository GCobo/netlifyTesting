import React from 'react';

import styled from '@emotion/styled';

import { ButtonIcon } from '../buttonIcon/ButtonIcon';
import { SearchIcon } from '../icons';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card
};

const Wrapper = styled.div`
  width: 200px;
  height: 300px;
`;

export const CardBase = () => {
  <Wrapper>
    <Card
      lastUpdate='25/7/2001'
      title='card '
      actions={<ButtonIcon icon={<SearchIcon />} />}
    />
  </Wrapper>;
};

export const CardImage = () => {
  <Card
    lastUpdate='25/7/2001'
    image='https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg'
    title='card image'
    actions={<ButtonIcon icon={<SearchIcon />} />}
  />;
};

export const CardBigImage = () => {
  <Card
    imageBig
    lastUpdate='25/7/2001'
    image='https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg'
    title='card image'
    actions={<ButtonIcon icon={<SearchIcon />} />}
  />;
};

export const CardHorizontal = () => {
  <Card
    horizontal
    lastUpdate='25/7/2001'
    title='card horizontal'
    actions={<ButtonIcon icon={<SearchIcon />} />}
  />;
};
