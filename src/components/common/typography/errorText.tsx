import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const ErrorText = ({ children }: Props) => {
  return <p className="text-red-500">{children}</p>;
};
