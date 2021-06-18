import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {}
};

export const Base = (args: any) => {
  return <Checkbox {...args} />;
};
