export type ErrorLabelProps = {
  errorLabel?: string;
};

type InputUploadCircleProps = {
  circle?: boolean;
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
  onChange?(file: File): void;
  value?: string;
  onDelete?(): void;
  testId?: string;
}

export enum TypeFiles {
  jpg = 'image/jpeg',
  png = 'image/png',
  pdf = 'application/pdf',
  doc = 'application/msword',
  docx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  xls = '.xls'
}
