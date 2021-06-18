import React, { Fragment } from 'react';

import { Badgets } from './Badgets';

export default {
  title: 'Components/Badgets',
  component: Badgets,
  argTypes: {}
};

export const Basic = (args: any) => {
  return (
    <Fragment>
      <Badgets number={9} {...args} />
    </Fragment>
  );
};
