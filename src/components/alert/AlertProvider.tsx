import React, { useState, createContext, FunctionComponent } from 'react';
import { useTransition, animated } from 'react-spring';
import { Alert, AlertProps } from './Alert';

type OptionsParams = {
  confirm?: string;
  onConfirm?(): void;
  delay?: number;
  unique?: boolean;
  debug?: string;
};

type ContextProps = {
  addToast(
    message: string,
    title: string,
    onClick?: void,
    success?: boolean,
    error?: boolean,
    warning?: boolean,
    options?: OptionsParams,
    id?: string
  ): AlertProps;
  removeToast(id: string): void;
  removeAllToast(): void;
};

type IProps = {
  children: React.ReactNode;
};

const Ctx = createContext<ContextProps>({
  addToast: () => {
    return { id: '0', title: 'Title', message: 'Example' };
  },
  removeToast: () => {},
  removeAllToast: () => {}
});

export const ToastProvider: FunctionComponent<IProps> = ({ children }) => {
  const [toasts, setToasts] = useState<AlertProps[]>([]);

  const addToast = (
    message: string,
    title: string,
    success?: boolean,
    error?: boolean,
    warning?: boolean,
    onClick?: boolean,
    options: OptionsParams = { unique: false },
    id?: string
  ) => {
    const toast = {
      message,
      title,
      id,
      success,
      error,
      warning,
      onClick,
      debug: options.debug
    };

    if (options.delay) {
      setTimeout(() => {
        setToasts((toasts: AlertProps[]) =>
          options.unique ? [toast] : [...toasts, toast]
        );
      }, options.delay);
    } else {
      setToasts((toasts: AlertProps[]) =>
        options.unique ? [toast] : [...toasts, toast]
      );
    }

    return toast;
  };

  const removeToast = (id: string) => {
    setToasts((toasts: AlertProps[]) =>
      toasts.filter((toast: AlertProps) => toast.id !== id)
    );
  };

  const removeAllToast = () => {
    setToasts([]);
  };

  const onDismiss = (id: string) => () => removeToast(id);

  const transitions = useTransition(toasts, (item: any) => item.id, {
    from: { transform: 'translate3d(0,-200px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-200px,0)' }
  });

  return (
    <Ctx.Provider value={{ addToast, removeToast, removeAllToast }}>
      {children}
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Alert
            title={item.title}
            message={item.message}
            onClick={onDismiss(item.id)}
            id={item.id}
          />
        </animated.div>
      ))}
    </Ctx.Provider>
  );
};

export const useToast = () => React.useContext(Ctx);
