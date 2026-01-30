import { average, clamp } from '../../src/modules/index.js';

describe('modules/index', () => {
  test('exports are available from barrel', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(average([2, 4, 6])).toBe(4);
  });
});
