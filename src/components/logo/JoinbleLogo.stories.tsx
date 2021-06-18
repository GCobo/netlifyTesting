import React from 'react';

import { JoinbleLogo } from './JoinbleLogo';

export default {
  title: 'Components/JoinbleLogo',
  component: JoinbleLogo,
  argTypes: {}
};

export const Base = (args: any) => {
  return <JoinbleLogo {...args} />;
};
