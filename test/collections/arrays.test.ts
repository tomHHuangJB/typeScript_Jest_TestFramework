import { groupBy, sumBy, uniqueNumbers } from '../../src/collections/arrays.js';

describe('collections/arrays', () => {
  test('uniqueNumbers removes duplicates while keeping order', () => {
    expect(uniqueNumbers([3, 1, 3, 2, 1])).toEqual([3, 1, 2]);
  });

  test('groupBy groups items by key', () => {
    const items = ['alpha', 'beta', 'apple', 'bloom'];
    const grouped = groupBy(items, (item) => (item.startsWith('a') ? 'a' : 'b'));
    expect(grouped.a).toEqual(['alpha', 'apple']);
    expect(grouped.b).toEqual(['beta', 'bloom']);
  });

  test('sumBy aggregates selected values', () => {
    const rows = [{ duration: 5 }, { duration: 7 }, { duration: 3 }];
    expect(sumBy(rows, (row) => row.duration)).toBe(15);
  });
});
