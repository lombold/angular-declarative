import { ADFormField } from './input.type';

export type ADForm<TValue> = {
  title: string;
  description?: string;
  fields: ReadonlyArray<ADFormField<TValue[keyof TValue], Extract<keyof TValue, string>>>;
  submitButtonText?: string;
};
