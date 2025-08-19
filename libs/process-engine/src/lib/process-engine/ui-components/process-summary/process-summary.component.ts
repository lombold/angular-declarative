import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  output,
} from "@angular/core";
import { StepComponent } from "../../process.type";

@Component({
  selector: "app-process-summary",
  imports: [],
  template: `
    @if (isSimpleValue()) {
      {{ input() }}
    } @else {
      @for (pair of inputAsKeyValue(); track pair.key) {
        <div>
          <strong>{{ pair.key }}:</strong> {{ pair.value }}
        </div>
      }
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessSummaryComponent<In extends object>
  implements StepComponent<In, In>
{
  public readonly input = input.required<In>();
  public readonly output = output<In>();
  public readonly valid = output<boolean>();

  protected readonly isSimpleValue = computed(() => {
    return typeof this.input() === "string" || typeof this.input() === "number";
  });

  protected readonly inputAsKeyValue = computed(() =>
    this.mapInputToKeyValue(this.input()),
  );

  constructor() {
    effect(() => {
      this.output.emit(this.input());
    });
  }

  mapInputToKeyValue(input: In): { key: string; value: any }[] {
    return Object.entries(input).map(([key, value]) => ({
      key,
      value,
    }));
  }
}
