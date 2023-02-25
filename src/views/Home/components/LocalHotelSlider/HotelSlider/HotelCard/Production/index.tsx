import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import Price from './Price';
import TimeSaleBanner from '../TimeSaleBanner';
import { HOTEL_TYPE } from '@/consts';
import { IProductionCard } from '@/views/Home/types';

interface IProps extends IProductionCard {
  isRange: boolean;
}

const Production = ({ isRange, tags, name, star, type, timesale, price }: IProps) => {
  return (
    <>
      {isRange && timesale.length !== 0 && <TimeSaleBanner timesale={timesale[0]} />}
      <Container>
        {tags && tags.length > 0 && (
          <Labels>
            {tags?.map((tag, idx) => (
              <Label key={idx}>{tag}</Label>
            ))}
          </Labels>
        )}
        <Name>{name}</Name>
        <Grade>
          <Star src="/images/icons/ico-star.svg" alt="" />
          {star}성급
          <Vertical />
          {HOTEL_TYPE[type]}
        </Grade>
        <Horizontal />
        <Price price={price} />
      </Container>
    </>
  );
};

export default Production;

const Container = styled.div`
  width: 100%;
  margin-top: auto;

  ${({ theme }) => theme.media.lg} {
    max-width: 360px;
    margin-left: auto;
    margin-right: 45px;
  }

  ${({ theme }) => theme.media.xl} {
    max-width: 383px;
    margin-right: 72px;
  }
`;

const Labels = styled.ul`
  display: flex;
  column-gap: 4px;
  margin-bottom: 12px;
`;

const Label = styled.li`
  ${({ theme }) => theme.fontSizes.font12}

  color: #8d8d8d;
  padding: 2px 6px;
  border: 1px solid #b6b6b6;
  border-radius: 100px;
`;

const Name = styled.h3`
  font-weight: 700;

  ${({ theme }) => css`
    ${theme.fontSizes.font14}

    ${theme.media.lg} {
      ${theme.fontSizes.font18}

      margin-bottom: 12px;
    }
  `}
`;

const Grade = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
  color: #6e7378;

  ${({ theme }) => css`
    ${theme.fontSizes.font12}

    ${theme.media.lg} {
      column-gap: 3px;
    }
  `}
`;

const Star = styled.img`
  width: 12px;
  height: 12px;

  ${({ theme }) => theme.media.lg} {
    width: 16px;
    height: 16px;
  }
`;

const Vertical = styled.div`
  width: 1px;
  height: 10px;
  background-color: #6e7378;
`;

const Horizontal = styled.div`
  height: 1px;
  margin: 10px 0 11px;
  background-color: #6e7378;

  ${({ theme }) => theme.media.lg} {
    margin: 45px 0 14px;
  }
`;
