export const clamp = (value: number, min: number, max: number): number => {
  if (min > max) throw new Error('min must be <= max');
  return Math.min(Math.max(value, min), max);
};

export const average = (values: number[]): number => {
  if (values.length === 0) throw new Error('values must not be empty');
  const total = values.reduce((sum, v) => sum + v, 0);
  return total / values.length;
};
