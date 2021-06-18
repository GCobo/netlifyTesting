import React from 'react';

import { Switch } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {}
};

export const Base = (args: any) => {
  return <Switch {...args} />;
};
