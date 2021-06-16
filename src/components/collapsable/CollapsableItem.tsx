import React, { useMemo } from 'react';
import { animated, useSpring } from 'react-spring';

type IProps = {
  children: React.ReactNode;
  title: string;
  testId?: string;
  open?: boolean;
  height?: number;
  itemsOpen?: number;
  totalItems?: number;
  itemIsOpened?: boolean;
};

const CollabsableItem = ({
  children,
  testId,
  open = false,
  height = 0,
  itemsOpen = 0,
  totalItems = 0
}: IProps) => {
  const heightHeader = 26;

  const extraHeight = useMemo(() => {
    const itemsNoOpen = totalItems - itemsOpen;
    return itemsNoOpen > 0 ? heightHeader * (totalItems - itemsOpen) : 0;
  }, [itemsOpen]);

  const currentHeight = useMemo(
    () => height / itemsOpen - extraHeight / itemsOpen,
    [itemsOpen]
  );

  const { ...props } = useSpring({
    opacity: open ? 1 : 0,
    height: open ? `${currentHeight - heightHeader}px` : '0px',
    config: { duration: 300 }
  });

  return (
    <animated.div
      style={{
        overflow: 'hidden',
        ...props
      }}
      aria-expanded={open}
      data-test={testId && `collapsable-${testId}`}
    >
      {children}
    </animated.div>
  );
};

CollabsableItem.displayName = 'CollapsableItem';

export { CollabsableItem };
