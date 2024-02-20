import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Title = ({ children }: Props) => {
  return <h1 className="my-8 text-5xl font-extrabold">{children}</h1>;
};
