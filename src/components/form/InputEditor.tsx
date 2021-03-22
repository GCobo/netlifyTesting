import React, { useState } from 'react';
import RichTextEditor from 'react-rte';
import { useTheme } from '@emotion/react';

import {
  EditorStyles,
  Label,
  Wrapper,
  ErrorLabelInput,
  HelpLabelInput
} from './Styles';

type IProps = {
  onChange?(value: string): void;
  label?: string;
  id?: string;
  className?: string;
  errorLabel?: string;
  helpLabel?: string;
  disabled?: boolean;
  placeholder?: string;
};

export const InputEditor = ({
  onChange,
  label,
  id,
  className,
  errorLabel,
  helpLabel,
  disabled = false,
  placeholder
}: IProps) => {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());

  const onChangeValue = (value: any) => {
    setValue(value);
    onChange && onChange(value.toString('html'));
  };

  const theme = useTheme();

  const toolbarConfig: any = {
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS'],
    INLINE_STYLE_BUTTONS: [
      { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
      { label: 'Italic', style: 'ITALIC' },
      { label: 'Underline', style: 'UNDERLINE' }
    ],
    BLOCK_TYPE_BUTTONS: [
      { label: 'UL', style: 'unordered-list-item' },
      { label: 'OL', style: 'ordered-list-item' }
    ]
  };

  return (
    <Wrapper className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <RichTextEditor
        value={value}
        onChange={onChangeValue}
        toolbarConfig={toolbarConfig}
        className={EditorStyles({ ...theme, errorLabel })}
        disabled={disabled}
        placeholder={placeholder}
      />
      {errorLabel && <ErrorLabelInput label={errorLabel} />}
      {helpLabel && <HelpLabelInput label={helpLabel} />}
    </Wrapper>
  );
};
