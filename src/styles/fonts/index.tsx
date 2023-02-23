import { Noto_Serif_KR, PT_Serif } from '@next/font/google';
import localFont from '@next/font/local';

export const notoSerifKr = Noto_Serif_KR({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-serif-kr',
});

export const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-serif',
});

export const pretendard = localFont({
  src: './PretendardVariable.woff2',
  style: 'normal',
  variable: '--font-pretendard',
});