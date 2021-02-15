import React, { useCallback, useState, useEffect, MouseEvent } from 'react';
import { useDropzone } from 'react-dropzone';

import {
  ContainerDrag,
  ImagePreview,
  WrapperDrag,
  WrapperButtons,
  IconError,
  HelpLabelStyles,
  LabelInputUpload,
  PreviewFile,
  Container
} from './InputUploadStyle';
import { InputUploadProps, TypeFiles } from './InputUploadModel';
import { UploadIcon, TrashIcon, FileIcon } from '../icons';
import { ButtonIcon } from '../buttonIcon/ButtonIcon';
import { ErrorLabel } from '../errorLabel/ErrorLabel';
import { Loading } from '../loading/Loading';

type Preview = {
  image?: string;
  fileName?: string;
};

function isFileImage(file: File | Blob) {
  return file && file['type'].split('/')[0] === 'image';
}

async function getFile(url: string, name?: string) {
  const file = await fetch(url).then((res) => res.blob());

  const isImage = isFileImage(file);

  return {
    image: isImage ? URL.createObjectURL(file) : undefined,
    fileName: name
  };
}

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
  fileName,
  testId,
  helpLabel,
  circle = false,
  className,
  loading = false,
  horizontal = false
}: InputUploadProps) => {
  const [preview, setPreview] = useState<Preview>();

  const updateFile = async (url: string, name?: string) => {
    const preview = await getFile(url, name);

    setPreview(preview);
  };

  useEffect(() => {
    if (value) {
      updateFile(value, fileName);
    }
  }, [value, fileName]);

  const onDrop = useCallback((files: File[]) => {
    const file = files[0];
    const isImage = isFileImage(file);

    setPreview({
      image: isImage ? URL.createObjectURL(file) : undefined,
      fileName: file.name
    });
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
    <Container className={className} horizontal={horizontal}>
      {label && <LabelInputUpload htmlFor={id}>{label}</LabelInputUpload>}

      <ContainerDrag
        circle={circle}
        horizontal={horizontal}
        {...getRootProps()}
        errorLabel={errorLabel}
        isDragActive={isDragActive}
        isActive={!!preview}
        tabIndex={0}
        data-test={testId}
      >
        <input {...getInputProps()} />
        {preview ? (
          loading ? (
            <Loading testId='upload-loader' />
          ) : (
            <WrapperDrag>
              {preview.image && !horizontal ? (
                <ImagePreview src={preview.image} circle={circle} />
              ) : (
                <PreviewFile horizontal={horizontal}>
                  <FileIcon /> <p>{preview.fileName}</p>{' '}
                </PreviewFile>
              )}
              <WrapperButtons circle={circle} horizontal={horizontal}>
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
          )
        ) : (
          <WrapperDrag className={'inActive'} horizontal={horizontal}>
            {!errorLabel ? <UploadIcon className='icon' /> : <IconError />}
            <p>{labelDrop}</p>
          </WrapperDrag>
        )}
      </ContainerDrag>
      {helpLabel && <HelpLabelStyles label={helpLabel} />}
      {errorLabel && <ErrorLabel label={errorLabel} />}
    </Container>
  );
};
