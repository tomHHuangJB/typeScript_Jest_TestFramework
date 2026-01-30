export const uniqueNumbers = (values: number[]): number[] =>
  Array.from(new Set(values));

export const groupBy = <T, K extends string>(items: T[], keyFn: (item: T) => K): Record<K, T[]> => {
  return items.reduce((acc, item) => {
    const key = keyFn(item);
    if (!acc[key]) acc[key] = [] as T[];
    acc[key].push(item);
    return acc;
  }, {} as Record<K, T[]>);
};

export const sumBy = <T>(items: T[], selector: (item: T) => number): number =>
  items.reduce((sum, item) => sum + selector(item), 0);
