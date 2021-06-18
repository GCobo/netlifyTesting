import React from 'react';

import { ButtonSocialMedia, socialMedia } from './ButtonSocialMedia';

export default {
  title: 'Components/ButtonSocialMedia',
  component: ButtonSocialMedia,
  argTypes: {}
};

export const Facebook = (args: any) => {
  return (
    <ButtonSocialMedia
      social={socialMedia.facebook}
      {...args}
      onClick={() => {}}
    />
  );
};

export const Apple = (args: any) => {
  return (
    <ButtonSocialMedia
      social={socialMedia.apple}
      {...args}
      onClick={() => {}}
    />
  );
};

export const Github = (args: any) => {
  return (
    <ButtonSocialMedia
      social={socialMedia.github}
      {...args}
      onClick={() => {}}
    />
  );
};
export const Google = (args: any) => {
  return (
    <ButtonSocialMedia
      social={socialMedia.google}
      {...args}
      onClick={() => {}}
    />
  );
};

export const Linkedin = (args: any) => {
  return (
    <ButtonSocialMedia
      social={socialMedia.linkedin}
      {...args}
      onClick={() => {}}
    />
  );
};
export const Twitter = (args: any) => {
  return (
    <ButtonSocialMedia
      social={socialMedia.twitter}
      {...args}
      onClick={() => {}}
    />
  );
};
