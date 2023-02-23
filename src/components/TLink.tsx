import NextLink, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

const TLink = ({ href, children, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <NextLink href={href} legacyBehavior passHref={true} {...props}>
      {children}
    </NextLink>
  );
};

export default TLink;
