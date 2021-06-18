import React from 'react';

import { ButtonIcon } from '../buttonIcon';
import { SearchIcon } from '../icons';
import { OptionMenu } from './OptionMenu';
import { OptionMenuItem } from './OptionMenuItem';

export default {
  title: 'Components/OptionMenu',
  component: OptionMenu,
  argTypes: {}
};

export const Base = (args: any) => {
  return (
    <OptionMenu renderItem={<ButtonIcon icon={<SearchIcon />} {...args} />}>
      <OptionMenuItem>List test</OptionMenuItem>
    </OptionMenu>
  );
};
