type SizeTitleText = 'L' | 'M' | 'S' | 'XS';
type SizeRegularText = 'XL' | 'L' | 'M' | 'S' | 'XS';

type FontTypeSize = {
  XL: number;
  L: number;
  M: number;
  S: number;
  XS: number;
};

type FontTileSize = {
  L: number;
  M: number;
  S: number;
  XS: number;
};

type FontType = {
  headline: FontTileSize;
  lineHeightHeadline: FontTileSize;
  text: FontTypeSize;
  lineHeightText: FontTypeSize;
};

export type Font = {
  titleText: (size: SizeTitleText) => string;
  regularText: (size: SizeRegularText) => string;
};

const createFont = (fontSize: FontType): Font => ({
  titleText: (size: SizeTitleText): string => `
            font-family: inherit;
            font-size: ${fontSize.headline[size] / 16}rem;
            line-height: ${fontSize.lineHeightHeadline[size] / 16}rem;
            font-weight: 700;
        `,
  regularText: (size: SizeRegularText): string => `
            font-family: inherit;
            font-size: ${fontSize.text[size] / 16}rem;
            line-height: ${fontSize.lineHeightText[size] / 16}rem;
            font-weight: 400;
        `
});

export { createFont };
