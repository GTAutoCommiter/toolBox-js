/**
 * Check if an object or value is empty
 */
export const isEmpty = (val: unknown): boolean => {
  if (val === null || val === undefined) return true;
  if (Array.isArray(val)) return val.length === 0;
  if (typeof val === "object") return Object.keys(val).length === 0;
  return !val;
};

export default isEmpty;
