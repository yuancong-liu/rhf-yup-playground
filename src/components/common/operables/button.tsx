import { ComponentPropsWithRef, forwardRef } from 'react';

type Props = ComponentPropsWithRef<'button'> & {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ type = 'button', variant = 'primary', onClick, ...restProps }, ref) => {
    const variantClasses = {
      primary: 'bg-blue-500 hover:bg-blue-700',
      secondary: 'bg-gray-500 hover:bg-gray-700',
    };

    return (
      <button
        className={`w-full rounded px-4 py-2 text-white  hover:underline ${variantClasses[variant]}`}
        type={type}
        ref={ref}
        onClick={onClick}
        aria-label={`${restProps.children?.toString()} button`}
        {...restProps}
      />
    );
  },
);

Button.displayName = 'Button';
