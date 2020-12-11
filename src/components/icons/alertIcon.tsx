import React from 'react';

type IProps = {
  className?: string;
};

const AlertIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg className={className} width='24' height='24' viewBox='0 0 24 24'>
      <path d='M11.988 24c-6.626-0.007-11.992-5.382-11.988-12.008s5.378-11.994 12.004-11.992c6.626 0.002 11.996 5.374 11.996 12-0.004 6.631-5.381 12.003-12.012 12zM2.4 12.206c0.057 5.281 4.369 9.525 9.651 9.497s9.548-4.318 9.548-9.6-4.267-9.571-9.548-9.6c-5.282-0.028-9.594 4.215-9.651 9.497v0.206zM13.2 18h-2.4v-2.4h2.4v2.4zM13.2 13.2h-2.4v-7.2h2.4v7.2z'></path>
    </svg>
  );
};

export default AlertIcon;
