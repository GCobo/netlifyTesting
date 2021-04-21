import { FileRejection } from 'react-dropzone';

export type ErrorLabelProps = {
  errorLabel?: string;
};

export type InputUploadCircleProps = {
  circle?: boolean;
  horizontal?: boolean;
};

export interface DragZoneProps extends ErrorLabelProps, InputUploadCircleProps {
  isDragActive: boolean;
  isActive: boolean;
}

export interface InputUploadProps
  extends ErrorLabelProps,
    InputUploadCircleProps {
  label?: string;
  labelDrop?: string;
  helpLabel?: string;
  id?: string;
  acceptFiles?: string[];
  maxSize?: number;
  onChange?(file: File | File[]): void;
  value?: string;
  valueName?: string | string[];
  fileName?: string;
  onDelete?(): void;
  onDeleteMultiple?(fileName: string): void;
  testId?: string;
  className?: string;
  loading?: boolean;
  multiple?: boolean;
  onErrors?(errorFiles: FileRejection[]): void;
  required?: boolean;
}

export enum TypeFiles {
  jpg = 'image/jpeg',
  png = 'image/png',
  pdf = 'application/pdf',
  doc = 'application/msword',
  docx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  xls = '.xls',
  ttf = '.ttf',
  otf = '.otf'
}
