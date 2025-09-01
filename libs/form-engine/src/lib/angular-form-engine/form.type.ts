import { ADFormField } from './input.type';

export type ADForm = {
  title: string;
  description?: string;
  fields: ReadonlyArray<ADFormField<unknown, string>>;
  submitButtonText?: string;
};
