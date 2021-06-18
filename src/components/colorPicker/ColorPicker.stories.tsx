import React from 'react';

import { ColorPicker } from './ColorPicker';

export default {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  argTypes: {}
};
export const Base = (args: any) => {
  return <ColorPicker {...args} />;
};
