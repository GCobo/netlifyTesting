import React, { Fragment, MouseEvent } from 'react';
import {
  GoogleIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  GithubIcon,
  AppleIcon
} from '../icons';

import {
  AppleButton,
  FacebookButton,
  GithubButton,
  GoogleButton,
  LinkedinButton,
  TwitterButton
} from './ButtonSocialMediaStyles';

export enum socialMedia {
  google = 'google',
  facebook = 'facebook',
  twitter = 'twitter',
  linkedin = 'linkedin',
  github = 'github',
  apple = 'apple'
}

type IProps = {
  social: socialMedia;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  testId?: string;
};

export const ButtonSocialMedia: React.FunctionComponent<IProps> = ({
  social,
  onClick,
  className,
  testId
}) => {
  return (
    <Fragment>
      {social === socialMedia.google && (
        <GoogleButton
          className={className}
          onClick={onClick}
          data-test={testId}
        >
          <GoogleIcon />
        </GoogleButton>
      )}
      {social === socialMedia.facebook && (
        <FacebookButton
          className={className}
          onClick={onClick}
          data-test={testId}
        >
          <FacebookIcon />
        </FacebookButton>
      )}
      {social === socialMedia.linkedin && (
        <LinkedinButton
          className={className}
          onClick={onClick}
          data-test={testId}
        >
          <LinkedinIcon />
        </LinkedinButton>
      )}
      {social === socialMedia.twitter && (
        <TwitterButton
          className={className}
          onClick={onClick}
          data-test={testId}
        >
          <TwitterIcon />
        </TwitterButton>
      )}
      {social === socialMedia.github && (
        <GithubButton
          className={className}
          onClick={onClick}
          data-test={testId}
        >
          <GithubIcon />
        </GithubButton>
      )}
      {social === socialMedia.apple && (
        <AppleButton
          className={className}
          onClick={onClick}
          data-test={testId}
        >
          <AppleIcon />
        </AppleButton>
      )}
    </Fragment>
  );
};
