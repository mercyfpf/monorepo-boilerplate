import { describe, it, expect } from 'vitest';

describe('Initial Environment Test', () => {
  it('should pass if Vitest is configured correctly', () => {
    expect(1 + 1).toBe(2);
  });

  it('should verify ES modules are working', () => {
    const isESM = import.meta.url !== undefined;
    expect(isESM).toBe(true);
  });
});
