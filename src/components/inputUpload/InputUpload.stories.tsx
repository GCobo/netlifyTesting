import React from 'react';

import { InputUpload } from './InputUpload';

export default {
  title: 'Components/InputUpload',
  component: InputUpload,
  argTypes: {}
};

export const Base = (args: any) => {
  return <InputUpload {...args} />;
};
