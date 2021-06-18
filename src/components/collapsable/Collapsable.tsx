import React, { Children, cloneElement, useEffect, useRef, useState } from 'react';

import { ChevronDownIcon } from '../icons';
import { CollabsableItem } from './CollapsableItem';
import { CollapsableItemHeader, CollapseWrapper } from './CollapsableStyles';

type IProps = {
  children: React.ReactElement[];
  allOpen?: boolean;
};

export const Collapsable = ({ children, allOpen }: IProps) => {
  const [itemsOpened, setItemsOpened] = useState<number[]>([]);
  const [height, setHeight] = useState<number>(0);
  const containerRef = useRef<HTMLUListElement>(null);

  const toggleCollapsable = (index: number) =>
    setItemsOpened((prevItems: number[]) =>
      prevItems.includes(index)
        ? prevItems.filter((item) => item !== index)
        : [...prevItems, index]
    );

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.clientHeight);
    }
  }, [containerRef]);

  useEffect(() => {
    if (allOpen) {
      setItemsOpened(() => children.map((_, index: number) => index));
    }
  }, [allOpen, children]);

  return (
    <CollapseWrapper ref={containerRef}>
      {Children.map(children, (child: React.ReactElement, index: number) => {
        return (
          child.type === CollabsableItem && (
            <li>
              <CollapsableItemHeader
                onClick={() => toggleCollapsable(index)}
                isOpen={itemsOpened.includes(index)}
                data-test={`collapsable-item-${
                  child.props.testId ? child.props.testId : index
                }`}
              >
                {child.props.title}
                <ChevronDownIcon />
              </CollapsableItemHeader>

              {cloneElement(child, {
                open: itemsOpened.includes(index),
                height,
                itemsOpen: itemsOpened.length,
                totalItems: children.length
              })}
            </li>
          )
        );
      })}
    </CollapseWrapper>
  );
};
