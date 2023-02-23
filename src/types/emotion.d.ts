import { TFontSizes } from '@/styles/fontSizes';
import { TMedia } from '@/styles/media';
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    fontSizes: TFontSizes;
    media: TMedia;
  }
}
