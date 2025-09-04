/**
 * 根据对象的值对对象的键进行分组。
 * @param {object} obj The object to group.
 * @returns {object} 一个以原对象的value为键，原对象的key组成的数组为值的对象。
 */
function groupByValue(obj) {
  const res = Object.entries(obj).reduce((acc, [key, val]) => {
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});
  return res;
}
export default groupByValue;
