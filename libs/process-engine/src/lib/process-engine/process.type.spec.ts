import { Process, Step } from './process.type';
import { describe, it, expect } from 'vitest';
describe('Process Types', () => {
  it('should define a valid Process type', () => {
    const step1: Step<string, number> = {
      // @ts-expect-error test purpose, component is not defined
      component: class {},
      input: 'input',
      output: 42,
    };

    const process: Process<string, number> = [step1] as unknown as Process<string, number>;
    expect(process).toHaveLength(1);
  });
});
import { ProcessButton } from './process-button.type';

describe('ProcessButton Type', () => {
  it('should allow creating a valid ProcessButton object', () => {
    const button: ProcessButton = {
      label: 'Click Me',
      disabled: false,
      onClick: () => console.log('Button clicked!'),
    };

    expect(button.label).toBe('Click Me');
    expect(button.disabled).toBe(false);
    expect(button.onClick).toBeDefined();
  });
});
