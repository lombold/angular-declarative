import { application, HeaderComponent } from '@lombold/angular-page-engine';
import { inject } from '@angular/core';
import { userForm } from './forms/user/user-form';
import { UserService } from './forms/user/user.service';
import { formPage } from '@lombold/angular-declarative';

application(
  HeaderComponent,
  formPage('Create User', userForm, (value) => inject(UserService).saveUser(value)),
).catch((reason) => console.log(reason));
