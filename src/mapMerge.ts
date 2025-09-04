/**
 * @func map对象合并 
 */
const mapMerge = (mapObj, key, value, remappingFunction) => {
  if (!mapObj.has(key)) {
    mapObj.set(key, value);
    return value;
  }

  if (typeof remappingFunction === 'function') {
    const oldValue = mapObj.get(key);
    const curValue = remappingFunction(oldValue, value);
    mapObj.set(key, curValue);
  }

  return mapObj.get(key);
}

export default mapMerge;