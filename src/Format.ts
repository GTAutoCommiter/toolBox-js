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

/**
 * @func 摄氏度转华氏度
 * @desc 
 * @param {number} celsius 摄氏度  
 * @return {number} 华氏度 
 */
const celsiusToFahrenheit = (celsius) => celsius * 9 / 5 + 32

/**
 * @func 华氏度转摄氏度
 * @desc 
 * @param {number} fahrenheit 华氏度
 * @return {number} 摄氏度 
 */
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9

/**
 * @func 检查并得到正确的经纬度
 * @desc 
 * @param {string} lat 经度  
 * @param {string} long 纬度
 * @return {object}  
 */
export function LatAndLong(lat, long) {
  const res = {
    lat,
    long,
  }
  const latreg = /^(\-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/;
  const longrg = /^(\-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,6}|180)$/;
  const isRightLag = latreg.test(lat);
  const isRightLong = longrg.test(long);
  if (!isRightLag || !isRightLong) {
    res.lat = long;
    res.long = lat;
  };
  if (!latreg.test(res.lat)) {
    throw ('lat error');
  }
  if (!longrg.test(res.long)) {
    throw ('long error');
  }
  return res;
}


const Format = {
  formatMoney,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  LatAndLong,
};

export default Format;