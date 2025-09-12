import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export type ADFormField<TValue, TName extends string> =
  | ADFormGroup<TValue, TName>
  | (ADBaseFormField<TValue, TName> & (ADTextFormField | ADSelectFormField<TValue>));

type ADBaseFormField<TValue, TName extends string> = {
  value: TValue;
  label: string;
  name: TName;
  validation?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    additionalValidators?: Array<ValidatorFn>;
    additionalAsyncValidators?: Array<AsyncValidatorFn>;
  };
};

export type ADTextFormField = {
  type: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url';
  placeholder?: string;
};

export type ADSelectFormField<TValue> = {
  type: 'select';
  options: ReadonlyArray<{ label: string; value: TValue }>;
};

export type ADFormGroup<TValue, TName extends string> = {
  type: 'group';
  name: TName;
  fields: ReadonlyArray<ADFormField<TValue[keyof TValue], Extract<keyof TValue, string>>>;
};

export type TextInputTypes = 'date' | 'checkbox' | 'radio' | 'textarea' | 'custom';
