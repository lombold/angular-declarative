import { describe, it, expect } from 'vitest';
import { process, step, summary } from './process';
import { ProcessSummaryComponent } from './ui-components/process-summary/process-summary.component';

describe('process utilities', () => {
  it('should create a process with steps', () => {
    const step1 = step(() => null);
    const step2 = step(() => null);
    const result = process(step1, step2);

    expect(result).toHaveLength(2);
  });

  it('should create a summary step', () => {
    const result = summary();
    expect(result.component).toBe(ProcessSummaryComponent);
  });
});
