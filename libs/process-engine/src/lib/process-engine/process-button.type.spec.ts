import { describe, it, expect } from 'vitest';
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
