/**
 * Create a matrix (2D array)
 * @param row - Number of rows
 * @param column - Number of columns
 * @returns A 2D array initialized with null
 */
export function createMatrix<T = any>(
  row: number = 1,
  column: number = 1,
): (T | null)[][] {
  return Array.from({ length: column }, () => Array(row).fill(null));
}

export default createMatrix;
