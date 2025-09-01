import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export type ADFormField<TValue, TName extends string> = {
  type: InputTypes;
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

export type ADSelectFormField<TValue, TName extends string> = ADFormField<TValue, TName> & {
  type: 'select';
  options: ReadonlyArray<{ label: string; value: TValue }>;
};

export type InputTypes =
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
