import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/serialize';

const font10 = css`
  font-size: 10px;
  line-height: 16px;
`;

const font12 = css`
  font-size: 12px;
  line-height: 20px;
`;

const font14 = css`
  font-size: 14px;
  line-height: 22px;
`;

const font16 = css`
  font-size: 16px;
  line-height: 24px;
`;

const font18 = css`
  font-size: 18px;
  line-height: 24px;
`;

const font20 = css`
  font-size: 20px;
  line-height: 32px;
`;

const font24 = css`
  font-size: 24px;
  line-height: 36px;
`;

const font32 = css`
  font-size: 32px;
  line-height: 44px;
`;

const font40 = css`
  font-size: 40px;
  line-height: 60px;
`;

const TFontSizes = ['font10', 'font12', 'font14', 'font16', 'font18', 'font20', 'font24', 'font32', 'font40'] as const;

export type TFontSizes = Record<(typeof TFontSizes)[number], SerializedStyles>;

export const fontSizes = { font10, font12, font14, font16, font18, font20, font24, font32, font40 };
