import { Input } from './input.type';

export type Form = {
  title: string;
  description?: string;
  fields: ReadonlyArray<Input>;
  submitButtonText?: string;
};