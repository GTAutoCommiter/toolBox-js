/**
 * 判断两个数组是否含有相同的元素（不考虑顺序）。
 * @param {any[]} arr1 第一个数组。
 * @param {any[]} arr2 第二个数组。
 * @returns {boolean} 如果两个数组包含相同的元素，则返回true，否则返回false。
 */
function arrayIsEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const countMap = new Map();

  // 计数第一个数组的元素
  for (const item of arr1) {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  }

  // 比较第二个数组与计数
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