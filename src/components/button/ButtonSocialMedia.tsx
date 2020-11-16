import React, { Fragment, MouseEvent } from 'react'
import {
  GoogleIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  GithubIcon
} from '../icons'

import {
  FacebookButton,
  GithubButton,
  GoogleButton,
  LinkedinButton,
  TwitterButton
} from './ButtonSocialMediaStyles'

export enum socialMedia {
  google = 'google',
  facebook = 'facebook',
  twitter = 'twitter',
  linkedin = 'linkedin',
  github = 'github'
}

type IProps = {
  social: socialMedia
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  className?: string
}

export const ButtonSocialMedia: React.FunctionComponent<IProps> = ({
  social,
  onClick,
  className
}) => {
  return (
    <Fragment>
      {social === socialMedia.google && (
        <GoogleButton className={className} onClick={onClick}>
          <GoogleIcon />
        </GoogleButton>
      )}
      {social === socialMedia.facebook && (
        <FacebookButton className={className} onClick={onClick}>
          <FacebookIcon />
        </FacebookButton>
      )}
      {social === socialMedia.linkedin && (
        <LinkedinButton className={className} onClick={onClick}>
          <LinkedinIcon />
        </LinkedinButton>
      )}
      {social === socialMedia.twitter && (
        <TwitterButton className={className} onClick={onClick}>
          <TwitterIcon />
        </TwitterButton>
      )}
      {social === socialMedia.github && (
        <GithubButton onClick={onClick}>
          <GithubIcon />
        </GithubButton>
      )}
    </Fragment>
  )
}
