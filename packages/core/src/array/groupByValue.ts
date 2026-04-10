/**
 * Group object keys by their values
 * @param obj - The object to group
 * @returns An object where keys are values from the original object and values are arrays of corresponding keys
 */
export function groupByValue(
  obj: Record<string, any>,
): Record<string, string[]> {
  return Object.entries(obj).reduce(
    (acc: Record<string, string[]>, [key, val]) => {
      const valueKey = String(val);
      acc[valueKey] = acc[valueKey] || [];
      acc[valueKey].push(key);
      return acc;
    },
    {},
  );
}

export default groupByValue;
