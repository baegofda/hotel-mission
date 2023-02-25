import { useRef, useState } from 'react';
import { Swiper } from 'swiper';
import useProgress from './useProgress';
import { TBanner } from '@/api/types/home';

const useBannerSlider = (banners: TBanner[]) => {
  const size = banners.length;
  const [isEnd, setIsEnd] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const progressBar = useRef<HTMLDivElement | null>(null);
  const { reset, slide, offset } = useProgress(progressBar.current, size);
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasBadge = currentIndex === 0;

  const handleSlider = (index: number) => offset(index);

  const onSlideChange = (swiper: Swiper) => {
    if (isEnd && swiper.realIndex === 0) {
      reset();
      setIsEnd(false);
    }

    if (isDragging) offset(swiper.realIndex);

    setCurrentIndex(swiper.realIndex);
  };

  const onAutoplayResume = (swiper: Swiper) => {
    if (swiper.realIndex === size - 1) setIsEnd(true);

    slide(currentIndex + 1);

    isDragging && setIsDragging(false);
  };

  const onTouchMove = () => setIsDragging(true);

  return { currentIndex, progressBar, size, onTouchMove, onSlideChange, handleSlider, onAutoplayResume, hasBadge };
};

export default useBannerSlider;
