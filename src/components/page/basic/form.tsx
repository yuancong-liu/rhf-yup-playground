'use client';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';

import { Form } from '@/components/common/form/form';
import { Input } from '@/components/common/form/input';
import { Container } from '@/components/common/layout/container';
import { Button } from '@/components/common/operables/button';
import {
  BasicFormType,
  basicFormDefaultValues,
  basicFormSchema,
} from '@/hooks/basic/useBasic';

export const BasicForm = () => {
  const router = useRouter();

  const formReturn = useForm<BasicFormType>({
    defaultValues: basicFormDefaultValues,
    mode: 'onSubmit',
    shouldFocusError: true,
    resolver: yupResolver(basicFormSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <Form formReturn={formReturn} onSubmit={onSubmit}>
      <Container direction="flex-col">
        <Input label="First name" name="firstName" />
        <Input label="Last name" name="lastName" />
      </Container>
      <Container>
        <Button variant="secondary" onClick={handleBack}>Back</Button>
        <Button type="submit">Submit</Button>
      </Container>
    </Form>
  );
};
