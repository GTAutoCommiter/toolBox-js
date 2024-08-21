/**
 * @func 不定进制转十进制 
 * @desc 
 * @param {string} 任意进制字符 
 * @param {string} 任意进制字符 
 * @return {number} 十进制数值 
 */
const baseBitToDecimal = (str, bit = 10) => {
  let base = bit
  if (bit > 62) base = 62;
  if (bit < 1) base = 2;
  const digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let len = str.length
  let sum = 0
  // 最后一位是0，倒数第二位是1...
  let n = 0
  while (len--) {
    // 获取当前位的10进制数，例如a表示10进制的10，b表示11，c表示12...
    let digit = digits.indexOf(str[len])
    sum += digit * Math.pow(base, n)
    n++
  }

  return sum
}

export default baseBitToDecimal;