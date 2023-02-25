import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import BannerCard from './BannerCard';
import { IHomeResponse, TBanner } from '@/api/types/home';
import SliderBtn from '@/components/SliderBtn';
import TLink from '@/components/TLink';
import useMediaQuery from '@/hooks/useMediaQuery';
import useBannerSlider from '@/views/Home/hooks/useBannerSlider';

const BannerSlider = ({ banners }: Pick<IHomeResponse, 'banners'>) => {
  const { isRange } = useMediaQuery('sm');
  const filterdBanners = banners.filter(banner => banner.description);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const { currentIndex, progressBar, size, onTouchMove, onSlideChange, handleSlider, onAutoplayResume, hasBadge } = useBannerSlider(filterdBanners);
  const { name, link, description, promotion } = filterdBanners[currentIndex];

  const onInit = () => {
    if (!progressBar.current) return;

    progressBar.current.style.transition = 'transform 5s linear 0s';
    progressBar.current.style.transform = `translateX(calc(-100% + (100% / ${size}))`;
  };

  return (
    <Wrapper>
      <TLink href={link}>
        <a>
          <Swiper
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{ prevEl, nextEl }}
            onInit={onInit}
            onSlideChange={onSlideChange}
            onTouchMove={onTouchMove}
            onAutoplayResume={onAutoplayResume}
            modules={[Autoplay, EffectFade, Navigation]}
            loop
          >
            {filterdBanners.map((banner, idx) => (
              <SwiperSlide key={idx}>
                <Slide images={banner.images} mobile_images={banner.mobile_images} />
              </SwiperSlide>
            ))}
          </Swiper>
        </a>
      </TLink>
      <CardWrapper>
        <SliderActions>
          <SliderStatus>
            <SliderPagination>
              {currentIndex + 1}/{filterdBanners.length}
            </SliderPagination>
            <Progress>
              <ProgressBar ref={progressBar} slideIndex={currentIndex + 1} />
            </Progress>
          </SliderStatus>
          <ButtonContainer>
            <SliderBtn mode="prev" onClick={() => handleSlider(currentIndex - 1)} size={isRange ? 32 : 28} setEl={setPrevEl} />
            <SliderBtn mode="next" onClick={() => handleSlider(currentIndex)} size={isRange ? 32 : 28} setEl={setNextEl} />
          </ButtonContainer>
        </SliderActions>
        <BannerCard name={name} link={link} description={description} promotion={promotion} hasBadge={hasBadge} />
      </CardWrapper>
    </Wrapper>
  );
};

export default BannerSlider;

const Wrapper = styled.div`
  position: relative;

  padding-bottom: 188px;

  ${({ theme }) => theme.media.sm} {
    padding-bottom: 260px;
  }
`;

const Slide = styled.div<Pick<TBanner, 'images' | 'mobile_images'>>`
  padding-bottom: 75%;
  height: 100%;

  ${({ theme, images, mobile_images }) => css`
    background-image: url(${mobile_images ?? images});
    background-size: cover;
    background-position: center;

    ${theme.media.sm} {
      padding-bottom: 0;
      height: 380px;
      background-image: url(${images});
    }

    ${theme.media.md} {
      height: 430px;
    }

    ${theme.media.lg} {
      height: 480px;
    }

    ${theme.media.xl} {
      height: 530px;
    }
  `}
`;

const CardWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1024px;
  bottom: 32px;
  left: 50%;
  padding: 0 16px;
  transform: translateX(-50%);
  z-index: 1;

  ${({ theme }) => theme.media.sm} {
    bottom: 108px;
  }
`;

const SliderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 756px;
  margin-bottom: 14px;

  ${({ theme }) => theme.media.sm} {
    margin-bottom: 24px;
  }
`;

const SliderStatus = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-right: auto;
`;

const SliderPagination = styled.div`
  display: flex;
  margin-right: 16px;
  color: #fff;
  font-family: 'PT Serif', serif;
  font-style: italic;
  font-weight: 700;

  ${({ theme }) => css`
    ${theme.fontSizes.font12}

    letter-spacing: 2.434px;

    ${theme.media.sm} {
      ${theme.fontSizes.font20}

      letter-spacing: 1.835px;
    }
  `};
`;

const Progress = styled.div`
  width: 100%;
  margin-right: 60px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  overflow-x: hidden;

  ${({ theme }) => theme.media.sm} {
    max-width: 419px;
  }
`;

const ProgressBar = styled.div<{ slideIndex: number }>`
  height: 100%;
  transform: translateX(-100%);
  background-color: #fff;
  border-radius: 3px;
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 8px;

  ${({ theme }) => theme.media.sm} {
    column-gap: 20px;
  }
`;
