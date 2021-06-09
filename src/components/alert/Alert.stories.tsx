import React from 'react';
import { Button } from '../button';
import { Alert } from './Alert';
import { StateAlert } from './AlertModel';
import { AlertProvider, useAlert } from './AlertProvider';

export default {
  title: 'Components/Alerts',
  component: Alert
};

const WrapperAlerts = ({ children }: any) => {
  return <AlertProvider>{children}</AlertProvider>;
};

const AlertComponent = ({ type = StateAlert.info }: any) => {
  const { addAlert } = useAlert();

  const titleAlert = 'This is an example of alert';
  const idAlert = 'alertTest';
  const onShowAlert = () => {
    addAlert(titleAlert, { testId: idAlert, type });
  };

  return <Button onClick={onShowAlert}>Show Alert</Button>;
};

export const AlertError = () => {
  return (
    <WrapperAlerts>
      <AlertComponent type={StateAlert.error} />
    </WrapperAlerts>
  );
};

export const AlertInfo = () => {
  return (
    <WrapperAlerts>
      <AlertComponent type={StateAlert.info} />
    </WrapperAlerts>
  );
};
export const AlertSuccess = () => {
  return (
    <WrapperAlerts>
      <AlertComponent type={StateAlert.success} />
    </WrapperAlerts>
  );
};
export const AlertWarning = () => {
  return (
    <WrapperAlerts>
      <AlertComponent type={StateAlert.warning} />
    </WrapperAlerts>
  );
};
