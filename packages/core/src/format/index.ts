/**
 * Formatting utilities
 */

/**
 * Enhanced toFixed to solve precision issues
 */
export const formatToFixed = (num: number | string, decimals = 2): string => {
  const parsedNum = typeof num === "string" ? parseFloat(num) : num;
  return (
    Math.round((parsedNum + Number.EPSILON) * Math.pow(10, decimals)) /
    Math.pow(10, decimals)
  ).toFixed(decimals);
};

/**
 * Format money string: 12341234.246 -> $ 12,341,234.25
 */
export const formatMoney = (
  money: number | string,
  symbol = "",
  decimals = 2,
): string => {
  return formatToFixed(money, decimals)
    .replace(/\B(?=(\d{3})+\b)/g, ",")
    .replace(/^/, `${symbol}`);
};

/**
 * Celsius to Fahrenheit
 */
export const celsiusToFahrenheit = (celsius: number): number =>
  (celsius * 9) / 5 + 32;

/**
 * Fahrenheit to Celsius
 */
export const fahrenheitToCelsius = (fahrenheit: number): number =>
  ((fahrenheit - 32) * 5) / 9;

/**
 * Validate and fix Latitude and Longitude
 */
export function LatAndLong(
  lat: string,
  long: string,
): { lat: string; long: string } {
  const res = { lat, long };
  const latreg = /^([-+])?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/;
  const longrg =
    /^([-+])?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,6}|180)$/;

  const isRightLag = latreg.test(lat);
  const isRightLong = longrg.test(long);

  if (!isRightLag || !isRightLong) {
    res.lat = long;
    res.long = lat;
  }

  if (!latreg.test(res.lat)) throw new Error("Latitude Error");
  if (!longrg.test(res.long)) throw new Error("Longitude Error");

  return res;
}

const Format = {
  formatToFixed,
  formatMoney,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  LatAndLong,
};

export default Format;
