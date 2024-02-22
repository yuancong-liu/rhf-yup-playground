import { ReactNode } from 'react';

import Link, { LinkProps } from 'next/link';

type Props = {
  children: ReactNode;
  href: LinkProps['href'];
};

export const Anchor = ({ children, href }: Props) => {
  return (
    <Link
      className="text-indigo-600 hover:font-semibold hover:underline hover:underline-offset-2"
      href={href}
    >
      {children}
    </Link>
  );
};
