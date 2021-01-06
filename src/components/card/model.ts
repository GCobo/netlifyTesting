import { ReactNode } from 'react';

export type ImageSizeCard = {
  imageBig?: boolean;
};

export interface ImageStyleCard extends ImageSizeCard {
  logo?: string;
}

export interface CardsProps extends ImageStyleCard {
  title: string;
  lastUpdate: string;
  id?: string;
  actions: ReactNode;
  testId?: string;
  className?: string;
}
