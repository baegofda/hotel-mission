import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { TPrice } from '@/api/types/home';
import { IProductionCard } from '@/views/Home/types';

const Price = ({ price }: Pick<IProductionCard, 'price'>) => {
  const { is_coupon, is_price, min_night_discount, min_night_sale_price, originTotalPrice, saleTotalPrice, hasPrice } = price;
  const isVisibleCoupon = is_coupon || is_price;

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
        {isVisibleCoupon && <Coupon is_price={is_price}>{is_price ? <span>쿠폰 적용가</span> : <span>적용 가능한 쿠폰이 있어요!</span>}</Coupon>}
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

const Coupon = styled.div<Pick<TPrice, 'is_price'>>`
  ${({ theme }) => theme.fontSizes.font10}

  padding: 2px 4px;
  background: ${({ is_price }) => (is_price ? '#dcf1ec' : 'transparent')};
  border-radius: 4px;
  color: #03936e;
  font-weight: 700;

  ${({ is_price }) =>
    is_price &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 4px;

      &::before {
        content: '';
        width: 16px;
        height: 16px;
        background: url('/images/icons/ico-discount.svg') no-repeat center/cover;
      }
    `}
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
  margin-top: 32px;

  ${({ theme }) => css`
    ${theme.fontSizes.font12}

    ${theme.media.lg} {
      ${theme.fontSizes.font14}
    }
  `}
`;
