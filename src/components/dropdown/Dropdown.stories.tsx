import React from 'react';

import { Dropdown } from './Dropdown';
import { DropdownOption } from './model';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {}
};

export const Base = (args: any) => {
  const optionsDropdown: DropdownOption[] = [
    { name: 'test', value: 1 },
    { name: 'test2', value: 2 }
  ];
  return <Dropdown options={optionsDropdown} {...args} />;
};
