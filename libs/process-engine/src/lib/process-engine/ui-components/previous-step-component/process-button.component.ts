import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { ProcessButton } from "../../process-button.type";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "button[appProcessButton]",
  imports: [],
  template: ` {{ button().label }} `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[disabled]": "button().disabled",
    "(click)": "button()?.onClick()",
  },
})
export class ProcessButtonComponent {
  public readonly button = input.required<ProcessButton>();
}
