import React from 'react';

import { InputTime } from './InputTime';

export default {
  title: 'Components/InputTime',
  component: InputTime,
  argTypes: {}
};
export const Base = (args: any) => {
  return <InputTime {...args} />;
};
