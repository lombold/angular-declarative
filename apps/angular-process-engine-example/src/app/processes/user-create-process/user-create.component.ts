import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from "@angular/core";
import { User } from "./user";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { map, switchMap } from "rxjs";
import { outputFromObservable, toObservable } from "@angular/core/rxjs-interop";
import { StepComponent } from '@lombold/angular-process-engine';

type UserForm = {
  [K in keyof User]: FormControl<User[K]>;
};

@Component({
  selector: "app-user-create",
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="userForm()">
      <div>
        <input
          type="text"
          formControlName="username"
          placeholder="Username"
          required
        />
      </div>
      <div>
        <input
          type="text"
          formControlName="firstName"
          placeholder="Firstname"
          required
        />
      </div>
      <div>
        <input
          type="text"
          formControlName="lastName"
          placeholder="Lastname"
          required
        />
      </div>
      <div>
        <input
          type="text"
          formControlName="email"
          placeholder="Email"
          required
        />
      </div>
    </form>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateComponent implements StepComponent<string, User> {
  public readonly input = input.required<string>();
  public readonly output = outputFromObservable<User>(
    toObservable(
      computed(() =>
        this.userForm().valueChanges.pipe(
          map(() => this.mapFormToUser(this.userForm())),
        ),
      ),
    ).pipe(switchMap((value) => value)),
  );
  public readonly valid = outputFromObservable(
    toObservable(
      computed(() =>
        this.userForm().statusChanges.pipe(map((status) => status === "VALID")),
      ),
    ).pipe(switchMap((status) => status)),
  );

  protected readonly userForm = computed(
    () =>
      new FormGroup<UserForm>({
        username: new FormControl(this.input(), {
          nonNullable: true,
          validators: [Validators.required],
        }),
        firstName: new FormControl("", {
          nonNullable: true,
          validators: [Validators.required],
        }),
        lastName: new FormControl("", {
          nonNullable: true,
          validators: [Validators.required],
        }),
        email: new FormControl("", { nonNullable: true }),
      }),
  );

  private mapFormToUser(form: FormGroup<UserForm>): User {
    return {
      ...form.getRawValue(),
    };
  }
}
