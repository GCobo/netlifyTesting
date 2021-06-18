import React, { Children, cloneElement, useEffect, useRef, useState } from 'react';

import { ChevronDownIcon } from '../icons';
import { CollabsableItem } from './CollapsableItem';
import { CollapsableItemHeader, CollapseWrapper } from './Styles';

type IProps = {
  children: React.ReactElement[];
  onChange?(value: number[]): void;
};

export const Collapsable = ({ children, onChange }: IProps) => {
  const [itemsOpened, setItemsOpened] = useState<number[]>([]);
  const [height, setHeight] = useState<number>(0);
  const containerRef = useRef<HTMLUListElement>(null);

  const toggleCollapsable = (index: number) => {
    setItemsOpened([index]);
  };

  useEffect(() => {
    onChange && onChange(itemsOpened);
  }, [itemsOpened]);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.clientHeight);
    }
  }, [containerRef]);

  return (
    <CollapseWrapper ref={containerRef}>
      {Children.map(children, (child: React.ReactElement, index: number) => {
        return (
          child.type === CollabsableItem && (
            <li>
              <CollapsableItemHeader
                onClick={() => toggleCollapsable(index)}
                isOpen={itemsOpened.includes(index) || child.props.itemIsOpened}
                data-test={`collapsable-item-${
                  child.props.testId ? child.props.testId : index
                }`}
              >
                {child.props.title}
                <ChevronDownIcon />
              </CollapsableItemHeader>

              {cloneElement(child, {
                open: itemsOpened.includes(index) || child.props.itemIsOpened,
                height,
                itemsOpen: itemsOpened.length || child.props.itemIsOpended,
                totalItems: children.length
              })}
            </li>
          )
        );
      })}
    </CollapseWrapper>
  );
};
