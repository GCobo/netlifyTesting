import React from 'react';

import { DatePicker } from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {}
};
export const Base = (args: any) => {
  return (
    <div style={{ width: '400px', height: '400px' }}>
      <DatePicker selectedDates={[new Date()]} {...args} />
    </div>
  );
};
