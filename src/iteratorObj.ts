/**
 * @func 可迭代对象
 * @desc 
 * @param {object} obj 目标对象
 * @return {object} 可直接迭代对象 
 */
function iteratorObj(obj) {
  Object.assign(obj, {
    [Symbol.iterator]() {
      let index = 0
      const keys = Object.keys(this)
      return {
        next() {
          if (index < keys.length) {
            return {
              done: false,
              value: obj[keys[index++]]
            }
          }
          return { done: true, value: undefined }
        }
      }
    }
  })
  return obj;
}
export default iteratorObj;