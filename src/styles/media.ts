export const breakPoints = ['sm', 'md', 'lg', 'xl'] as const;

export const mediaQuerys = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export type TMedia = Record<(typeof breakPoints)[number], string>;

export const media: TMedia = breakPoints.reduce((acc, label) => {
  acc[label] = `@media (min-width: ${mediaQuerys[label]}px)`;
  return acc;
}, {} as TMedia);
