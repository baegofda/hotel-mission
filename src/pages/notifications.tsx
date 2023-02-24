import { NextSeo } from 'next-seo';
import React from 'react';
import Dummy from '@/components/Dummy';
import useSeoTitle from '@/hooks/useSeoTitle';

const Notifications = () => {
  const { title } = useSeoTitle('마이페이지');

  return (
    <>
      <NextSeo title={title} />
      <Dummy name="알림 페이지" />
    </>
  );
};

export default Notifications;
