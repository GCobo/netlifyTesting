import React, { ReactElement, useEffect, useState } from 'react';
import { ButtonIcon } from '../buttonIcon/ButtonIcon';
import {
  CheckPlatformInput,
  CheckPlatformOption,
  CheckPlatformWrapper
} from './CheckPlatformStyles';

export type ICheckPlatform = {
  id: string;
  icon: ReactElement;
  name: string;
};

type IProps = {
  className?: string;
  options: ICheckPlatform[];
  name: string;
  onChange(values: string[]): void;
  value?: string[];
};

export const CheckPlatform = ({
  className,
  options,
  onChange,
  name,
  value = []
}: IProps) => {
  const [checkPlatform, setCheckPlatform] = useState<string[]>([]);

  const handleSetCheckPlatform = (id: string) => {
    setCheckPlatform((checkPlatform) =>
      checkPlatform.includes(id)
        ? checkPlatform.filter((key) => key !== id)
        : [...checkPlatform, id]
    );
  };

  useEffect(() => {
    if (value.length) {
      setCheckPlatform(value);
    }
  }, [value]);

  useEffect(() => {
    if (checkPlatform) {
      onChange && onChange(checkPlatform);
    }
  }, [checkPlatform]);

  return (
    <CheckPlatformWrapper className={className}>
      {options.map((option: ICheckPlatform) => {
        return (
          <CheckPlatformOption key={option.id}>
            <CheckPlatformInput
              type='checkbox'
              checked={checkPlatform.includes(option.id)}
              id={option.id}
              name={name}
              aria-checked={checkPlatform.includes(option.id)}
            />
            <ButtonIcon
              secondary={!checkPlatform.includes(option.id)}
              icon={option.icon}
              onClick={() => handleSetCheckPlatform(option.id)}
              testId={`check-${option.name}`}
              tooltip={option.name}
            />
          </CheckPlatformOption>
        );
      })}
    </CheckPlatformWrapper>
  );
};
