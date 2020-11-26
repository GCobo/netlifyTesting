import React, { useState } from 'react'
import { ButtonIcon } from '../button'
import { AndroidIcon, AppleIcon } from '../icons'
import {
  CheckPlatformInput,
  CheckPlatformOption,
  CheckPlatformWrapper
} from './CheckPlatformStyles'

type IProps = {
  className?: string
}

export const CheckPlatform = ({ className }: IProps) => {
  const [checkPlatform, setCheckPlatform] = useState<number[]>([])

  const options = [
    {
      id: 1,
      icon: <AndroidIcon />
    },
    {
      id: 2,
      icon: <AppleIcon />
    }
  ]

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
        console.log(checkPlatform)
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
