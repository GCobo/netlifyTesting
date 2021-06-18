import React from 'react';

import { Badgets } from './Badgets';

export default {
  title: 'Components/Badgets',
  component: Badgets,
  argTypes: {}
};

export const Basic = (args: any) => {
  return (
    <>
      <Badgets number={9} {...args} />
    </>
  );
};
