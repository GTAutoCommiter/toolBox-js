/**
 * @func 解决toFixed保留小数的问题;
 * @desc 
 * @param {}  
 * @return {} 
 */
const formatToFixed = (money, decimals = 2) => {
  return (
    Math.round(
      (parseFloat(money) + Number.EPSILON) * Math.pow(10, decimals)
    ) / Math.pow(10, decimals)
  ).toFixed(decimals);
}

/**
 * @func 格式化价格
 * @desc 格式化金额展示： 12341234.246 -> $ 12,341,234.25
 * @param {number} money 价格  
 * @param {string} symbol 符号
 * @param {number} decimals 保留小数 
 * @return {string} 格式化后的价格 
 */
const formatMoney = (money, symbol = "", decimals = 2) => {
  return formatToFixed(money, decimals).replace(/\B(?=(\d{3})+\b)/g, ",").replace(/^/, `${symbol}`)
}

const Format = {
  formatMoney,
};

export default Format;