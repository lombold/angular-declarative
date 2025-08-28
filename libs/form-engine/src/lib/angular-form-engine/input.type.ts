import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export type Input = {
  type: InputTypes;
  label: string;
  name: string;
  placeholder?: string;
  validation?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    additionalValidators?: ReadonlyArray<ValidatorFn>;
    additionalAsyncValidators?: ReadonlyArray<AsyncValidatorFn>;
  };
};

export type SelectInput = Input & {
  type: 'select';
  options: ReadonlyArray<{ label: string; value: string }>;
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
