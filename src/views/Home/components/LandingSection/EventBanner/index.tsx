import { css } from '@emotion/react';
import styled from '@emotion/styled';

const EventBanner = () => {
  const onClickBanner = () => {
    console.log('onModal');
  };

  return (
    <Wrapper type="button" onClick={onClickBanner}>
      <Container>
        <Content>
          <Text>
            평일<span> 또는 주말</span>에만
            <br />
            호텔 롱스테이 해보세요
          </Text>
          <Event>
            5만원 할인 받기 <img src="/images/icons/ico-angle.svg" alt="" width={24} height={24} />
          </Event>
        </Content>
        <BannerImgWrapper>
          <source srcSet="/images/main/coupon.png" media="(min-width: 576px)" />
          <BannerImg src="/images/main/coupon-m.png" alt="" />
        </BannerImgWrapper>
      </Container>
    </Wrapper>
  );
};

export default EventBanner;

const Wrapper = styled.button`
  width: 100%;
  background-color: #ededed;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px 24px;
  color: #30373f;
  text-align: left;

  ${({ theme }) => theme.media.md} {
    padding-left: 56px;
    padding-right: 56px;
  }

  ${({ theme }) => theme.media.xl} {
    padding: 40px 56px;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 0;
  }
`;

const Content = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Text = styled.span`
  ${({ theme }) => theme.fontSizes.font16}

  font-family: 'Noto Serif KR', serif;
  font-weight: 700;
  margin-bottom: 16px;

  span {
    display: none;
  }

  ${({ theme }) => css`
    ${theme.media.sm} {
      ${theme.fontSizes.font32}

      font-weight: 600;
      margin-bottom: 24px;

      span {
        display: inline;
      }
    }
  `}
`;

const Event = styled.strong`
  ${({ theme }) => theme.fontSizes.font14}

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 16px 3px 24px;

  color: #fff;
  background-color: #03936e;
  border-radius: 100px;

  img {
    max-width: 16px;
    height: auto;
    margin-left: 8px;
  }

  ${({ theme }) => css`
    ${theme.media.sm} {
      ${theme.fontSizes.font20}

      padding-top: 8px;
      padding-bottom: 8px;

      img {
        max-width: 100%;
      }
    }
  `}
`;

const BannerImgWrapper = styled.picture`
  display: flex;
`;

const BannerImg = styled.img`
  max-width: 122px;
  height: auto;

  ${({ theme }) => theme.media.sm} {
    max-width: 200px;
  }

  ${({ theme }) => theme.media.md} {
    max-width: 225px;
  }

  ${({ theme }) => theme.media.xl} {
    position: absolute;
    max-width: 100%;
    right: -85px;
    bottom: -23px;
  }
`;
