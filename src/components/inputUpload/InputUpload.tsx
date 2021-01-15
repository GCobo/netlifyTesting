import React, { useCallback, useState, useEffect, MouseEvent } from 'react';
import { useDropzone } from 'react-dropzone';

import {
  ContainerDrag,
  ImagePreview,
  WrapperDrag,
  WrapperButtons,
  IconError,
  HelpLabelStyles,
  LabelInputUpload
} from './InputUploadStyle';
import { InputUploadProps, TypeFiles } from './InputUploadModel';
import { UploadIcon, TrashIcon } from '../icons';
import { ButtonIcon } from '../buttonIcon/ButtonIcon';
import { ErrorLabel } from '../errorLabel/ErrorLabel';

export const InputUpload = ({
  label,
  id,
  errorLabel,
  labelDrop = 'Drap and Drop your file here',
  acceptFiles = [TypeFiles.jpg, TypeFiles.png],
  maxSize = 10485760,
  onChange,
  onDelete,
  value,
  testId,
  helpLabel,
  circle,
  className
}: InputUploadProps) => {
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (value) {
      setPreview(value);
    }
  }, [value]);

  const onDrop = useCallback((files: File[]) => {
    const file = files[0];

    setPreview(URL.createObjectURL(file));
    onChange && onChange(file);
  }, []);
  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
    onDrop,
    accept: acceptFiles,
    maxSize
  });

  const onDeleteFile = (event: MouseEvent<HTMLButtonElement>) => {
    setPreview(undefined);
    onDelete && onDelete();
    event.stopPropagation();
  };

  const onUploadFile = (event: MouseEvent<HTMLButtonElement>) => {
    inputRef.current!.click();
    event.stopPropagation();
  };

  return (
    <div className={className}>
      {label && <LabelInputUpload htmlFor={id}>{label}</LabelInputUpload>}

      <ContainerDrag
        circle={circle}
        {...getRootProps()}
        errorLabel={errorLabel}
        isDragActive={isDragActive}
        isActive={!!preview}
        tabIndex={0}
        data-test={testId}
      >
        <input {...getInputProps()} />
        {preview ? (
          <WrapperDrag>
            <ImagePreview src={preview} circle={circle} />
            <WrapperButtons circle={circle}>
              <ButtonIcon
                onClick={onUploadFile}
                icon={<UploadIcon className='icon' />}
              />
              <ButtonIcon
                icon={<TrashIcon className='icon' />}
                onClick={onDeleteFile}
                testId='delete-file'
              />
            </WrapperButtons>
          </WrapperDrag>
        ) : (
          <WrapperDrag className='inActive'>
            {!errorLabel ? <UploadIcon /> : <IconError />}
            <p>{labelDrop}</p>
          </WrapperDrag>
        )}
      </ContainerDrag>
      {helpLabel && <HelpLabelStyles label={helpLabel} />}
      {errorLabel && <ErrorLabel label={errorLabel} />}
    </div>
  );
};
