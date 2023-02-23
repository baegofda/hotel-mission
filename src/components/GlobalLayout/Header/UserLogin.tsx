import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import TLink from '@/components/TLink';
import { SrOnly } from '@/styles/utils';

interface IProps {
  isRange: boolean;
}

const UserLogin = ({ isRange }: IProps) => {
  const isLogin = true;

  const content = useMemo(() => {
    const isUpdated = true;
    const isVisisbleBadge = isLogin && isUpdated;

    if (isRange) {
      return (
        <LoginText isUpdated={isVisisbleBadge}>
          {isLogin ? (
            <>
              마이페이지
              {isUpdated && <SrOnly>업데이트된 정보가 있어요.</SrOnly>}
            </>
          ) : (
            '로그인'
          )}
        </LoginText>
      );
    }

    return (
      <LinkWrapper>
        <img src="/images/icons/ico-profile.svg" alt={isLogin ? '내 정보 확인하기' : '로그인하기'} width={24} height={24} />
        {isVisisbleBadge && (
          <Updated>
            <SrOnly>업데이트된 정보가 있어요.</SrOnly>
          </Updated>
        )}
      </LinkWrapper>
    );
  }, [isRange, isLogin]);

  return <TLink href={isLogin ? '/mypage' : '/auth/login'}>{content}</TLink>;
};

export default UserLogin;

const LinkWrapper = styled.a`
  position: relative;
  display: flex;
`;

const Updated = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  top: 0;
  right: 0;
  background-color: #da5542;
  border-radius: 50%;
`;

const LoginText = styled.a<{ isUpdated: boolean }>`
  color: #30373f;
  font-weight: 700;
  transition: color 100ms linear 0s;

  ${({ theme }) => css`
    ${theme.fontSizes.font18}

    ${theme.media.sm} {
      flex-grow: 0;
      justify-content: start;
    }
  `}

  ${({ isUpdated }) =>
    isUpdated &&
    css`
      position: relative;

      &::after {
        content: '';
        position: absolute;
        display: inline-block;
        top: -7px;
        right: -8px;
        width: 16px;
        height: 16px;
        background: url('/images/icons/ico-badge.svg') no-repeat center/cover;
      }
    `}

  &:hover {
    color: rgb(193, 164, 133);
  }
`;
