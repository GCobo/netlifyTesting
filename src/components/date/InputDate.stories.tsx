import React from 'react';

import { InputDate } from './InputDate';

export default {
  title: 'Components/InputDate',
  component: InputDate,
  argTypes: {}
};
export const Base = (args: any) => {
  return <InputDate {...args} onChange={(date: Date[]) => console.log(date)} />;
};
