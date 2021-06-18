import React from 'react';

import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {}
};

export const Base = (args: any) => {
  return <Tag {...args} />;
};
