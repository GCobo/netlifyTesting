import React from 'react';

import { Overlay } from './Overlay';

export default {
  title: 'Components/Overlay',
  component: Overlay,
  argTypes: {}
};

export const Base = (args: any) => {
  return <Overlay {...args} />;
};
