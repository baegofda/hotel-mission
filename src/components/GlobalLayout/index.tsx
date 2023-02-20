import React, { PropsWithChildren } from 'react';
import Header from './Header';

const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default GlobalLayout;
