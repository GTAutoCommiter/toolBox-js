/**
 * Merge values into a Map object
 */
export function mapMerge<K, V>(
  mapObj: Map<K, V>,
  key: K,
  value: V,
  remappingFunction?: (oldValue: V, newValue: V) => V,
): V {
  if (!mapObj.has(key)) {
    mapObj.set(key, value);
    return value;
  }

  if (typeof remappingFunction === "function") {
    const oldValue = mapObj.get(key)!;
    const curValue = remappingFunction(oldValue, value);
    mapObj.set(key, curValue);
  }

  return mapObj.get(key)!;
}

export default mapMerge;
