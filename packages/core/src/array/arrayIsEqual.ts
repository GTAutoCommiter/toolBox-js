/**
 * Check if two arrays contain the same elements (order independent)
 */
export function arrayIsEqual<T>(arr1: T[], arr2: T[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const countMap = new Map<T, number>();

  // Count elements in the first array
  for (const item of arr1) {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  }

  // Compare second array with the count
  for (const item of arr2) {
    const val = countMap.get(item);
    if (val === undefined || val <= 0) {
      return false;
    }
    countMap.set(item, val - 1);
  }

  return true;
}

export default arrayIsEqual;
