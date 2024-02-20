import { ReactNode } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

type Props<TFieldValues extends FieldValues = FieldValues> = {
  children: ReactNode;
  onSubmit: SubmitHandler<TFieldValues>;
  formReturn: UseFormReturn<TFieldValues>;
};

export const Form = <TFieldValues extends FieldValues = FieldValues>({
  onSubmit,
  formReturn,
  children,
}: Props<TFieldValues>) => {
  const { handleSubmit } = formReturn;

  return (
    <FormProvider {...(formReturn as UseFormReturn<FieldValues>)}>
      <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
