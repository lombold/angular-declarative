import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from "@angular/core";
import { Process } from "../../process.type";
import { ProcessComponent } from "../../process.component";
import { ProcessService } from "../../process.service";
import { AsyncPipe } from "@angular/common";
import { ProcessButtonComponent } from "../previous-step-component/process-button.component";

@Component({
  selector: "app-linear-process-container",
  imports: [ProcessComponent, AsyncPipe, ProcessButtonComponent],
  template: `
    <div class="fit-content flex flex-col gap-1">
      <app-process [process]="process()" />
      <div class="flex flex-row justify-between">
        @if (processService.getPreviousButton() | async; as previousButton) {
          <button appProcessButton [button]="previousButton">asdf</button>
        }
        @if (processService.getNextButton() | async; as nextButton) {
          <button appProcessButton [button]="nextButton">asdf</button>
        }
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProcessService],
})
export class LinearProcessContainerComponent {
  public readonly process = input.required<Process<unknown, unknown>>();
  protected readonly processService = inject(ProcessService);
}
