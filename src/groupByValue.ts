/**
 * @func 收集相同值的key
 * @desc 
 * @param {}  
 * @return {} 
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