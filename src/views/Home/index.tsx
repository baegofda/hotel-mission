import BannerSlider from './components/BannerSlider';
import EventBanner from './components/EventBanner';
import { useGetHomeData } from '@/api/hooks/main';

const HomeContainer = () => {
  const { data, isError } = useGetHomeData();

  if (!data || isError) return null;

  return (
    <section>
      <h2 className="sr-only">호텔 한달살기</h2>
      <BannerSlider banners={data?.banners} />
      <EventBanner />
    </section>
  );
};

export default HomeContainer;
