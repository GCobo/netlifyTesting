import React, { useCallback, useState, useEffect, MouseEvent } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';

import {
  ContainerDrag,
  ImagePreview,
  WrapperDrag,
  WrapperButtons,
  IconError,
  HelpLabelStyles,
  LabelInputUpload,
  PreviewFile,
  Container,
  MultipleFiles,
  InputRequired,
  IconUpload
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
  onErrors,
  onDeleteMultiple,
  value,
  valueName,
  fileName,
  testId,
  helpLabel,
  circle = false,
  className,
  loading = false,
  horizontal = false,
  multiple = false,
  required = false
}: InputUploadProps) => {
  const [preview, setPreview] = useState<Preview>();
  const [files, setFiles] = useState<Preview[]>([]);

  const updateFile = async (url: string, name?: string) => {
    const preview = await getFile(url, name);
    setPreview(preview);
  };

  useEffect(() => {
    if (value) {
      console.log(value);
      updateFile(value, fileName);
    }
  }, [value, fileName]);

  useEffect(() => {
    if (valueName) {
      if (typeof valueName === 'string') {
        setPreview({
          fileName: valueName
        });
      } else {
        setFiles(() => valueName.map((item) => ({ fileName: item })));
      }
    }
  }, [valueName]);

  const onDrop = useCallback(
    (files: File[], filesRejection: FileRejection[]) => {
      if (filesRejection.length) {
        onErrors && onErrors(filesRejection);
      }

      if (files.length) {
        if (multiple) {
          files.map((file: File) => {
            const isImage = isFileImage(file);

            setFiles((files) => [
              ...files,
              {
                image: isImage ? URL.createObjectURL(file) : undefined,
                fileName: file.name
              }
            ]);
          });

          onChange && onChange(files);
        } else {
          const file = files[0];
          const isImage = isFileImage(file);

          setPreview({
            image: isImage ? URL.createObjectURL(file) : undefined,
            fileName: file.name
          });

          onChange && onChange(file);
        }
      }
    },
    []
  );

  const onDropRejected = (name: any) => {
    console.log(name);
  };

  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
    onDrop,
    onDropRejected,
    accept: acceptFiles,
    maxSize
  });

  const onDeleteFile = (event: MouseEvent<HTMLButtonElement>) => {
    setPreview(undefined);
    onDelete && onDelete();
    event.stopPropagation();
  };

  const onDeleteMultipleFile = (file: Preview) => {
    const newFiles = files.filter((f: Preview) => f.fileName !== file.fileName);

    setFiles(newFiles);
    file.fileName && onDeleteMultiple && onDeleteMultiple(file.fileName);
  };

  const onUploadFile = (event: MouseEvent<HTMLButtonElement>) => {
    inputRef.current!.click();
    event.stopPropagation();
  };

  return (
    <Container className={className} horizontal={horizontal}>
      {label && (
        <LabelInputUpload htmlFor={id}>
          {label} {required && <InputRequired>*</InputRequired>}
        </LabelInputUpload>
      )}

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
            {!errorLabel ? (
              <IconUpload horizontal={horizontal} className='icon' />
            ) : (
              <IconError horizontal={horizontal} />
            )}
            <p>{labelDrop}</p>
          </WrapperDrag>
        )}
      </ContainerDrag>
      {multiple && files.length > 0 && (
        <MultipleFiles>
          {files.map((file: Preview, index: number) => (
            <li
              data-test={`file-${file.fileName}-${index}`}
              key={file.fileName}
            >
              <p>{file.fileName} </p>
              <ButtonIcon
                testId='button-delete-file'
                icon={<TrashIcon />}
                onClick={() => onDeleteMultipleFile(file)}
              />
            </li>
          ))}
        </MultipleFiles>
      )}
      {helpLabel && <HelpLabelStyles label={helpLabel} />}
      {errorLabel && <ErrorLabel label={errorLabel} />}
    </Container>
  );
};
