import React from 'react';

import { TextArea } from './TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {}
};

export const Base = (args: any) => {
  return <TextArea {...args} />;
};
