import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  direction?: 'flex-row' | 'flex-col';
  gap?: 'gap-0' | 'gap-1' | 'gap-2' | 'gap-3' | 'gap-4';
};

export const Container = ({
  children,
  direction = 'flex-row',
  gap = 'gap-2',
}: Props) => {
  return <div className={`flex w-full ${direction} ${gap}`}>{children}</div>;
};
