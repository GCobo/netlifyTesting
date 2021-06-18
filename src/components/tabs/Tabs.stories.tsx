import React from 'react';

import { SearchIcon } from '../icons';
import { TabPanel } from './TabPanel';
import { Tabs } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {}
};

export const Base = (args: any) => {
  return (
    <Tabs active='1' testId='tabs' {...args}>
      <TabPanel name='Tab1' id='1' icon={<SearchIcon />}>
        Hello Tab 1
      </TabPanel>
      <TabPanel name='Tab2' id='2'>
        Hello Tab 2
      </TabPanel>
    </Tabs>
  );
};
