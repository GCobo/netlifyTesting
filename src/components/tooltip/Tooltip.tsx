import React, { Fragment, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { TooltipStyles } from './Tooltip.styles';

type IProps = {
  label: string;
  id: string;
  children: React.ReactElement;
  type?: 'dark' | 'success' | 'warning' | 'error' | 'info' | 'light';
  place?: 'top' | 'right' | 'bottom' | 'left';
};

export const Tooltip = ({ label, children, id, type, place }: IProps) => {
  const [show, setShow] = useState<boolean>(false);

  const hiddenTooltip = () => {
    setShow(false);
  };

  const seeTooltip = () => {
    setShow(true);
  };

  return (
    <Fragment>
      <span
        data-tip
        data-for={id}
        onMouseEnter={seeTooltip}
        onMouseLeave={hiddenTooltip}
      >
        {children}
      </span>
      {show && (
        <ReactTooltip
          id={id}
          type={type}
          place={place}
          effect='solid'
          className={TooltipStyles}
        >
          <span>{label}</span>
        </ReactTooltip>
      )}
    </Fragment>
  );
};
