export type AlertStylesProps = {
  type?: StateAlert;
};

export enum StateAlert {
  warning = 'warning',
  error = 'error',
  success = 'success',
  info = 'info'
}
