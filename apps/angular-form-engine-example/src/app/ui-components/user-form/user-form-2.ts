import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { FormComponent } from '../../../../../../libs/form-engine/src/lib/angular-form-engine/ui-components/form/form.component';
import { ADForm } from '../../../../../../libs/form-engine/src/lib/angular-form-engine/form.type';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, FormComponent],
  template: `
    <ad-form [form]="userForm" />
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserForm {
  public user = input.required<User>();

  protected readonly userForm: ADForm = {
    title: 'User Form',
    fields: [
      {
        name: 'username',
        label: 'Username',
        type: 'text',
        value: '',
        validation: { additionalValidators: [Validators.required] },
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        value: '',
        validation: { additionalValidators: [Validators.required, Validators.email] },
      },
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        value: '',
        validation: { additionalValidators: [Validators.required] },
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        value: '',
        validation: { additionalValidators: [Validators.required] },
      },
    ],
    submitButtonText: 'Submit',
  };

  protected readonly userForm2 = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
  });

  submit() {
    // if (this.userForm.valid) {
    //   alert('Form Submitted!' + JSON.stringify(this.userForm.value));
    // }
  }
}
