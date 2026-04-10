/**
 * Math utilities
 */

/**
 * Round a number to a specified precision
 */
export function numFixed(num: number | string, precision: number = 2): number {
  const n = Number(num);
  const scale = 10 ** precision;
  return Math.round(n * scale) / scale;
}

/**
 * Convert string from arbitrary base to decimal
 */
export const baseBitToDecimal = (str: string, bit: number = 10): number => {
  let base = bit;
  if (bit > 62) base = 62;
  if (bit < 2) base = 2;
  const digits =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let len = str.length;
  let sum = 0;
  let n = 0;
  while (len--) {
    const digit = digits.indexOf(str[len]);
    if (digit === -1) continue;
    sum += digit * Math.pow(base, n);
    n++;
  }
  return sum;
};

/**
 * Convert decimal number to arbitrary base string
 */
export const decimalToBaseBit = (decimal: number, bit: number = 10): string => {
  let base = bit;
  if (bit > 62) base = 62;
  if (bit < 2) base = 2;

  const digits =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const result: string[] = [];
  let dec = Math.floor(decimal);

  if (dec === 0) return "0";

  while (dec > 0) {
    const remainder = dec % base;
    result.push(digits[remainder]);
    dec = Math.floor(dec / base);
  }

  return result.reverse().join("");
};

const EARTH_RADIUS = 6371393.0;
function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180.0);
}

/**
 * Calculate distance between two GPS coordinates (meters)
 */
export function calcDistance(
  loc1: number[] | string,
  loc2: number[] | string,
  splitStr = ",",
): number {
  const loc1Arr: number[] =
    typeof loc1 === "string" ? loc1.split(splitStr).map(Number) : loc1;
  const loc2Arr: number[] =
    typeof loc2 === "string" ? loc2.split(splitStr).map(Number) : loc2;

  if (!loc1Arr || !loc2Arr || loc1Arr.length < 2 || loc2Arr.length < 2)
    return 0.0;

  const [lng1, lat1Raw] = loc1Arr;
  const [lng2, lat2Raw] = loc2Arr;

  const lat1 = toRadians(lat1Raw);
  const lat2 = toRadians(lat2Raw);
  const dLat = toRadians(lat2Raw - lat1Raw);
  const dLon = toRadians(lng2 - lng1);

  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS * Math.abs(c);
}

const math = {
  numFixed,
  baseBitToDecimal,
  decimalToBaseBit,
  calcDistance,
};

export default math;
