import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {}
};

export const Primary = (args: any) => {
  return <Button {...args}>Button Primary</Button>;
};

export const Outline = (args: any) => {
  return (
    <Button {...args} outline>
      Button Outline
    </Button>
  );
};

export const Success = (args: any) => {
  return (
    <Button {...args} success>
      Button Success
    </Button>
  );
};

export const Warning = (args: any) => {
  return (
    <Button {...args} warning>
      Button warning
    </Button>
  );
};

export const Error = (args: any) => {
  return (
    <Button {...args} error>
      Button Error
    </Button>
  );
};
