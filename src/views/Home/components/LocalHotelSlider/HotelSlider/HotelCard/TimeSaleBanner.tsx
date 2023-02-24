import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { TTimesale } from '@/api/types/home';
import useRemainingTimer from '@/hooks/useRemainingTimer';

interface IProps {
  timesale: TTimesale;
}

const TimeSaleBanner = ({ timesale }: IProps) => {
  const { remaining, end_at, format } = timesale;
  const { remainingTime } = useRemainingTimer(end_at, format);

  return (
    <TimeSale>
      {remaining}
      <Time>{remainingTime}</Time>
    </TimeSale>
  );
};

export default TimeSaleBanner;

const TimeSale = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #03936e;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    margin-right: 5px;
    background: url('/images/icons/ico-time.svg') no-repeat center/cover;

    ${({ theme }) => theme.media.lg} {
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
  }

  ${({ theme }) => css`
    ${theme.fontSizes.font12}

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 6px 12px;

    ${theme.media.lg} {
      position: static;
      margin-left: 533px;
      padding: 8px 16px;
    }
  `}
`;

const Time = styled.time`
  margin-left: auto;
  font-weight: 700;
`;
