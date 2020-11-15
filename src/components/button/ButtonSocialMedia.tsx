import React, { Fragment, MouseEvent } from 'react'
import { GoogleIcon, LinkedinIcon, TwitterIcon } from '../icons'
import FacebookIcon from '../icons/facebookIcon'
import {
  FacebookButton,
  GoogleButton,
  LinkedinButton,
  TwitterButton
} from './ButtonSocialMediaStyles'

export enum socialMedia {
  google = 'google',
  facebook = 'facebook',
  twitter = 'twitter',
  linkedin = 'linkedin'
}

type IProps = {
  social: socialMedia
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const ButtonSocialMedia: React.FunctionComponent<IProps> = ({
  social,
  onClick
}) => {
  return (
    <Fragment>
      {social === socialMedia.google && (
        <GoogleButton onClick={onClick}>
          <GoogleIcon />
        </GoogleButton>
      )}
      {social === socialMedia.facebook && (
        <FacebookButton onClick={onClick}>
          <FacebookIcon />
        </FacebookButton>
      )}
      {social === socialMedia.linkedin && (
        <LinkedinButton onClick={onClick}>
          <LinkedinIcon />
        </LinkedinButton>
      )}
      {social === socialMedia.twitter && (
        <TwitterButton onClick={onClick}>
          <TwitterIcon />
        </TwitterButton>
      )}
    </Fragment>
  )
}
