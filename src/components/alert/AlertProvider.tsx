import React, { useState, createContext, FunctionComponent } from 'react';
import { nanoid } from 'nanoid';
import { useTransition, animated } from 'react-spring';

import { Alert, StateAlert } from './Alert';
import { AlertsContainer } from './Styles';

type OptionsParams = {
  confirm?: string;
  onConfirm?(): void;
  delay?: number;
  unique?: boolean;
  debug?: string;
  type?: StateAlert;
  message?: string;
  testId?: string;
};

export type AlertModel = {
  title: string;
  id: string;
  options?: OptionsParams;
};

type ContextProps = {
  addAlert(title: string, options?: OptionsParams): AlertModel;
  removeAlert(id: string): void;
  removeAllAlert(): void;
};

type IProps = {
  children: React.ReactNode;
};

const Ctx = createContext<ContextProps>({
  addAlert: () => {
    return {
      id: '0',
      title: 'Title',
      message: 'Example'
    };
  },
  removeAlert: () => {},
  removeAllAlert: () => {}
});

export const AlertProvider: FunctionComponent<IProps> = ({ children }) => {
  const [Alerts, setAlerts] = useState<AlertModel[]>([]);

  const addAlert = (
    title: string,
    options: OptionsParams = { unique: false, type: StateAlert.warning }
  ) => {
    const id = nanoid();
    const Alert = {
      title,
      id,
      confirm: options.confirm,
      onConfirm: options.onConfirm,
      debug: options.debug,
      options: options
    };

    if (options.delay) {
      setTimeout(() => {
        setAlerts((Alerts: AlertModel[]) =>
          options.unique ? [Alert] : [...Alerts, Alert]
        );
      }, options.delay);
    } else {
      setAlerts((Alerts: AlertModel[]) =>
        options.unique ? [Alert] : [...Alerts, Alert]
      );
    }

    return Alert;
  };

  const removeAlert = (id: string) => {
    setAlerts((Alerts: AlertModel[]) =>
      Alerts.filter((Alert: AlertModel) => Alert.id !== id)
    );
  };

  const removeAllAlert = () => {
    setAlerts([]);
  };

  const onDismiss = (id: string) => () => {
    removeAlert(id);
  };

  const transitions = useTransition(Alerts, (item: any) => item.id, {
    from: { transform: 'translate3d(600px,0,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(500px,0,0)' }
  });

  return (
    <Ctx.Provider value={{ addAlert, removeAlert, removeAllAlert }}>
      {children}
      <AlertsContainer>
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Alert
              title={item.title}
              message={item.options?.message}
              onClick={onDismiss(item.id)}
              id={item.id}
              testId={item.options?.testId}
              type={item.options?.type}
            />
          </animated.div>
        ))}
      </AlertsContainer>
    </Ctx.Provider>
  );
};

export const useAlert = () => React.useContext(Ctx);
