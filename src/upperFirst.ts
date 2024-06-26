/**
 * @func 首字母大写
 * @desc 
 * @param {string} str 单词   
 * @return {string} 首字母大写处理的单词 
 */
function upperFirst(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return ''
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default upperFirst;