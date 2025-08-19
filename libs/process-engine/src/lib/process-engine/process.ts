import { Process, Step, StepComponent } from "./process.type";
import { Type } from "@angular/core";
import { ProcessSummaryComponent } from "./ui-components/process-summary/process-summary.component";

export function process<In, Out, Steps extends Step<any, any>[]>(
  ...steps: Steps
): Process<In, Out> {
  return steps as unknown as Process<In, Out>;
}

export function summary(): Step<object, object> {
  return step(ProcessSummaryComponent);
}

export function step<In, Out>(
  component: Type<StepComponent<In, Out>>,
): Step<In, Out> {
  return {
    component,
    input: undefined,
    output: undefined,
  };
}
