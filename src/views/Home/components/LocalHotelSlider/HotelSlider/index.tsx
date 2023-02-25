import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Navigation, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import HotelCard from './HotelCard';
import { TCatalog } from '@/api/types/home';
import SliderBtn from '@/components/SliderBtn';
import 'swiper/css';
import 'swiper/css/virtual';
import { localHotelCategoryState, localHotelCurrentIdxState } from '@/views/Home/store';

const HotelSlider = ({ items }: Pick<TCatalog, 'items'>) => {
  const hotelSize = items.length;
  const localHotelCategory = useRecoilValue(localHotelCategoryState);
  const [localHotelCurrentIdx, setLocalHotelCurrentIdx] = useRecoilState(localHotelCurrentIdxState);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    return () => setLocalHotelCurrentIdx(0);
  }, []);

  return (
    <Wrapper>
      <Swiper
        key={localHotelCategory}
        spaceBetween={50}
        centeredSlides
        onSlideChange={swiper => setLocalHotelCurrentIdx(swiper.realIndex)}
        navigation={{ prevEl, nextEl }}
        modules={[Navigation, Virtual]}
        virtual
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <HotelCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <PaginationContainer>
        <SliderBtn mode="prev" size={32} setEl={setPrevEl} isDisable={localHotelCurrentIdx === 0} />
        <Pagination>
          {localHotelCurrentIdx + 1} / {hotelSize}
        </Pagination>
        <SliderBtn mode="next" size={32} setEl={setNextEl} isDisable={localHotelCurrentIdx === hotelSize} />
      </PaginationContainer>
    </Wrapper>
  );
};

export default HotelSlider;

const Wrapper = styled.div`
  width: 100%;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 12px;
  margin-top: 24px;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  ${({ theme }) => css`
    ${theme.fontSizes.font14}

    width: 50px;

    ${theme.media.sm} {
      ${theme.fontSizes.font20}

      width: 80px;
    }
  `}
`;
