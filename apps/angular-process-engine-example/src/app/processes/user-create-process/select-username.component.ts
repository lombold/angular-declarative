import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from "@angular/core";
import { outputFromObservable } from "@angular/core/rxjs-interop";
import { of } from "rxjs";
import { StepComponent } from '@lombold/angular-process-engine';

@Component({
  selector: "app-select-username",
  imports: [],
  template: `<input
    #usernameInput
    type="text"
    placeholder="Enter username"
    (change)="output.emit(usernameInput.value)"
  />`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectUsernameComponent
  implements StepComponent<undefined, string>
{
  public readonly input = input.required<undefined>();
  public readonly output = output<string>();
  public readonly valid = outputFromObservable(of(true));
}
