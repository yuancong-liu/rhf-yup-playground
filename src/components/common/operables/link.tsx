import { ReactNode } from 'react';

import { LinkProps } from 'next/link';

type Props = Omit<LinkProps, 'className'> & {
  children: ReactNode;
};

export const Link = ({ children, ...restProps }: Props) => {
  return <Link {...restProps}>{children}</Link>;
};
