import { Step } from "./process.type";

export type ValidChain<T extends Step<any, any>[]> = T extends [
  Step<infer I1, infer O1>,
  Step<infer I2, infer O2>,
  ...infer Rest,
]
  ? Rest extends Step<any, any>[]
    ? [O1] extends [I2]
      ? [Step<I1, O1>, ...ValidChain<[Step<I2, O2>, ...Rest]>]
      : never
    : never
  : T;
