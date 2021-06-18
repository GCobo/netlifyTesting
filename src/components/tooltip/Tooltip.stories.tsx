import React from 'react';

import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {}
};

export const Base = (args: any) => {
  return (
    <Tooltip {...args}>
      <p>This is a tooltip</p>
    </Tooltip>
  );
};
