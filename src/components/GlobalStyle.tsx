import { Global, ThemeProvider } from '@emotion/react';
import { PropsWithChildren } from 'react';
import { style } from '../styles/global-style';
import { theme } from '@/styles/theme';

const GlobalStyle = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Global styles={style} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default GlobalStyle;
