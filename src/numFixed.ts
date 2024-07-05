/**
 * @func 指定小数位进行四舍五入
 * @desc 解决 Number.toFixed 计算错误
 * @param {number} num  数值
 * @param {number} precision 精度，默认 2
 * @return {number}  小数位四舍五入的数
 */
function numFixed(num, precision = 2) {
  num = Number(num)
  const scale = 10 ** precision
  return Math.round(num * scale) / scale
}
export default numFixed;