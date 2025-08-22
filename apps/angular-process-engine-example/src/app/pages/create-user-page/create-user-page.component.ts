import { ChangeDetectionStrategy, Component } from "@angular/core";
import { createUserProcess } from "../../processes/user-create-process/user-create.process";
import { LinearProcessContainerComponent } from '@lombold/angular-process-engine';

@Component({
  selector: "app-create-user-page",
  imports: [LinearProcessContainerComponent],
  template: ` <app-linear-process-container [process]="createUserProcess" />`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserPageComponent {
  protected readonly createUserProcess = createUserProcess;
}
