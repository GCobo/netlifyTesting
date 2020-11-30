import React, { ReactElement, useState } from 'react'
import { ButtonIcon } from '../button'
import {
  CheckPlatformInput,
  CheckPlatformOption,
  CheckPlatformWrapper
} from './CheckPlatformStyles'

export type ICheckPlatform = {
  id: number
  icon: ReactElement
}

type IProps = {
  className?: string
  options: ICheckPlatform[]
}

export const CheckPlatform = ({ className, options }: IProps) => {
  const [checkPlatform, setCheckPlatform] = useState<number[]>([])

  const handleSetCheckPlatform = (id: number) => {
    setCheckPlatform((checkPlatform) =>
      checkPlatform.includes(id)
        ? checkPlatform.filter((key) => key !== id)
        : [...checkPlatform, id]
    )
  }

  return (
    <CheckPlatformWrapper className={className}>
      {options.map((option: any) => {
        return (
          <CheckPlatformOption key={option.id}>
            <CheckPlatformInput
              type='checkbox'
              checked={checkPlatform.includes(option.id)}
              id={option.id}
            />
            <ButtonIcon
              secondary
              icon={option.icon}
              onClick={() => handleSetCheckPlatform(option.id)}
            />
          </CheckPlatformOption>
        )
      })}
    </CheckPlatformWrapper>
  )
}
