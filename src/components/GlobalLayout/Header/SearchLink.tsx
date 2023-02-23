import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import TLink from '@/components/TLink';

interface IProps {
  isRange: boolean;
}

const SearchLink = ({ isRange }: IProps) => {
  return (
    <TLink href={'/search'}>
      <LinkWrapper>
        <SearchIcon src="/images/icons/ico-search.svg" alt="" />
        {isRange ? '호텔 검색' : '원하는 호텔 찾기'}
      </LinkWrapper>
    </TLink>
  );
};

export default SearchLink;

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  color: #6e7378;
  background-color: #ededed;
  border-radius: 22px;
  flex-grow: 1;
  margin-left: auto;

  ${({ theme }) => css`
    ${theme.fontSizes.font16}

    ${theme.media.sm} {
      ${theme.fontSizes.font18}

      flex-grow: 0;
      justify-content: start;
      padding: 8px 40px 8px 28px;
    }
  `};
`;

const SearchIcon = styled.img`
  ${({ theme }) => css`
    width: 16px;
    margin-right: 4px;

    ${theme.media.sm} {
      width: 24px;
      margin-right: 12px;
    }
  `};
`;
