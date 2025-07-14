export function nullsToEmpty<T extends object>(obj: T): {
  [K in keyof T]: T[K] | '';
} {
  const result: Partial<Record<keyof T, T[keyof T] | ''>> = {};

  for (const key in obj) {
    result[key] = obj[key] ?? '';
  }

  return result as { [K in keyof T]: T[K] | '' };
}

export default nullsToEmpty;