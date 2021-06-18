import React from 'react';

import { InputNumeric } from './InputNumeric';

export default {
  title: 'Components/InputNumeric',
  component: InputNumeric,
  argTypes: {}
};

export const Base = (args: any) => {
  return <InputNumeric {...args} />;
};
