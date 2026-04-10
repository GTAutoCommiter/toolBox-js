/**
 * Capitalize the first letter of a string
 */
export function upperFirst(str: string): string {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default upperFirst;
