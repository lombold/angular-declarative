import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  Injector,
  input,
  inputBinding,
  output,
  outputBinding,
  signal,
  viewChild,
  ViewContainerRef,
} from "@angular/core";
import { Process, Step } from "./process.type";
import { ProcessService } from "./process.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: "app-process",
  imports: [],
  template: ` <div #processContainer></div> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessComponent<In, Out> implements AfterViewInit {
  public readonly process = input.required<Process<In, Out>>();
  public readonly input = input<In>();
  public readonly result = output<Out>();
  private readonly processService = inject(ProcessService);
  private readonly destoryRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private readonly processContainer = viewChild.required("processContainer", {
    read: ViewContainerRef,
  });

  public currentStepIndex = 0;
  public currentStepOutput = signal<unknown>(null);
  public currentStepValid = signal(false);

  ngAfterViewInit() {
    this.prechecks();
    this.setupProcess();
  }

  private prechecks() {
    if (!this.processContainer()) {
      throw new Error("Process container is not defined.");
    }
  }

  private setupProcess() {
    this.renderStep(this.process().at(0));
    this.processService
      .getNext()
      .pipe(takeUntilDestroyed(this.destoryRef))
      .subscribe(() => {
        this.next();
      });

    this.processService
      .getPrevious()
      .pipe(takeUntilDestroyed(this.destoryRef))
      .subscribe(() => {
        this.previous();
      });

    effect(
      () => {
        this.processService.setNextButton({
          disabled: !this.currentStepValid(),
        });
      },
      {
        injector: this.injector,
      },
    );
  }

  private next() {
    const currentStep = this.process().at(this.currentStepIndex);
    const nextStep = this.process().at(this.currentStepIndex + 1);
    if (currentStep && nextStep) {
      this.currentStepIndex++;
      currentStep.output = this.currentStepOutput();
      nextStep.input = this.currentStepOutput();
      this.renderStep(nextStep);
    } else {
      this.result.emit(this.currentStepOutput() as Out);
    }
  }

  private previous() {
    if (this.currentStepIndex <= 0) {
      throw new Error("Cannot go back, already at the first step.");
    }
    this.currentStepIndex--;
    this.renderStep(this.process().at(this.currentStepIndex));
  }

  private renderStep(step?: Step<any, any>) {
    if (!step) {
      throw new Error("Step is not defined.");
    }

    console.log(
      `Rendering step: ${step.component.name} at index ${this.currentStepIndex}`,
    );
    this.processContainer().clear();
    this.processContainer()?.createComponent(step.component, {
      bindings: [
        inputBinding("input", () => step.input),
        outputBinding("output", (stepOut: unknown) =>
          this.currentStepOutput.set(stepOut),
        ),
        outputBinding("valid", (isValid: boolean) =>
          this.currentStepValid.set(isValid),
        ),
      ],
    });
  }
}
