import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';
import Header from './Header';
import MobileNavigation from './MobileNavigation';
import useMediaQuery from '@/hooks/useMediaQuery';

const GlobalLayout = ({ children }: PropsWithChildren) => {
  const { isRange } = useMediaQuery('sm');

  return (
    <>
      <Header />
      <Layout>{children}</Layout>
      {!isRange && <MobileNavigation />}
    </>
  );
};

export default GlobalLayout;

const Layout = styled.main`
  padding-bottom: 48px;
  padding-bottom: calc(constant(safe-area-inset-bottom) + 48px);
  padding-bottom: calc(env(safe-area-inset-bottom) + 48px);

  ${({ theme }) => theme.media.sm} {
    padding: 0;
  }
`;
