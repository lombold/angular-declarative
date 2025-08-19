import { InputSignal, OutputRef, Type } from "@angular/core";

export type Process<In, Out> = [
  Step<In, unknown>,
  ...Step<unknown, unknown>[],
  Step<unknown, Out>,
];

export type Step<In, Out> = {
  component: Type<StepComponent<In, Out>>;
  input: In | undefined;
  output: Out | undefined;
};

export interface StepComponent<In, Out> {
  readonly input: InputSignal<In>;
  readonly output: OutputRef<Out>;
  readonly valid: OutputRef<boolean>;
}
