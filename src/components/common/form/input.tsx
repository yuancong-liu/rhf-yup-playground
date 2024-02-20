import { ComponentPropsWithRef, forwardRef } from 'react';
import { useController } from 'react-hook-form';

import { ErrorMessage } from '@hookform/error-message';

import { ErrorText } from '../typography/errorText';

type Props = Omit<ComponentPropsWithRef<'input'>, 'type' & 'className'> & {
  label: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, name = '', ...restProps }, _) => {
    const {
      field,
      formState: { errors },
    } = useController({ name });

    const invalid = !!errors[name];

    return (
      <div className="flex flex-col gap-1">
        <label className="font-semibold" htmlFor={name}>
          {label}
        </label>
        <input
          type="text"
          className={`min-h-9 w-full rounded border border-slate-300 bg-slate-50 px-2 py-1 ${invalid && 'border-red-400 bg-red-50'}`}
          id={name}
          {...field}
          {...restProps}
        />
        <ErrorText>
          <ErrorMessage errors={errors} name={name} />
        </ErrorText>
      </div>
    );
  },
);

Input.displayName = 'Input';
