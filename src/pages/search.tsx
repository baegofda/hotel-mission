import { NextSeo } from 'next-seo';
import React from 'react';
import Dummy from '@/components/Dummy';
import useSeoTitle from '@/hooks/useSeoTitle';

const Search = () => {
  const { title } = useSeoTitle('롱스테이 호텔 검색하기');

  return (
    <>
      <NextSeo title={title} />
      <Dummy name="카테고리 페이지" />
    </>
  );
};

export default Search;
