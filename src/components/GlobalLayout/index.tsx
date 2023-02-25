import React, { PropsWithChildren } from 'react';
import Header from './Header';
import MobileNavigation from './MobileNavigation';
import useMediaQuery from '@/hooks/useMediaQuery';

const GlobalLayout = ({ children }: PropsWithChildren) => {
  const { isRange } = useMediaQuery('sm');

  return (
    <>
      <Header />
      <main>{children}</main>
      {!isRange && <MobileNavigation />}
    </>
  );
};

export default GlobalLayout;
