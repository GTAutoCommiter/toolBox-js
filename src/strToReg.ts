import strIsReg from "./strIsReg";

/**
 * @func 正则字符串转正则表达式
 * @desc 
 * @param {string} str 字符串   
 * @return {RegExp} 正则表达式  
 */
function strToReg(str) {
  if (strIsReg(str)) {
    return eval(str);
  }
  throw ('this is not reg string!');
}
export default strToReg;