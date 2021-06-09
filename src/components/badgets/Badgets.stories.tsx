import React from 'react';
import { Badgets } from './Badgets';

export default {
  title: 'Components/Badgets',
  component: Badgets
};

export const Basic = () => {
  return (
    <>
      <Badgets number={9} /> <Badgets number={999} />
    </>
  );
};
