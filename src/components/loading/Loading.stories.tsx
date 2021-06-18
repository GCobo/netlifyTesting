import React from 'react';

import { Loading } from './Loading';

export default {
  title: 'Components/Loading',
  component: Loading,
  argTypes: {}
};

export const Base = (args: any) => {
  return <Loading {...args} />;
};
