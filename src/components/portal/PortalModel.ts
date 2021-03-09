export interface PortalProps {
  show?: boolean;
  children: React.ReactNode;
  actionRef?: any;
  onClickOutside?(): void;
  widthAuto?: boolean;
  className?: string;
  mode?: PositionMode;
  offset?: number;
  testId?: string;
}

export type IPosition = {
  top?: number;
  left?: number;
  right?: number;
  width?: number;
};

export enum PositionMode {
  left = 'left',
  right = 'right'
}
