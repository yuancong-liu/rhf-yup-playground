import { InferType, object, string } from "yup";

export const basicFormSchema = object({
  firstName: string().required(),
  lastName: string().required(),
})

export type BasicFormType = InferType<typeof basicFormSchema>;

export const basicFormDefaultValues: BasicFormType = {
  firstName: '',
  lastName: '',
} as const;
