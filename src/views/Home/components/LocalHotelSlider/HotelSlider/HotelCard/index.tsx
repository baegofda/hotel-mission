import styled from '@emotion/styled';
import React from 'react';
import CardThumbnail from './CardThumbnail';
import Production from './Production';
import { TCatalogItem } from '@/api/types/home';
import TLink from '@/components/TLink';
import useMediaQuery from '@/hooks/useMediaQuery';
import useProductionCard from '@/views/Home/hooks/useProductionCard';
import useThumbnail from '@/views/Home/hooks/useThumbnail';

export interface IProps {
  item: TCatalogItem;
}

const HotelCard = ({ item }: IProps) => {
  const { isRange } = useMediaQuery('lg');
  const { thumbnailProps } = useThumbnail(item);
  const { productionProps } = useProductionCard(item);

  return (
    <Wrapper>
      <TLink href={`/hotel/${item.hotel_id}`}>
        <Container>
          <CardThumbnail isRange={isRange} {...thumbnailProps} />
          <Production isRange={isRange} {...productionProps} />
        </Container>
      </TLink>
    </Wrapper>
  );
};

export default HotelCard;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1076px;
  margin: 32px auto 0;
  height: 336px;

  ${({ theme }) => theme.media.lg} {
    height: 328px;
  }
`;

const Container = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 16px 22px 16px;
  background-color: #fff;

  ${({ theme }) => theme.media.lg} {
    padding-right: 0;
    padding-bottom: 60px;
  }
`;
