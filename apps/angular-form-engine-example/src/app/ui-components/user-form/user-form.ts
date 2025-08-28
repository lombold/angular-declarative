import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, KeyValuePipe],
  template: `
    <form [formGroup]="userForm" (ngSubmit)="submit()">
      <div>
        <label for="username">Username</label>
        <input type="text" placeholder="username" [formControl]="userForm.controls.username" />
        @for (error of userForm.controls.username.errors | keyvalue; track error.key) {
        <span>{{ error.key }}</span>
        }
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" placeholder="email" [formControl]="userForm.controls.email" />
        @for (error of userForm.controls.email.errors | keyvalue; track error.key) {
        <span>{{ error.key }}</span>
        }
      </div>
      <div>
        <label for="firstName">First Name</label>
        <input type="text" placeholder="first name" [formControl]="userForm.controls.firstName" />
        @for (error of userForm.controls.firstName.errors | keyvalue; track error.key) {
        <span>{{ error.key }}</span>
        }
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <input type="text" placeholder="last name" [formControl]="userForm.controls.lastName" />
        @for (error of userForm.controls.lastName.errors | keyvalue; track error.key) {
        <span>{{ error.key }}</span>
        }
      </div>
      <button type="submit">Submit</button>
    </form>
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

  protected readonly userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
  });

  submit() {
    if (this.userForm.valid) {
      alert('Form Submitted!' + JSON.stringify(this.userForm.value));
    }
  }
}
