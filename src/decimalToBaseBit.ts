const decimalToBaseBit = (decimal, bit = 10) => {
  let base = bit;
  if (bit > 62) base = 62;
  if (bit < 1) base = 2;
  
  const digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = []

  while (decimal > 0) {
    const remainder = decimal % base // 取余

    result.push(digits[remainder]) // 将余数真正对应62进制字符存入数组

    decimal = Math.floor(decimal / base) // 计算商，用于下次计算
  }

  return result.reverse().join('') || '0' // 反转结果
}
export default decimalToBaseBit;