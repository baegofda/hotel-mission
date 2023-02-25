import '@/styles/utils.css';
import '@/styles/fonts.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import GlobalLayout from '@/components/GlobalLayout';
import GlobalStyle from '@/components/GlobalStyle';
import ReactQuery from '@/components/ReactQuery';
import Recoil from '@/components/Recoil';
import useDefaultSeo from '@/hooks/useDefaultSeo';

export default function App({ Component, pageProps }: AppProps) {
  const defaultSeo = useDefaultSeo();

  return (
    <ReactQuery dehydratedState={pageProps.dehydratedState}>
      <Recoil>
        <DefaultSeo {...defaultSeo} />
        <Head>
          <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        </Head>
        <GlobalStyle>
          <GlobalLayout>
            <Component {...pageProps} />
          </GlobalLayout>
        </GlobalStyle>
      </Recoil>
    </ReactQuery>
  );
}
