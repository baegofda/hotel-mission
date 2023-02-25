import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import TimeSaleBanner from './TimeSaleBanner';
import { TThumbnail } from '@/views/Home/types';

const labelColor = ['#03936E', '#1A749E', '#73327A'];

interface IProps extends TThumbnail {
  isRange: boolean;
}

const CardThumbnail = ({ isRange, events, subway_station, image, timesale }: IProps) => {
  return (
    <Thumbnail>
      <ThumbnailImg src={image} alt="" />
      <ThumbnailContents>
        {events.length > 0 && (
          <Events>
            {events.map((event, idx) => (
              <Event key={idx} bgColor={labelColor[idx]}>
                {event}
              </Event>
            ))}
          </Events>
        )}
        <Subway>{subway_station}</Subway>
      </ThumbnailContents>
      {!isRange && timesale.length !== 0 && <TimeSaleBanner timesale={timesale[0]} />}
    </Thumbnail>
  );
};

export default CardThumbnail;

const Thumbnail = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: -32px;
  left: 12px;
  right: 12px;
  height: 180px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(39, 37, 37);
    z-index: 2;
    animation: maskAni 1s forwards;
    pointer-events: none;

    @keyframes maskAni {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }
  }

  &:hover img {
    transform: scale(110%);
  }

  ${({ theme }) => theme.media.lg} {
    left: 16px;
    right: 0;
    width: 533px;
    height: 344px;
  }
`;

const ThumbnailImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.2s cubic-bezier(0, 0, 0.5, 1);
`;

const ThumbnailContents = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  padding-right: 12px;
  padding-left: 16px;

  ${({ theme }) => theme.media.lg} {
    padding-left: 32px;
    align-items: flex-start;
  }
`;

const Events = styled.ul`
  display: flex;
`;

const Event = styled.li<{ bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  color: #fff;
  background-color: ${({ bgColor }) => bgColor};

  ${({ theme }) => css`
    ${theme.fontSizes.font12}

    padding: 2px 12px;

    ${theme.media.lg} {
      ${theme.fontSizes.font14}

      padding: 3px 16px;
    }
  `}
`;

const Subway = styled.span`
  color: rgba(255, 255, 255, 0.8);

  ${({ theme }) => css`
    ${theme.fontSizes.font10}

    ${theme.media.lg} {
      ${theme.fontSizes.font16}

      margin-top: 12px;
    }
  `}
`;
