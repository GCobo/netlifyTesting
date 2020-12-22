export interface PortalProps {
  show?: boolean;
  children: React.ReactNode;
  actionRef?: any;
  onClickOutside?(): void;
  widthAuto?: boolean;
  className?: string;
  mode?: PositionMode;
}

export type IPosition = {
  top?: number;
  left?: number;
  right?: number;
  width?: number | string;
};

export enum PositionMode {
  left = 'left',
  right = 'right'
}
