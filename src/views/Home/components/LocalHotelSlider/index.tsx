import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { groupBy, keys } from 'lodash-es';
import React from 'react';
import { useRecoilState } from 'recoil';
import HotelSlider from './HotelSlider';
import LocalCategory from './LocalCategory';
import { localHotelCategoryState } from '../../store';
import { useGetHomeData } from '@/api/hooks/main';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import { ptSerif } from '@/styles/fonts';

const LocalHotelSlider = () => {
  const { data } = useGetHomeData();
  const [localHotelCategory, setLocalHotelCategory] = useRecoilState(localHotelCategoryState);
  const catalogs = groupBy(data?.catalogs, 'city');
  const categories = keys(catalogs);
  const catalog = catalogs[localHotelCategory === '' ? categories[0] : localHotelCategory];

  useIsomorphicLayoutEffect(() => {
    setLocalHotelCategory(categories[0]);

    return () => setLocalHotelCategory(categories[0]);
  }, []);

  return (
    <Wrapper>
      <h2 className="sr-only">지역별 호텔 한달살기</h2>
      <Header />
      <LocalCategory categories={categories} />
      <HotelSlider items={catalog[0]?.items} />
    </Wrapper>
  );
};

export default LocalHotelSlider;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 16px;
  background-color: #30373f;

  ${({ theme }) => theme.media.sm} {
    padding-top: 100px;
    padding-bottom: 48px;
  }
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 36px;
  max-width: 800px;
  margin-bottom: 32px;

  ${({ theme }) => theme.media.sm} {
    height: 60px;
    margin-bottom: 24px;
  }

  &::before {
    position: absolute;
    content: 'Local Hotels';
    left: 50%;
    padding: 0 100px;
    color: #fff;
    font-family: ${ptSerif.style.fontFamily};
    font-style: italic;
    white-space: nowrap;
    transform: translateX(-50%);
    background-color: #30373f;
    z-index: 1;

    ${({ theme }) => css`
      ${theme.fontSizes.font24}

      ${theme.media.sm} {
        ${theme.fontSizes.font40}
      }
    `}
  }

  &::after {
    display: none;
    position: absolute;
    content: '';
    top: 50%;
    width: 100%;
    height: 1px;
    transform: translateY(-50%);
    background-color: #fff;

    ${({ theme }) => theme.media.sm} {
      display: block;
    }
  }
`;
