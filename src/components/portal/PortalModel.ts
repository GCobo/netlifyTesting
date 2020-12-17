export interface PortalProps {
  show?: boolean;
  children: React.ReactNode;
  actionRef?: any;
  onClickOutside?(): void;
  widthAuto?: boolean;
  className?: string;
}

export type IPosition = {
  top: number;
  left: number;
  right: number;
  width: number | string;
};
