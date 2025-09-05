/**
 * 根据对象的值对对象的键进行分组。
 * @param obj The object to group.
 * @returns 一个以原对象的value为键，原对象的key组成的数组为值的对象。
 */
function groupByValue(obj: Record<string, any>): Record<string, string[]> {
  return Object.entries(obj).reduce(
    (acc: Record<string, string[]>, [key, val]) => {
      const valueKey = String(val);
      acc[valueKey] = acc[valueKey] || [];
      acc[valueKey].push(key);
      return acc;
    },
    {},
  );
}
export default groupByValue;

