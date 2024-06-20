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

const Time = {
  getWeekDay,
}

export default Time;