import { average, clamp } from '../../src/utils/math.js';

describe('utils/math', () => {
  test.each([
    [5, 0, 10, 5],
    [-5, 0, 10, 0],
    [15, 0, 10, 10]
  ])('clamp %i into [%i,%i] => %i', (value, min, max, expected) => {
    expect(clamp(value, min, max)).toBe(expected);
  });

  test('clamp throws on invalid bounds', () => {
    expect(() => clamp(5, 10, 0)).toThrow('min must be <= max');
  });

  test('average calculates the mean', () => {
    expect(average([1, 2, 3, 4])).toBe(2.5);
  });

  test('average throws on empty list', () => {
    expect(() => average([])).toThrow('values must not be empty');
  });
});
