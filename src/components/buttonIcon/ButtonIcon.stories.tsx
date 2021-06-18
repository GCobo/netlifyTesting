import React from 'react';

import { SearchIcon } from '../icons';
import { ButtonIcon } from './ButtonIcon';

export default {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  argTypes: {}
};

export const Primary = (args: any) => {
  return <ButtonIcon icon={<SearchIcon />} {...args} />;
};
export const Secondary = (args: any) => {
  return <ButtonIcon icon={<SearchIcon />} secondary {...args} />;
};
export const Negative = (args: any) => {
  return <ButtonIcon icon={<SearchIcon />} negative {...args} />;
};
