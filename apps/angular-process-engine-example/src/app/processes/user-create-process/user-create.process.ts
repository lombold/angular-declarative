
import { UserCreateComponent } from "./user-create.component";
import { SelectUsernameComponent } from "./select-username.component";
import { summary, step, process } from '@lombold/angular-process-engine';

export const createUserProcess = process(
  step(SelectUsernameComponent),
  summary(),
  step(UserCreateComponent),
  summary(),
);
