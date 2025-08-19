import { describe, it, expect } from 'vitest';
import { ProcessService } from './process.service';

describe('ProcessService', () => {
  it('should emit next event when next is called', () => {
    const service = new ProcessService();
    let emitted = false;

    service.getNext().subscribe(() => {
      emitted = true;
    });

    service.next();
    expect(emitted).toBe(true);
  });

  it('should emit previous event when previous is called', () => {
    const service = new ProcessService();
    let emitted = false;

    service.getPrevious().subscribe(() => {
      emitted = true;
    });

    service.previous();
    expect(emitted).toBe(true);
  });
});
