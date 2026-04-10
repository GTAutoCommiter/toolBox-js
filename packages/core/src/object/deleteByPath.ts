/**
 * Delete a property from an object using a path string or array
 * @param obj - The source object
 * @param path - The path to the property to delete (e.g., 'a.b.c' or ['a', 'b', 'c'])
 * @param splitStr - The character used to split the path string (default: '.')
 * @returns The modified source object (note: modifies object in place for the first level, shallow copies for deeper levels depending on implementation)
 */
export function deleteByPath(
  obj: any,
  path: string | string[],
  splitStr = ".",
): any {
  const curPath = Array.isArray(path) ? path : path?.split(splitStr);

  if (!curPath || curPath.length === 0) return obj;

  if (curPath.length === 1) {
    delete obj[curPath[0]];
    return obj;
  } else {
    const newObj = { ...obj };
    const lastKey = curPath[curPath.length - 1];
    let currentObj = newObj;
    for (let i = 0; i < curPath.length - 1; i++) {
      if (currentObj[curPath[i]]) {
        currentObj = currentObj[curPath[i]];
      } else {
        return newObj;
      }
    }
    delete currentObj[lastKey];
    return newObj;
  }
}

export default deleteByPath;
