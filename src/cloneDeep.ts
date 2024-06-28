/**
 * @func 深拷贝-JSON序列化实现
 * @desc 
 * @param {}  
 * @return {} 
 */
function byJSON(val) {
  const res = JSON.parse(JSON.stringify(val));
  return res;
}

/**
 * @func 深拷贝-递归实现
 * @desc 
 * @param {}  
 * @return {} 
 */
function byRecursive(obj) {
  let cloneObj = null //深拷贝之后的对象
  if (obj && typeof (obj) != "object") { //如果不是对象
    return obj
  }
  cloneObj = Array.isArray(obj) ? [] : {} //判断是对象还是数组
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] && typeof (obj[key]) == "object") { //判断对象的属性是不是object
        cloneObj[key] = byRecursive(obj[key])//mark1
      } else {
        cloneObj[key] = obj[key]//mark2
      }
    }
  }
  return cloneObj;
}

const cloneDeep = {
  byJSON,
  byRecursive
}

export default cloneDeep;