import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { IProductionCard } from '@/views/Home/types';

const Price = ({ price }: Pick<IProductionCard, 'price'>) => {
  const { is_coupon, min_night_discount, min_night_sale_price, originTotalPrice, saleTotalPrice, hasPrice } = price;

  if (!hasPrice) {
    return (
      <DetailPrice>
        상세페이지에서 가격 확인
        <BtnImg src="/images/icons/ico-btn-go.svg" width={66} height={28} alt={''} />
      </DetailPrice>
    );
  }

  return (
    <>
      <Origin>
        정가<OriginPrice>{originTotalPrice.toLocaleString()}원</OriginPrice>
        {is_coupon && <Coupon>적용 가능한 쿠폰이 있어요!</Coupon>}
      </Origin>
      <Sale>
        <DisCountRate>{min_night_discount}%</DisCountRate>
        <SalePrice>
          {saleTotalPrice.toLocaleString()}
          <Unit>원~</Unit>
        </SalePrice>
        <Text>| 1박 {min_night_sale_price.toLocaleString()}원부터</Text>
        <BtnImg src="/images/icons/ico-btn-go.svg" width={66} height={28} alt={''} />
      </Sale>
    </>
  );
};

export default Price;

const Origin = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  color: #30373f;

  ${({ theme }) => css`
    ${theme.fontSizes.font12}

    margin-bottom: 2px;

    ${theme.media.lg} {
      margin-bottom: 0;
    }
  `};
`;

const OriginPrice = styled.del`
  color: #616161;
`;

const Coupon = styled.div`
  color: #03936e;
  font-weight: 700;

  ${({ theme }) => css`
    ${theme.fontSizes.font10}

    ${theme.media.lg} {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 4px;
      margin-bottom: 0;
      padding: 2px 4px;
      background: #dcf1ec;
      border-radius: 4px;

      &::before {
        content: '';
        width: 16px;
        height: 16px;
        background: url('/images/icons/ico-discount.svg') no-repeat center/cover;
      }
    }
  `};
`;

const Sale = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

const DisCountRate = styled.span`
  ${({ theme }) => theme.fontSizes.font18}

  color: #da5542;
  font-weight: 700;
`;

const SalePrice = styled.ins`
  display: flex;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  text-decoration: none;

  ${({ theme }) => theme.media.lg} {
    line-height: 36px;
  }
`;

const Unit = styled.span`
  ${({ theme }) => theme.fontSizes.font14}

  display: flex;
  align-items: center;
  margin-left: 2px;
`;

const Text = styled.span`
  ${({ theme }) => theme.fontSizes.font12}

  color: #616161;
`;

const BtnImg = styled.img`
  display: none;

  ${({ theme }) => theme.media.lg} {
    display: block;
    margin-top: 8px;
    margin-left: auto;
  }
`;

const DetailPrice = styled.div`
  display: flex;
  align-items: flex-end;
  color: rgb(48, 55, 63);

  ${({ theme }) => css`
    ${theme.fontSizes.font12}

    margin-top: 32px;

    ${theme.media.lg} {
      ${theme.fontSizes.font14}
    }
  `}
`;
