/**
 * @func 判断对象是否为空
 * @desc 
 * @param {}  
 * @return {} 
 */
const isEmpty = (val) => {
  return val === null || val === undefined || !Object.keys(val).length;
}

export default isEmpty;
