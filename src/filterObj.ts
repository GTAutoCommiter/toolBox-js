/**
 * @func 过滤指定key
 * @desc 
 * @param {}  
 * @return {} 
 */
const pick = (obj, arr) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => arr.includes(k)));


/**
 * @func 排除指定key
 * @desc 
 * @param {}  
 * @return {} 
 */
const omit = (obj, arr) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !arr.includes(k)));

const filterObj = {
  pick,
  omit,
}
export default filterObj;