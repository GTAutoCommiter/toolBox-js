/**
 * Iterate over an object's properties
 */
export function iteratorObj(
  obj: any,
  fn: (key: string, value: any) => void,
): void {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      fn(key, obj[key]);
    }
  }
}

export default iteratorObj;
