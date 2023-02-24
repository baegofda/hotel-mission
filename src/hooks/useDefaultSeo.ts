import { useRouter } from 'next/router';

const DOMAIN = 'https://www.livinginhotel.com';

const useDefaultSeo = () => {
  const { asPath } = useRouter();
  const canonical = `${DOMAIN}${asPath}`;
  const defaultTitle = '호텔에삶｜롱스테이 플랫폼, 호텔장기투숙, 호텔 한달살기, 서울한달살기';
  const siteName = 'TravelMakers Korea';
  const description = '설레는 한 달 살기의 시작을 호텔에삶에서. 1주부터 3달 이상 호텔 롱스테이 하세요.';
  const languageAlternates = [
    { hrefLang: 'x-default', href: canonical },
    { hrefLang: 'ko', href: `${DOMAIN}/ko${asPath}` },
  ];

  const openGraph = {
    type: 'website',
    url: canonical,
    title: defaultTitle,
    description,
    images: [],
    site_name: siteName,
  };

  const twitter = {
    site: canonical,
    cardType: 'summary_large_image',
  };

  return { defaultTitle, description, languageAlternates, canonical, openGraph, twitter };
};

export default useDefaultSeo;
