export type Size = 'L' | 'M' | 'S';

type FontTypeSize = {
  XL: number;
  L: number;
  M: number;
  S: number;
};

type FontTileSize = {
  L: number;
  M: number;
  S: number;
};

type FontType = {
  headline: FontTileSize;
  lineHeightHeadline: FontTileSize;
  text: FontTypeSize;
  lineHeightText: FontTypeSize;
};

export type Font = {
  titleText: (size: Size) => string;
  regularText: (size: Size) => string;
};

const createFont = (fontSize: FontType): Font => ({
  titleText: (size: Size): string => `
            font-family: 'Inter';
            font-size: ${fontSize.headline[size] / 16}rem;
            line-height: ${fontSize.lineHeightHeadline[size] / 16}rem;}
            font-weight: 700;
        `,
  regularText: (size: Size): string => `
            font-family: 'Inter';
            font-size: ${fontSize.text[size] / 16}rem;
            line-height: ${fontSize.lineHeightText[size] / 16}rem;
            font-weight: 400;
        `
});

export { createFont };
