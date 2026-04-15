import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './math';

describe('math utils', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('should multiply two numbers', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  it('should divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('should handle division by zero', () => {
    expect(divide(10, 0)).toBe(Infinity); // This passes but is it correct?
  });
});
