import React from 'react';
import BannerSlider from './BannerSlider';
import EventBanner from './EventBanner';
import { useGetHomeData } from '@/api/queries/main';

const LandingSection = () => {
  const { data } = useGetHomeData();

  if (!data?.banners) return null;

  return (
    <section>
      <h2 className="sr-only">호텔 한달살기</h2>
      <BannerSlider banners={data.banners} />
      <EventBanner earlyBird={data.earlyBird} />
    </section>
  );
};

export default LandingSection;
