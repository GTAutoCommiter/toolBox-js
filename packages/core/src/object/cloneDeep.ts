/**
 * Deep clone an object or array
 */
export const cloneDeep = {
  /**
   * Deep clone using JSON serialization
   * Note: Cannot clone undefined, function, symbol, etc.
   */
  byJSON<T>(val: T): T {
    return JSON.parse(JSON.stringify(val));
  },

  /**
   * Deep clone using recursion
   */
  byRecursive<T>(obj: T): T {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }

    const cloneObj: any = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        cloneObj[key] =
          (obj as any)[key] && typeof (obj as any)[key] === "object"
            ? this.byRecursive((obj as any)[key])
            : (obj as any)[key];
      }
    }
    return cloneObj;
  },
};

export default cloneDeep;
