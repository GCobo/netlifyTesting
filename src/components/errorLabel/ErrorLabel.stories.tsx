import React from 'react';

import { ErrorLabel } from './ErrorLabel';

export default {
  title: 'Components/ErrorLabel',
  component: ErrorLabel,
  argTypes: {}
};

export const Base = (args: any) => {
  return <ErrorLabel {...args} label={args.label} />;
};
