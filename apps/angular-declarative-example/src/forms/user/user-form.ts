import { ADForm } from '@lombold/angular-form-engine';
import { Validators } from '@angular/forms';
import { User, UserType } from './user';

export const userForm: ADForm<User> = {
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
    {
      name: 'address',
      type: 'group',
      fields: [
        {
          name: 'street',
          label: 'Street',
          type: 'text',
          value: '',
          validation: { additionalValidators: [Validators.required] },
        },
        {
          name: 'plz',
          label: 'PLZ',
          type: 'number',
          value: '',
          validation: { additionalValidators: [Validators.required] },
        },
        {
          name: 'city',
          label: 'City',
          type: 'text',
          value: '',
          validation: { additionalValidators: [Validators.required] },
        },
      ],
    },
    {
      name: 'userType',
      label: 'Type',
      type: 'select',
      value: UserType.User,
      options: [
        { label: 'Admin', value: UserType.Admin },
        { label: 'User', value: UserType.User },
        { label: 'Guest', value: UserType.Guest },
      ],
      validation: { additionalValidators: [Validators.required] },
    },
  ],
  submitButtonText: 'Submit',
};
