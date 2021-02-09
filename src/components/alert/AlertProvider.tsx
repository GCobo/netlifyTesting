import React, { useState, createContext, FunctionComponent } from 'react';
import { nanoid } from 'nanoid';
import { useTransition, animated } from 'react-spring';

import { Alert } from './Alert';
import { AlertsContainer } from './Styles';
import { StateAlert } from './AlertModel';
import { Portal } from '../portal/Portal';

type OptionsParams = {
  confirm?: string;
  onConfirm?(): void;
  delay?: number;
  unique?: boolean;
  debug?: string;
  type?: StateAlert;
  message?: string;
  testId?: string;
  time?: number;
};

export type AlertModel = {
  title: string;
  id: string;
  options?: OptionsParams;
};

type ContextProps = {
  addAlert(title: string, options?: OptionsParams): void;
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
  const [alerts, setAlerts] = useState<AlertModel[]>([]);

  const addAlert = (
    title: string,
    options: OptionsParams = { unique: false, type: StateAlert.warning }
  ) => {
    const id = nanoid();
    const alert = {
      title,
      id,
      confirm: options.confirm,
      onConfirm: options.onConfirm,
      debug: options.debug,
      options: options
    };

    if (options.delay) {
      setTimeout(() => {
        setAlerts((alerts: AlertModel[]) =>
          options.unique ? [alert] : [...alerts, alert]
        );
      }, options.delay);
    } else {
      if (options.unique) {
        if (alerts.length) {
          setAlerts([]);
          setTimeout(() => {
            setAlerts([alert]);
          }, 700);
        } else {
          setAlerts([alert]);
        }
      } else {
        setAlerts((alerts: AlertModel[]) => [...alerts, alert]);
      }
    }

    if (options.time) {
      setTimeout(() => {
        removeAlert(id);
      }, options.time);
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

  const transitions = useTransition(alerts, (item: any) => item.id, {
    from: { transform: 'translate3d(600px,0,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(500px,0,0)' }
  });

  return (
    <Ctx.Provider value={{ addAlert, removeAlert, removeAllAlert }}>
      {children}
      <Portal show={true}>
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
      </Portal>
    </Ctx.Provider>
  );
};

export const useAlert = () => React.useContext(Ctx);
