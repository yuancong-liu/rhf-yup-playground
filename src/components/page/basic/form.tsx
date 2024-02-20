'use client';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { BasicFormType, basicFormDefaultValues, basicFormSchema } from '@/app/hooks/basic/useBasic';
import { Form } from '@/components/common/form/form';
import { Input } from '@/components/common/form/input';
import { Container } from '@/components/common/layout/container';
import { Button } from '@/components/common/operables/button';

export const BasicForm = () => {
  const formReturn = useForm<BasicFormType>({
    defaultValues: basicFormDefaultValues,
    mode: 'onSubmit',
    shouldFocusError: true,
    resolver: yupResolver(basicFormSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form formReturn={formReturn} onSubmit={onSubmit}>
      <Container direction="flex-col">
        <Input label="First name" name="firstName" />
        <Input label="Last name" name="lastName" />
      </Container>
      <Container>
        <Button variant="secondary">Back</Button>
        <Button type="submit">Submit</Button>
      </Container>
    </Form>
  );
};
