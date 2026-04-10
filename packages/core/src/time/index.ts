/**
 * Time and Date utilities
 */

const WEEK_DAY_ENUMS = ["日", "一", "二", "三", "四", "五", "六"];

/**
 * Get weekday name from date
 */
export const getWeekDay = (
  date: string | number | Date,
  prefix = "星期",
): string => {
  const d = new Date(date);
  const weekDayText = WEEK_DAY_ENUMS[d.getDay()];
  return `${prefix}${weekDayText}`;
};

/**
 * Format date string
 */
export function formatDate(
  date: string | number | Date,
  formatStr = "YYYY-MM-DD HH:mm:ss",
): string {
  const curDate = new Date(date);
  if (isNaN(curDate.getTime())) return "Invalid Date";

  const TIME_STRING_MAP: Record<string, number> = {
    "M+": curDate.getMonth() + 1,
    "D+": curDate.getDate(),
    "h+": curDate.getHours(),
    "H+": curDate.getHours(),
    "m+": curDate.getMinutes(),
    "s+": curDate.getSeconds(),
    "q+": Math.floor((curDate.getMonth() + 3) / 3),
    S: curDate.getMilliseconds(),
  };

  let result = formatStr;

  if (/(Y+)/.test(result) || /(y+)/.test(result)) {
    result = result.replace(
      RegExp.$1,
      (curDate.getFullYear() + "").slice(4 - RegExp.$1.length),
    );
  }

  for (const k in TIME_STRING_MAP) {
    if (new RegExp("(" + k + ")").test(result)) {
      const val = TIME_STRING_MAP[k];
      result = result.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? String(val)
          : ("00" + val).slice(String(val).length),
      );
    }
  }
  return result;
}

/**
 * Check if date is valid
 */
export const isDateValid = (...args: any[]): boolean => {
  // @ts-expect-error: allow variable number of arguments for Date constructor
  const d = new Date(...args);
  return !isNaN(d.getTime());
};

/**
 * Check if year is leap year
 */
export const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

/**
 * Calculate day difference between two dates
 */
export const dayDif = (
  date1: string | number | Date,
  date2: string | number | Date,
): number => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return Math.ceil(Math.abs(d1.getTime() - d2.getTime()) / 86400000);
};

const Time = {
  format: formatDate,
  getWeekDay,
  isDateValid,
  isLeapYear,
  dayDif,
};

export default Time;
