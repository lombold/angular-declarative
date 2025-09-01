import { FormControl } from '@angular/forms';
import { ADForm } from './form.type';

export type ADFormValue<TFields extends ADForm> = {
  [K in TFields['fields'][number] as K['name']]: FormControl<K['value']>;
};
