import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button
};

export const Primary = () => {
  return <Button>Button Primary</Button>;
};

export const Outline = () => {
  return <Button outline>Button Outline</Button>;
};

export const Success = () => {
  return <Button success>Button Success</Button>;
};

export const Warning = () => {
  return <Button warning>Button warning</Button>;
};

export const Error = () => {
  return <Button error>Button Error</Button>;
};
