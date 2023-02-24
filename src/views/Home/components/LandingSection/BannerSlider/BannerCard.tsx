import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { TBanner } from '@/api/types/home';
import TLink from '@/components/TLink';
import { notoSerifKr } from '@/styles/fonts';

interface IProps extends Pick<TBanner, 'name' | 'link' | 'description' | 'promotion'> {
  hasBadge: boolean;
}

const BannerCard = ({ name, link, description, promotion, hasBadge = false }: IProps) => {
  return (
    <TLink href={link}>
      <Container>
        <CardName>{name}</CardName>
        <Description>{description}</Description>
        <Wrapper>
          <Promotion>{promotion}</Promotion>
          <BtnWrapper>
            <source srcSet="/images/icons/ico-btn-go.svg" media="(min-width: 576px)" width={66} height={28} />
            <img src="/images/icons/ico-btn-go-m.svg" alt="" width={50} height={24} />
          </BtnWrapper>
        </Wrapper>
      </Container>
    </TLink>
  );
};

export default BannerCard;

const Container = styled.a`
  display: flex;
  flex-direction: column;
  padding: 33px 24px 24px;
  background-color: #fff;
  box-shadow: 4px 4px 10px 10px rgba(163, 162, 161, 0.2);

  ${({ theme }) => theme.media.sm} {
    padding: 31px 32px 28px 40px;
    box-shadow: 4px 4px 20px rgba(48, 55, 63, 0.2);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardName = styled.h3`
  font-family: ${notoSerifKr.style.fontFamily};
  color: #30373f;

  ${({ theme }) => css`
    ${theme.fontSizes.font12}

    margin-bottom: 14px;

    ${theme.media.sm} {
      ${theme.fontSizes.font18}

      margin-bottom: 2px;
    }
  `};
`;

const Description = styled.p`
  font-family: ${notoSerifKr.style.fontFamily};
  color: #30373f;
  font-weight: 600;
  word-break: keep-all;

  ${({ theme }) => css`
    ${theme.fontSizes.font18}

    margin-bottom: 33px;

    ${theme.media.sm} {
      ${theme.fontSizes.font32}

      margin-bottom: 15px;
    }
  `};
`;
const Promotion = styled.strong`
  color: #0d5e49;
  font-weight: 700;

  ${({ theme }) => css`
    ${theme.fontSizes.font12}

    ${theme.media.sm} {
      ${theme.fontSizes.font18}
    }
  `};
`;

const BtnWrapper = styled.picture`
  display: flex;
`;
