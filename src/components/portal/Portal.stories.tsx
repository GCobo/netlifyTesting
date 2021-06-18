import React, { useRef, useState } from 'react';

import { SearchIcon } from '../icons';
import { Portal } from './Portal';

export default {
  title: 'Components/Portal',
  component: Portal,
  argTypes: {}
};

export const Base = (args: any) => {
  const [show, setShow] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button onClick={() => setShow(!show)} ref={buttonRef}>
        Show portal
      </button>
      <Portal show={show} actionRef={buttonRef} {...args}>
        This is the portal <SearchIcon />
      </Portal>
    </>
  );
};
