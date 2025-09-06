import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { ADForm, FormComponent } from '@lombold/angular-form-engine';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, FormComponent],
  template: ` <ad-form [form]="userForm" (formSubmit)="saveUser($event)" /> `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent {
  public user = input.required<User>();

  protected readonly userForm: ADForm<User> = {
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

  saveUser(user: User) {
    alert(JSON.stringify(user));
  }
}
