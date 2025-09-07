import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export type ADFormField<TValue, TName extends string> = ADBaseFormField<TValue, TName> &
  (ADTextFormField | ADSelectFormField<TValue>);

type ADBaseFormField<TValue, TName extends string> = {
  value: TValue;
  label: string;
  name: TName;
  placeholder?: string;
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
};

export type ADSelectFormField<TValue> = {
  type: 'select';
  options: ReadonlyArray<{ label: string; value: TValue }>;
};

export type TextInputTypes =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'tel'
  | 'url'
  | 'date'
  | 'checkbox'
  | 'radio'
  | 'select'
  | 'textarea'
  | 'custom';
