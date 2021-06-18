import React from 'react';

import { HelpLabel } from './HelpLabel';

export default {
  title: 'Components/HelpLabel',
  component: HelpLabel,
  argTypes: {}
};

export const Base = (args: any) => {
  return <HelpLabel {...args} label={args.label} />;
};
