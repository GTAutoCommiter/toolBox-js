/**
 * @module cloneDeep
 * @description 深拷贝函数集合
 */

/**
 * 使用JSON序列化实现深拷贝。
 * 注意：此方法无法拷贝 `undefined`, `function`, `symbol` 等类型。
 * @param {any} val 需要深拷贝的值。
 * @returns {any} 深拷贝后的值。
 */
function byJSON(val) {
  const res = JSON.parse(JSON.stringify(val));
  return res;
}

/**
 * 使用递归实现深拷贝。
 * @param {any} obj 需要深拷贝的对象或值。
 * @returns {any} 深拷贝后的对象或值。
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