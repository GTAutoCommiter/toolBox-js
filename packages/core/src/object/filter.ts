/**
 * Filter object keys
 */

/**
 * Pick specified keys from an object
 */
export const pick = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> => {
  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => keys.includes(k as K)),
  ) as Pick<T, K>;
};

/**
 * Omit specified keys from an object
 */
export const omit = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> => {
  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => !keys.includes(k as K)),
  ) as Omit<T, K>;
};

const filter = {
  pick,
  omit,
};

export default filter;
