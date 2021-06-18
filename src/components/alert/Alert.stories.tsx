import React from 'react';

import { Button } from '../button';
import { Alert } from './Alert';
import { StateAlert } from './AlertModel';
import { AlertProvider, useAlert } from './AlertProvider';

export default {
  title: 'Components/Alerts',
  component: Alert,
  argTypes: {}
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

export const AlertError = (args: any) => {
  return (
    <WrapperAlerts>
      <AlertComponent type={StateAlert.error} {...args} />
    </WrapperAlerts>
  );
};

export const AlertInfo = (args: any) => {
  return (
    <WrapperAlerts>
      <AlertComponent type={StateAlert.info} {...args} />
    </WrapperAlerts>
  );
};
export const AlertSuccess = (args: any) => {
  return (
    <WrapperAlerts>
      <AlertComponent type={StateAlert.success} {...args} />
    </WrapperAlerts>
  );
};
export const AlertWarning = (args: any) => {
  return (
    <WrapperAlerts>
      <AlertComponent type={StateAlert.warning} {...args} />
    </WrapperAlerts>
  );
};
