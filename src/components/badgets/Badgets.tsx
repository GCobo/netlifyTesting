import React from 'react'
import { BadgetsStyle } from './BadgetsStyles'

type IProps = {
  number?: number
  className?: string
}

export const Badgets: React.FunctionComponent<IProps> = ({
  number,
  className
}) => {
  return (
    <BadgetsStyle className={className} number={number}>
      {number && <span>{number > 99 ? '99+' : number}</span>}
    </BadgetsStyle>
  )
}
