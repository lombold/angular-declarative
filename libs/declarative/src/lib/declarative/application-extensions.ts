import { ObservableInput } from 'rxjs';
import { ADForm } from '@lombold/angular-form-engine';
import { Page } from '@lombold/angular-page-engine';
import { AutoFormComponent } from './ui-components/auto-form.component';

export type SubmitFunction<T> = (value: T) => ObservableInput<unknown>;

export function formPage<T>(title: string, form: ADForm<T>, submitFn: SubmitFunction<T>): Page {
  return {
    title,
    component: AutoFormComponent<T>,
    data: {
      title,
      form,
      submitFn,
    },
  };
}
