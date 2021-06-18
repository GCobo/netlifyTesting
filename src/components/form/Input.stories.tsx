import React from 'react';

import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {}
};

export const Base = (args: any) => {
  return <Input {...args} />;
};
