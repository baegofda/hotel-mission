import '@/styles/utils.css';
import '@/styles/fonts.css';
import type { AppProps } from 'next/app';
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
        <GlobalStyle>
          <GlobalLayout>
            <Component {...pageProps} />
          </GlobalLayout>
        </GlobalStyle>
      </Recoil>
    </ReactQuery>
  );
}
