const WEEK_DAY_ENUMS = ["日", "一", "二", "三", "四", "五", "六"];
/**
 * @func 日期转换星期
 * @desc 
 * @param {Date} date 日期 
 * @return {String} 
 */
const getWeekDay = (date, prefix = "星期") => {
  const weekDayText = WEEK_DAY_ENUMS[new Date(date).getDay()];
  return `${prefix}${weekDayText}`;
}


/**
 * @func 格式化
 * @desc 
 * @param {}  
 * @return {} 
 */
function format(date, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  const curDate = new Date(date);
  const TIME_STRING_MAP = {
    "M+": curDate.getMonth() + 1,                 //月份
    "D+": curDate.getDate(),                    //日
    "h+": curDate.getHours(),                   //小时
    "H+": curDate.getHours(),                   //小时
    "m+": curDate.getMinutes(),                 //分
    "s+": curDate.getSeconds(),                 //秒
    "q+": Math.floor((curDate.getMonth() + 3) / 3), //季度
    "S": curDate.getMilliseconds()             //毫秒
  };
  if (/(Y+)/.test(formatStr) || /(y+)/.test(formatStr)) {
    formatStr = formatStr.replace(RegExp.$1, (curDate.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in TIME_STRING_MAP) {
    if (new RegExp("(" + k + ")").test(formatStr)) {
      formatStr = formatStr.replace(RegExp.$1, (RegExp.$1.length == 1) ? (TIME_STRING_MAP[k]) : (("00" + TIME_STRING_MAP[k]).substr(("" + TIME_STRING_MAP[k]).length)));
    }
  }
  return formatStr;
}

/**
 * @func 检查日期是否有效
 * @desc 
 * @param {}  
 * @return {} 
 */
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

/**
 * @func 判断是否为润年
 * @desc 
 * @param {number} year 需要判断的年份
 * @return {boolean} 若为润年返回true,否则返回false 
 */
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * @func 计算两日期天数差
 * @desc 
 * @param {Date} date1 日期1 
 * @param {Date} date2 日期2
 * @return {number} 天数差 
 */
const dayDif = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return Math.ceil(Math.abs(d1.getTime() - d2.getTime()) / 86400000)
}


const Time = {
  format,
  getWeekDay,
  isDateValid,
  isLeapYear,
  dayDif,
}

export default Time;