import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import GlobalLayout from '@/components/GlobalLayout';
import GlobalStyle from '@/components/GlobalStyle';
import ReactQuery from '@/components/ReactQuery';
import Recoil from '@/components/Recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQuery dehydratedState={pageProps.dehydratedState}>
      <Recoil>
        <GlobalStyle />
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </Recoil>
    </ReactQuery>
  );
}
