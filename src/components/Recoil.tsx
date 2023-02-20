import React, { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

const Recoil = ({ children }: PropsWithChildren) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Recoil;
