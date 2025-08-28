import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserForm } from '../ui-components/user-form/user-form';
import { User } from '../model/user';

@Component({
  selector: 'app-create-user-page',
  imports: [UserForm],
  template: ` <app-user-form [user]="DEFAULT_USER" />`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserPage {
  protected readonly DEFAULT_USER: User = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
  };
}
