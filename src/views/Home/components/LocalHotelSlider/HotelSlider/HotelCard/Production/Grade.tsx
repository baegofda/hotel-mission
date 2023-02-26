import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import { TCatalogItem } from '@/api/types/home';
import { HOTEL_TYPE } from '@/consts';

const Grade = ({ star, type }: Pick<TCatalogItem, 'star' | 'type'>) => {
  const grade = useMemo(() => {
    if (type === 'hotel') {
      return (
        <>
          <Star src="/images/icons/ico-star.svg" alt="" />
          {star}성급
        </>
      );
    }

    if (type === 'residence') {
      return <img src="/images/icons/ico-residence.svg" alt="" width={16} height={16} />;
    }
  }, [star, type]);

  return (
    <Wrapper>
      {grade}
      <Vertical />
      {HOTEL_TYPE[type]}
    </Wrapper>
  );
};

export default Grade;

const Wrapper = styled.div`
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
