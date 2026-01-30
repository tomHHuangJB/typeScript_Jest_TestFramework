import { Greeter, type Clock } from '../../src/oop/greeter.js';

describe('oop/greeter', () => {
  test.each([
    [9, 'Good morning'],
    [14, 'Good afternoon'],
    [20, 'Good evening']
  ])('greet returns %s for hour %i', (hour, expected) => {
    const clock: Clock = { now: () => new Date(2024, 1, 1, hour) };
    const greeter = new Greeter(clock);
    expect(greeter.greet('Tina')).toBe(`${expected}, Tina`);
  });
});
