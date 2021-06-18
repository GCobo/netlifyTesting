import React from 'react';

import { AndroidIcon, AppleIcon } from '../icons';
import { CheckPlatform, ICheckPlatform } from './CheckPlatform';

export default {
  title: 'Components/CheckPlatform',
  component: CheckPlatform,
  argTypes: {}
};

export const Base = (args: any) => {
  const options: ICheckPlatform[] = [
    {
      id: '121221',
      icon: <AndroidIcon />,
      name: 'Android'
    },
    {
      id: '121222',
      icon: <AppleIcon />,
      name: 'Apple'
    }
  ];
  return (
    <CheckPlatform
      {...args}
      options={options}
      name='platforms'
      onChange={() => {}}
    />
  );
};
