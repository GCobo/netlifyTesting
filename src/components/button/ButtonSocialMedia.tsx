import React, { Fragment } from 'react'
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
}

export const ButtonSocialMedia: React.FunctionComponent<IProps> = ({
  social
}) => {
  return (
    <Fragment>
      {social === socialMedia.google && (
        <GoogleButton>
          <GoogleIcon />
        </GoogleButton>
      )}
      {social === socialMedia.facebook && (
        <FacebookButton>
          <FacebookIcon />
        </FacebookButton>
      )}
      {social === socialMedia.linkedin && (
        <LinkedinButton>
          <LinkedinIcon />
        </LinkedinButton>
      )}
      {social === socialMedia.twitter && (
        <TwitterButton>
          <TwitterIcon />
        </TwitterButton>
      )}
    </Fragment>
  )
}
