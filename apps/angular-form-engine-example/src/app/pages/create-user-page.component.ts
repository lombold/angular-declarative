import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User, UserType } from '../model/user';
import { UserFormComponent } from '../ui-components/user-form/user-form.component';

@Component({
  selector: 'app-create-user-page',
  imports: [UserFormComponent],
  template: ` <app-user-form [user]="DEFAULT_USER" /> `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserPageComponent {
  protected readonly DEFAULT_USER: User = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    userType: UserType.Guest,
  };
}
